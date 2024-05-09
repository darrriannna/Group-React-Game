import Countdown from 'react-countdown';
import styles from '../LevelOne/LevelOne.module.css'
// eslint-disable-next-line react/prop-types
const TimerComponent = ({ countdownTime, isRunning }) => {

    const renderer = ({ minutes, seconds, completed}) => {

        const paddedMinutes = String(minutes).padStart(2, '0');
        const paddedSeconds = String(seconds).padStart(2, '0');
        if (completed) {
            
            // Render a completed state
            return <span className={styles.gameText}>Ding!</span>;
        } else {
            // Render a countdown
            return <span  className={styles.gameText}>{paddedMinutes}:{paddedSeconds}</span>;
        }
    };

    return (
        <div className={styles.bottomContainer}>
         {isRunning && <Countdown date={countdownTime} renderer={renderer} />}
     </div>
    )
}

export default TimerComponent