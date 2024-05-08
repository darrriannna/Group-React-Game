/* eslint-disable react/prop-types */
import styles from '../LevelOne/LevelOne.module.css';
import alien from '../../assets/images/alien-play-game.svg';
import bomb from '../../assets/images/Bomb-gameplay.svg';
import React, { useState, useEffect, useCallback } from 'react';

const AlienMole = ({ alienId, onAlienClick, onBombClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAlien, setIsAlien] = useState(true); // State to track whether to render alien or bomb

    const handleAlienClick = useCallback(() => {
        setIsVisible(false);
        if (!isAlien) {
            console.log("Boom!");
				onBombClick()
        } else {
            onAlienClick();
        }
    }, [onAlienClick, isAlien, onBombClick]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const randomValue = Math.random();
            if (randomValue < 0.7) {
                setIsVisible(isVisible => !isVisible); // Toggle visibility
                setIsAlien(true); // Render alien
            } else {
                setIsVisible(true); // Show the bomb
                setIsAlien(false); // Render bomb
                // Set a delay before switching back to alien
                setTimeout(() => {
                    setIsVisible(false);
                    setIsAlien(true); // Reset to render alien next time
                }, 5000); // Set a short delay before switching back to alien
                // Set a timer to hide the bomb after a certain delay
                setTimeout(() => {
                    setIsVisible(false);
                }, getRandomDelay(1000, 3000)); // Set a short delay for bomb disappearance
            }
        }, getRandomDelay(3000, 8000)); // Delay for appearance and disappearance

        return () => clearTimeout(timer);
    }, [isVisible, isAlien]); // Update useEffect dependencies

    const getRandomDelay = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return (
        <img
            className={`${styles.alien} ${alienId} ${
                isVisible ? styles.appear : styles.disappear
            }`}
            src={isAlien ? alien : bomb} // Render either alien or bomb based on state
            alt={isAlien ? "alien" : "bomb"} // Set alt text accordingly
            onClick={handleAlienClick}
        />
    );
};

const MemoizedAlienMole = React.memo(AlienMole);
export default MemoizedAlienMole;
