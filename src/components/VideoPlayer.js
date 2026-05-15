import React from 'react'
import YouTube from 'react-youtube'


const VideoPlayer = ({vidKey,title,descrip}) => {

   
    const youtubeID = vidKey;
    const onReady = (e) => {
    console.log(e.target); 
  };
  
  

  return (
    <div>
      {/* <h1>Video Player</h1> */}
      <h3>{title}</h3>
      <p>{descrip}</p>
      <div className="player">
            <YouTube videoId={youtubeID} onReady={onReady} />
      </div>
    </div>
  )
}

export default VideoPlayer
