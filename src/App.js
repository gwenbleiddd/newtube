import Search from './components/Search'
import VideoPlayer from './components/VideoPlayer'
import VideoList from './components/VideoList'
//import data from './exampleVideoData.json'
import { useState } from 'react'
import youtubeApi from './api/Youtube'

function App() {
  const[userInput,setUserInput] = useState('');
  const[vidKey,setVidKey] = useState('');
  const[title,setTitle] = useState('');
  const[descrip,setDescrip] = useState('');
  const[apiData,setApiData] = useState([]);
 


 
  const getSearchData = async data =>{
    setUserInput(data)
    const response = await youtubeApi.get("/search",{
      params:{
        q:data
      }
    })
    setApiData(response.data.items);
    //console.log(response)
  }

  const getVidData = (key,title,descrip) =>{
     setVidKey(key);
     setTitle(title);
     setDescrip(descrip);
  }

  


  return (
    
  <div className="App">
        
      <div className='Header'>
          <img src='../youtube_logo.png' alt='' width={150} height={150}></img>
        <div className="Search">
           <Search onSubmit={getSearchData}/>
        </div>

      </div>

      <div className='Body'>
        <div className="Left">
        
          <div className="VideoPlayer">
            <VideoPlayer 
              fileData={apiData} 
              vidKey={vidKey}
              title={title}
              descrip={descrip}
            />
          
         </div>
      </div>

      <div className="Right">
        <div className='VideoList' >
          <VideoList 
          fileData={apiData} 
          searchData={userInput} 
          getVidData={getVidData}
          />
        </div>
      </div>
  </div>
      
     
    </div>
  );
}

export default App;
