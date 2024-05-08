// import React from "react";
import styles from "./winPage.module.css";
import goBackMenu from "../../assets/icons/Go-back-menu.svg";
//import alienMars from "../../assets/images/Alien-on-mars.svg";
import astronautWon from "../../assets/images/Austonaut-won.svg";
// import { useState } from "react";

const WinPage = () => {
  return (
    <div className={styles.winPageContainer}>
      <div className={styles.goBack}>
        <img src={goBackMenu} alt="Go back icon" />
      </div>

      <div className={styles.winInfo}>
        <h1>You Won!</h1>
        <h2>
          Aliens are going home! <br /> Your Score: 300
        </h2>
      </div>

      <div className={styles.astronautWon}>
        <img
          src={astronautWon}
          alt="Picture of astronaut with his hand up on moon"
        />
      </div>
    </div>
  );
};
export default WinPage;
