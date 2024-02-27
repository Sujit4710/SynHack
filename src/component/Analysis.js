import { Paper } from "@mui/material";
import React from "react";
import styles from "../styles/Analysis.module.css";

const Analysis = () => {
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
        <div
          style={{
            display: "flex",
            flexDirection: "col",
            margin: "50px 200px",
          }}
        >
<div style={{width:"50%"}}>
    asd
</div>

<div style={{width:"50%"}}>
    asd
</div>

        </div>

        <div className={styles.mainPoints}>42</div>
        <div className={styles.mainHeading}>Total Points</div>
      </div>
    </div>
  );
};

export default Analysis;
