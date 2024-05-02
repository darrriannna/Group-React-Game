import React, { useRef, useEffect, useState } from 'react';
import hammer from '../../assets/images/Hammer-game.svg';
import hammercss from './hammer.module.css';
import clickSound from '../../../public/music/hammer-whack.mp3';

const Hammer = () => {
    const cursorRef = useRef(null);
    const clickRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() => {
        const cursor = cursorRef.current;
        const clicked = clickRef.current;
        const audio = new Audio(clickSound);
        
        if (!cursor || !clicked) return;

        const handleMouseMove = (e) => {
            cursor.style.top = `${e.pageY}px`;
            cursor.style.left = `${e.pageX}px`;
        }

        const handleClick = () => {
            if (!isPlaying) {
                audio.play();
                setIsPlaying(true);
                setTimeout(() => {
                    setIsPlaying(false);
                }, 100); 
            }

            clicked.style.transform = 'rotate(-30deg)';
            setTimeout(() => {
                clicked.style.removeProperty('transform');
            }, 100);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
        };
    }, [isPlaying]);

    return (
        <div ref={cursorRef} className={hammercss.cursor}>
            <div ref={clickRef} className={hammercss.hammerContainer}>
                <img src={hammer} alt='hammer' />
            </div>
        </div>
    );
}

export default Hammer;
