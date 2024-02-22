import React from "react";
import styles from "../styles/Points.module.css";
const Points = () => {
  return (
    <div className={styles.mainbox}>
      <div
        style={{
          border: "3px solid black",
          textShadow:
            "2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000,1px 1px #000000, -1px -1px #000000, 1px -1px #000000",
        }}
        className={styles.mainCard}
      >
        <div className={styles.mainPoints}>42</div>
        <div className={styles.mainHeading}>Total Points</div>
      </div>
    </div>
  );
};

export default Points;
