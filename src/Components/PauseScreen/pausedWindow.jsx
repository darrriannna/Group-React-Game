import React, { useState } from 'react';
import '../pauseScreen.css';

const pauseWindow = () => {

// main component

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
        <div id='pause-panel' className="hidden">
        <h2>Paused</h2>
        <button onClick={handleResumeClick} id='resume-btn'>Resume</button>
        <button onClick={handleSettingsClick} id='settings-btn'>Settings</button>
        <button onClick={handleQuitClick} id='quit-btn'>Quit game</button>
      </div>
      )
    }

export default pauseWindow