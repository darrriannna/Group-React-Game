import styles from './LevelOne.module.css'
import pauseButton from '../../assets/icons/Pause-icon.svg'
import heart from '../../assets/icons/Heart-game-red.svg'
import soundOn from '../../assets/icons/Sound-ON-icon.svg'



const LevelOne = () => {
    return (
        <>
            <div className={styles.levelContainer}>
                <div className={styles.topContainer}>
                <div className={styles.miniContainer1}>
                <div className={styles.svg}>
                <img src={pauseButton} alt="Pause" />
                </div>
                <p className={styles.gameText}>Player 1</p>
                </div>
                <div className={styles.miniContainer2}>
                <div className='hearts'>
                    <img src={heart} alt="Heart" />
                    <img src={heart} alt="Heart" />
                    <img src={heart} alt="Heart" />
                </div>
                <p className={styles.gameText}>Score: 0</p>
                </div>
                </div>
                <div className={styles.soundIcon}>
                    <img src={soundOn}/>
                </div>
            </div>
        </>
    )
}

export default LevelOne;