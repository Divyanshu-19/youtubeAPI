import React from 'react';
// import VideoItem from './VideoItem';

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui segment">
            <iframe title="video player" src={videoSrc}  width="100%" height="500px"></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;