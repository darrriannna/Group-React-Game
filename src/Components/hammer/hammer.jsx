import hammer from '../../assets/images/Hammer-game.svg';
import hammercss from './hammer.module.css';
import { useRef, useEffect } from 'react';

const Hammer = () => {
    const cursorRef = useRef(null);
    const clickRef = useRef(null);
    useEffect(() => {
        const cursor = cursorRef.current;
        const clicked = clickRef.current
        if (!cursor || !clicked) return;

        const handleMouseMove = (e) => {
            cursor.style.top = `${e.pageY}px`
            cursor.style.left = `${e.pageX}px`
        }

        const handleClick = () => {
           
    
            clicked.style.transform = 'rotate(-30deg)';
        
            setTimeout(() => {
                clicked.style.removeProperty('transform');
            }, 100);
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('click', handleClick)

    }, [])

    



    return (
        <div ref={cursorRef}  className={hammercss.cursor} >
            <div ref={clickRef} className={hammercss.hammerContainer}>
                <img  src={hammer} alt='hammer' />
            </div>
        </div>
    )
}

export default Hammer;