/* eslint-disable react/prop-types */
import styles from '../LevelOne/LevelOne.module.css';
import alien from '../../assets/images/alien-play-game.svg';
import React, { useState, useEffect, useCallback } from 'react';

const AlienMole = ({ alienId, onAlienClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleAlienClick = useCallback(() => {
        setIsVisible(false);
        onAlienClick();
    }, [onAlienClick]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(isVisible => !isVisible); // Toggle visibility
        }, getRandomDelay(3000, 8000)); // Delay for appearance and disappearance


        return () => clearTimeout(timer);
    }, [isVisible]);

    const getRandomDelay = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };


    return (
        <img
            className={`${styles.alien} ${alienId} ${
                isVisible ? styles.appear : styles.disappear
            }`}
            src={alien}
            alt="alien"
            onClick={handleAlienClick}
        />
    );
};

const MemoizedAlienMole = React.memo(AlienMole);
export default MemoizedAlienMole;
