import { useState, useEffect } from "react";
import styles from '../LevelOne/LevelOne.module.css'

// eslint-disable-next-line react/prop-types
const Timer = ({ initialTime, onStop, paused }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    let timer = null;

    if (!paused) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 0) {
            clearInterval(timer);
            onStop(); // Call the onStop function when the timer reaches zero
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [initialTime, onStop, paused]);

  useEffect(() => {
    if (timeLeft === 0) {
      // If time is up, call the onStop function to navigate to a different page
      onStop();
    }
  }, [timeLeft, onStop]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={styles.bottomContainer}>
      <span className={styles.gameText}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};

export default Timer;
