import Countdown from 'react-countdown';
import styles from '../LevelOne/LevelOne.module.css'
const TimerComponent = () => {

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
        <Countdown zeroPadTime={2} date={Date.now() + 120000} renderer={renderer} />
     </div>
    )
}

export default TimerComponent