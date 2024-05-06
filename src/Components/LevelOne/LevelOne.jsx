import { useState, useEffect } from 'react';
import styles from './LevelOne.module.css';
import pauseButton from '../../assets/icons/Pause-icon.svg';
import heart from '../../assets/icons/Heart-game-red.svg';
import grayHeart from '../../assets/icons/Heart-game-gray.svg'
import AlienMole from '../Alien/alienMole';
import Hammer from '../hammer/hammer';
import clickPause from '../../../public/music/buttonclick.wav'; 
import explosionSound from '../../../public/music/bomb-explosion.mp3'
import GameOverPage from '../gameOver/gameOverPage';
import ExplosionSVG from '../../assets/images/explosion-boom.svg'; // Import the explosion SVG

const LevelOne = () => {
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hearts, setHearts] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    const [showExplosion, setShowExplosion] = useState(false); // State to control the visibility of the explosion SVG

    const scoreIncrease = () => {
        setScore(score + 10);
    };
    
    const bombClick = () =>{
        audioExplosion.play();
        if (hearts > 0) {
            setHearts(hearts -1);
            setShowExplosion(true); // Show explosion SVG
            setTimeout(() => {
                setShowExplosion(false); // Hide explosion SVG after 3 seconds
            }, 1000);
        }
    };

    const audioClick = new Audio(clickPause);
    const audioExplosion = new Audio(explosionSound);

    const handleClick = () => {
        if (!isPlaying) {
            audioClick.play();
            setIsPlaying(true);
            audioClick.addEventListener('ended', () => {
                setIsPlaying(false);
            });
        }
    };

  useEffect(() =>{
		if (hearts === 0) {
			setGameOver(true)
		}
	},[hearts])

    return (
        <>
            {gameOver ? (
                <GameOverPage score = {score}/>
            ) : (
                <div className={`${styles.levelContainer}`}>
                    <div className={styles.topContainer}>
                        <div className={styles.miniContainer1}>
                            <div className={styles.svg}>
                                <img src={pauseButton} alt="Pause" onClick={handleClick} />
                            </div>
                            <p className={styles.gameText}>Player 1</p>
                        </div>
                        <div className={styles.miniContainer2}>
                            <div className='hearts'>
                                {Array.from({length: 3}, (_, index) =>(
                                    <img 
                                    key={index} 
                                    src={index < hearts ? heart : grayHeart} 
                                    alt= 'Heart'/>
                                ))}
                            </div>
                            <p className={styles.gameText}>Score: {score}</p>
                        </div>
                    </div>
                    <AlienMole  alienId={styles.a1} onAlienClick ={scoreIncrease} onBombClick={bombClick}/>
                    {showExplosion && <img src={ExplosionSVG} className={`${styles.explosion} ${showExplosion && styles.active}`}/>}
                    <AlienMole alienId={styles.a2}  onAlienClick ={scoreIncrease} onBombClick={bombClick}/>
                    <AlienMole alienId={styles.a3}  onAlienClick ={scoreIncrease} onBombClick={bombClick}/>
                    <AlienMole alienId={styles.a4}  onAlienClick ={scoreIncrease} onBombClick={bombClick}/>
                    <AlienMole alienId={styles.a5}  onAlienClick ={scoreIncrease} onBombClick={bombClick}/>
                    <AlienMole alienId={styles.a6}  onAlienClick ={scoreIncrease} onBombClick={bombClick}/>
                    <AlienMole alienId={styles.a7}  onAlienClick ={scoreIncrease} onBombClick={bombClick}/>
                </div>
            )}
            <Hammer />
        </>
    );
}

export default LevelOne;

