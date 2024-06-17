import React from 'react';

const VideoPlayer = ({ videoId }) => {
    if (!videoId) return null;

    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    const styles = {
        videoPlayer: {
            width: '100%',
            height: '400px',
            marginBottom: '20px'
        }
    };

    return (
        <div style={styles.videoPlayer}>
            <iframe
                title="YouTube Video Player"
                width="100%"
                height="100%"
                src={videoUrl}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
