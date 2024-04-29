import styles from '../LevelOne/LevelOne.module.css'
import alien from '../../assets/images/alien-play-game.svg'
import { useState, useEffect } from 'react';





// eslint-disable-next-line react/prop-types
const AlienMole = ({ alienId, onAlienClick }) => {

  const [isHidden, setIsHidden] = useState(true);
  const [isClicked, setIsClicked] = useState(false);  //Alien hidden in the beginning
  const [appearTimer, setAppearTimer] = useState(null)
  const [disappearTimer, setDisappearTimer] = useState(null)
  
  const handleClick = function () {
    setIsClicked(true)
	  setIsHidden(false)
	clearTimeout(appearTimer)
	clearTimeout(disappearTimer)
	 
    setTimeout(() => {
		 setIsHidden(true)
		 if (!isClicked) {
			 scheduleNextAppearance();
			 setTimeout(() => {
				 setIsClicked(false)
			 }, 300);
			} else{
				setTimeout(() => {
					setIsClicked(false)
				}, 300);
				// scheduleNextAppearance();
			}
		}, 1000);
		onAlienClick()
  }

  useEffect(() => {	
//start timers after creating components
    scheduleNextAppearance()


    return () => clearTimeout(appearTimer, disappearTimer);
  }, []);


  const scheduleNextAppearance = () => {
	
	//first timer for make them visible
	if(isHidden) {

		const appearTimer = setTimeout(() => {	
			//Aliens are visible   
			setIsHidden(false);
			
			//second timer to make them hidden
			const disappearTimer = setTimeout(() => {
					setIsHidden(true);
					
					scheduleNextAppearance();
				}, getRandomDelay(5000, 3000)); // Between 3000ms and 5000ms
				setAppearTimer(appearTimer)
		}, getRandomDelay(8000, 3000)); // Between 5000ms and 8000ms
		setDisappearTimer(disappearTimer)
		};
	}

  const getRandomDelay = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <img className={`${styles.alien} ${alienId} ${isHidden ? styles.disappear : styles.appear} ${isClicked ? styles.punched : ''}`} src={alien} alt='alien' onClick={handleClick} />
  )
}

export default AlienMole;