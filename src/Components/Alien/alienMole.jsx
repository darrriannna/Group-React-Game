import styles from '../LevelOne/LevelOne.module.css'
import alien from '../../assets/images/alien-play-game.svg'
import { useState, useEffect } from 'react';





// eslint-disable-next-line react/prop-types
const AlienMole = ({ alienId }) => {

  const [isHidden, setIsHidden] = useState(false);

  const [isClicked, setIsClicked] = useState(false);



  const handleClick = function () {
    setIsClicked(true)
    setIsHidden(true)

    setTimeout(() => {
      setIsHidden(false)

      if (!isClicked) {
        scheduleNextAppearance();
      }
    }, 1000);
  }

  useEffect(() => {

    scheduleNextAppearance()

    return () => clearTimeout();
  }, []);


  const scheduleNextAppearance = () => {

    setTimeout(() => {
      setIsHidden(true);
      setTimeout(() => {
          setIsHidden(false);
          scheduleNextAppearance();
      }, getRandomDelay(5000, 3000)); // Between 3000ms and 5000ms
  }, getRandomDelay(8000, 3000)); // Between 5000ms and 8000ms
  };

  const getRandomDelay = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <img className={`${styles.alien} ${alienId} ${isHidden ? styles.disappear : styles.appear}`} src={alien} alt='alien' onClick={handleClick} />
  )
}

export default AlienMole;