import React, { useState } from 'react';
import './pauseStyle.css';
import MainButton from '../mainButton/mainButton';
import UseLink from '../linksDelay/linksDelay';
// main component
function Paused ({runningGame}) {
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
            {/* <div id="pause-container">
                <img
                src="pause-icon.svg"
                alt="Pause"
                className="pause-btn"
                onClick={handlePauseClick}
                />
            </div> */}

        {setShowPausePanel && (
            <div id="pause-panel" className="pause-panel">
                <h2 className='pause-title'>Pause</h2>
					 <p className='pause-text'>Do you want to continue the game?</p>
                <MainButton name='Yes' onClick={runningGame}/>
					 <UseLink to={'/'}>
               	 <button className='quit-game-btn'>Exit game</button>
					 </UseLink>
            </div>
        )}
        </div>
    );
}

export default Paused