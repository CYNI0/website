import React from 'react';
import './ResultsPage.css';
import outfitImage from './outfit-placeholder.png'; // Placeholder for the outfit image

const ResultsPage = ({ genre }) => {
    return (
        <div className="results-page">
            <div className="results-container">
                <h1 className="main-genre">Your main genre is...</h1>
                <h2 className="genre">{genre || "Goth"}</h2>
                <h3 className="outfit-title">Here is your outfit!</h3>
                <img src={outfitImage} alt="Outfit" className="outfit-image" />
            </div>
        </div>
    );
};

export default ResultsPage;