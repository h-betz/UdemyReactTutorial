import React from 'react';

const VideoList = (props) => {
    const videos = props.videos.map((video) => {
        return <VideoCard key={video.videoId} video={video} />
    });
    return <div className="video-list">{videos}</div>
};

export default VideoList;