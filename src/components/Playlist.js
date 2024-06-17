import React from 'react';

const Playlist = ({ playlist, removeFromPlaylist }) => {
    if (!playlist.length) return <p>No videos in playlist.</p>;

    const styles = {
        playlistItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px'
        },
        removeButton: {
            marginLeft: '10px',
            padding: '5px 10px',
            cursor: 'pointer',
            backgroundColor: '#f44336',
            color: '#fff',
            border: 'none',
            borderRadius: '3px'
        }
    };

    const playlistItems = playlist.map(video => (
        <div key={video.id} style={styles.playlistItem}>
            <p>{video.title}</p>
            <button style={styles.removeButton} onClick={() => removeFromPlaylist(video.id)}>Remove</button>
        </div>
    ));

    return <div>{playlistItems}</div>;
};

export default Playlist;
