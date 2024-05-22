import React, { useState } from 'react';

const PauseWindow = () => {

// main component

    const [showPausePanel, setShowPausePanel] = useState(false)

   

    //function to handle click event on the resume button
    const handleResumeClick = () => {
        setShowPausePanel(false);
    };


    
    // function to handle the click event on the quit button
    const handleQuitClick = () => {
        // add logic here to return to start screen
    };


    return (
       <div id='pause-panel' className="hidden">
        <h2>Pause</h2>
        <button onClick={handleResumeClick} id='resume-btn'>Resume</button>
        {/* <button onClick={handleSettingsClick} id='settings-btn'>Settings</button> */}
        <button onClick={handleQuitClick} id='quit-btn'>Quit game</button>
      </div>
      )
    }

export default PauseWindow