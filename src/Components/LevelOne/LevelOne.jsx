import styles from './LevelOne.module.css';
import pauseButton from '../../assets/icons/Pause-icon.svg'
import heart from '../../assets/icons/Heart-game-red.svg'
import AlienMole from '../Alien/alienMole';
import {useState} from 'react'





const LevelOne = () => {
	
	const [score, setScore] = useState(0)

	const scoreIncrease = () => {
		setScore(score + 10)
		console.log(score);
	}
    return (
        <>
            <div className={`${styles.levelContainer}`}>
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
                        <p className={styles.gameText}>Score: {score}</p>
                    </div>
                </div>
                <AlienMole  alienId={styles.a1} onAlienClick ={scoreIncrease}/>
                <AlienMole alienId={styles.a2}  onAlienClick ={scoreIncrease}/>
                <AlienMole alienId={styles.a3}  onAlienClick ={scoreIncrease}/>
                <AlienMole alienId={styles.a4}  onAlienClick ={scoreIncrease}/>
                <AlienMole alienId={styles.a5}  onAlienClick ={scoreIncrease}/>
                <AlienMole alienId={styles.a6}  onAlienClick ={scoreIncrease}/>
                <AlienMole alienId={styles.a7}  onAlienClick ={scoreIncrease}/>
            </div>
        </>
    )
}

export default LevelOne;