import { useEffect } from "react";
import styles from "./winPage.module.css";
import goBackMenu from "../../assets/icons/Go-back-menu.svg";
import astronautWon from "../../assets/images/Austonaut-won.svg";
import crowdCheer from "../../../public/music/crowd-cheer.mp3";

// eslint-disable-next-line react/prop-types
const WinPage = ({ score }) => {
  // eslint-disable-next-line no-undef
  useEffect(() => {
    const audio = new Audio(crowdCheer);
    audio.play();
  }, []);

  const handleGoBack = () => {
    // Function to handle going back to LevelOne page
    window.location.href = "/levelOne";
  };

  return (
    <div className={styles.winPageContainer}>
      <div className={styles.goBack} onClick={handleGoBack}>
        <img src={goBackMenu} alt="Go back icon" />
      </div>

      <div className={styles.winMiddleContainer}>
        <div className={styles.winInfo}>
          <h1>Congratulations! You Won!!!</h1>
          <h2>Bye Bye Aliens! </h2>
          <h2 className={styles.winScore}>Your Score: {score}</h2>
        </div>
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
