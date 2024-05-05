// import React from "react";
import styles from "./loosingPage.module.css";
import goBackMenu from "../../assets/icons/Go-back-menu.svg";
import astronautFlying from "../../assets/images/austronaut-levitating.svg";
import { useState } from "react";

const LoosingPage = () => {
  return (
    <div className={styles.loosingPageContainer}>
      <div className={styles.topDiv}>
        <div className={styles.goBack}>
          <img src={goBackMenu} alt="Go back icon" />
        </div>

        <div className={styles.loosingInfo}>
          <h1>You lost all lives!</h1>
          <h2>Now aliens are living on the moon</h2>
        </div>
      </div>

      <div className={styles.middleDiv}>
        <div className={styles.flyingAstronaut}>
          <img src={astronautFlying} alt="flying astronaut" />
        </div>

        <p className={styles.loosingPageScore}>Your Score: {score}</p>
      </div>
    </div>
  );
};
export default LoosingPage;
