// // import React from "react";
// import styles from "./winPage.module.css";
// import goBackMenu from "../../assets/icons/Go-back-menu.svg";
// //import alienMars from "../../assets/images/Alien-on-mars.svg";
// import astronautWon from "../../assets/images/Austonaut-won.svg";
// // import { useState } from "react";

// const WinPage = () => {
//   return (
//     <div className={styles.winPageContainer}>
//       <div className={styles.goBack}>
//         <img src={goBackMenu} alt="Go back icon" />
//       </div>

//       <div className={styles.winInfo}>
//         <h1>You Won!</h1>
//         <h2>
//           Aliens are going home! <br /> Your Score: 300
//         </h2>
//       </div>

//       <div className={styles.astronautWon}>
//         <img
//           src={astronautWon}
//           alt="Picture of astronaut with his hand up on moon"
//         />
//       </div>
//     </div>
//   );
// };
// export default WinPage;

import styles from "./winPage.module.css";
import goBackMenu from "../../assets/icons/Go-back-menu.svg";
import astronautWon from "../../assets/images/Austonaut-won.svg";

// eslint-disable-next-line react/prop-types
const WinPage = ({ score }) => {
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
        <div className={styles.astronautWon}>
          <img
            src={astronautWon}
            alt="Picture of astronaut with his hand up on moon"
          />
        </div>
        <div className={styles.winInfo}>
          <h1>You Won!</h1>
          <h2>
            Aliens are going home! <br /> Your Score: {score}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WinPage;
