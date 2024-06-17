import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import Playlist from './components/Playlist';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [playlist, setPlaylist] = useState([]);

    const onVideoSelect = video => {
        setSelectedVideo(video);
    };

    const addToPlaylist = video => {
        setPlaylist([...playlist, video]);
    };

    const removeFromPlaylist = videoId => {
        const updatedPlaylist = playlist.filter(video => video.id !== videoId);
        setPlaylist(updatedPlaylist);
    };

    const handleSearchSubmit = async term => {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    q: term,
                    part: 'snippet',
                    maxResults: 5,
                    key: 'AIzaSyBB1127wWHt-xlfyATMc7YULusBTkhzmYw', // Replace with your YouTube API key
                    type: 'video'
                }
            });

            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]); // Select the first video by default
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    return (
        <Router>
            <div className="app">
                <header className="header">
                    <h1>Videoholic</h1>
                </header>

                <div className="content">
                    <SearchBar onFormSubmit={handleSearchSubmit} />
                    <div className="video-view">
                        <VideoPlayer videoId={selectedVideo ? selectedVideo.id.videoId : null} />
                        <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />
                    </div>
                    <VideoList videos={videos} onVideoSelect={addToPlaylist} />
                </div>

                <footer className="footer">
                    <p>© {new Date().getFullYear()} Videoholic. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
