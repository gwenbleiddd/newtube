import {React} from 'react'



const VideoListEntry = ({fileData,searchData,getVidData}) => {



  return (
  <div className='entry'>
    
      <ul>
       
        {
        //must wrap setState within a arrow function to prevent to many re renders
        fileData.map((val) => {
  return (
    <li
      key={val.id.videoId}
      onClick={() =>
        getVidData(
          val.id.videoId,
          val.snippet.title,
          val.snippet.description
        )
      }
    >
      <div className='thumb'>
        <img src={val.snippet.thumbnails.default.url} alt='' />
      </div>

      <div className='titleDescrip'>
        <h6 className='title'>{val.snippet.title}</h6>
        <h6>{val.snippet.description}</h6>
      </div>
    </li>
  );

  })}
</ul>
     
    </div>
  )
}

export default VideoListEntry
