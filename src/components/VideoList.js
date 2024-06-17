import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
    if (!videos) return null;

    const styles = {
        videoItem: {
            display: 'flex',
            marginBottom: '10px',
            cursor: 'pointer'
        },
        thumbnail: {
            marginRight: '10px',
            width: '120px',
            height: '90px'
        },
        videoInfo: {
            display: 'flex',
            flexDirection: 'column'
        }
    };

    const renderedVideos = videos.map(video => (
        <div key={video.id.videoId} style={styles.videoItem} onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} style={styles.thumbnail} />
            <div style={styles.videoInfo}>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.channelTitle}</p>
            </div>
        </div>
    ));

    return <div>{renderedVideos}</div>;
};

export default VideoList;
