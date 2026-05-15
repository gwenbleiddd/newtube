import VideoListEntry from './VideoListEntry'



const VideoList = ({fileData,searchData,getVidData}) => {


  return (
    <div className='dispVidList'  >
      <h1>Video List</h1>
      
         
         <VideoListEntry fileData={fileData} searchData={searchData} getVidData={getVidData}/>
      
    </div>
  )
}

export default VideoList
