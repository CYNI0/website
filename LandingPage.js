import React from 'react';
import './LandingPage.css';
import spotifyLogo from './spotify-logo.png'; // Spotify logo image

const LandingPage = ({ onConnect }) => {
    return (
        <div className="landing-page">
            <div className="container">
                <h1 className="title">
                    <div>YOUR</div>
                    <div>SPOTIFY</div>
                    <div>OUTFIT</div>
                </h1>
                <p className="subtitle">Your Outfit, Inspired by Your Music Taste</p>
                <button href="https://accounts.spotify.com/authorize?client_id=b3663f88aa9d4b85a24b868d09128f1f&amp;response_type=token&amp;redirect_uri=https://scripteds.github.io/MoodSwinger/second_page.html&amp;scope=user-read-private,user-read-email,playlist-modify-public&amp;state=STATE&amp;show_dialog=true" className="connect-button" onClick={onConnect}>
                    <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo" />
                    Connect Spotify
                </button>
                

                
            </div>
        </div>
    );
};

export default LandingPage;