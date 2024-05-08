import { useRef, useEffect, useState } from 'react';
import hammer from '../../assets/images/Hammer-game.svg';
import hammercss from './hammer.module.css';
import clickSound from '../../../public/music/hammer-whack.mp3';

const Hammer = () => {
    const cursorRef = useRef(null);
    const clickRef = useRef(null);
    const audioRef = useRef(new Audio(clickSound));
    const [isPlaying, setIsPlaying] = useState(false);
    const hammerImageRef = useRef(null); // Ref to memoize the hammer image element

    useEffect(() => {
        const cursor = cursorRef.current;
        const clicked = clickRef.current;
        const audio = audioRef.current;

        if (!cursor || !clicked) return;

        let animationFrameId;

        const handleMouseMove = (e) => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                cursor.style.top = `${e.pageY}px`;
                cursor.style.left = `${e.pageX}px`;
            });
        };

        const handleClick = () => {
            if (!isPlaying) {
                audio.play();
                setIsPlaying(true);
                setTimeout(() => {
                    setIsPlaying(false);
                }, 100);
            }

            clicked.style.transition = 'transform 0.1s';
            clicked.style.transform = 'rotate(-30deg)';
            setTimeout(() => {
                clicked.style.removeProperty('transform');
            }, 100);
        };

        // Add passive option for better performance
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPlaying]);

    // Memoize the hammer image element to prevent unnecessary re-renders
    if (!hammerImageRef.current) {
        hammerImageRef.current = (
            <img  src={hammer} alt="hammer" />
        );
    }

    return (
        <div ref={cursorRef} className={hammercss.cursor}>
            <div ref={clickRef} className={hammercss.hammerContainer}>
           {hammerImageRef.current}
            </div>
        </div>
    );
};

export default Hammer;
