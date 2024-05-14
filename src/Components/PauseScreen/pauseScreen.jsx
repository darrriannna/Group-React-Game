import React, { useState } from 'react';
import '../pauseScreen.css';
// main component
function Paused () {
    const [showPausePanel, setShowPausePanel] = useState(false)

    // function to handle click event on the pause button
    const handlePauseClick = () => {
        setShowPausePanel(true);
    };

    //function to handle click event on the resume button
    const handleResumeClick = () => {
        setShowPausePanel(false);
    };

    //function to handle click event on the settings button
    const handleSettingsClick = () => {
        // add settings logic here
    };
    
    // function to handle the click event on the quit button
    const handleQuitClick = () => {
        // add logic here to return to start screen
    };

    return (
        <div className="Paused">
            <div id="pause-container">
                <img
                src="pause-icon.svg"
                alt="Pause"
                className="pause-btn"
                onClick={handlePauseClick}
                />
            </div>

        {setShowPausePanel && (
            <div id="pause-panel" className="pause-panel">
                <h2>Paused</h2>
                <button onClick={handleResumeClick}>Resume</button>
                <button onClick={handleSettingsClick}>Settings</button>
                <button onClick={handleQuitClick}>Quit game</button>
            </div>
        )}
        </div>
    );
}

export default Paused