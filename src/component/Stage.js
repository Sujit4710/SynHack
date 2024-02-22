import React from "react";
import styles from "../styles/Stage.module.css";
import Points from "./Points";
import StageCard from "./StageCard";
import TopBar from './TopBar'
const Stage = () => {
  return (
    <>
    <TopBar />
      <div className={styles["Stage"]}>
        <div>
          {" "}
          <Points />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "col",
            justifyContent: "space-around",
            marginTop:"50px",
          }}
        >
          <StageCard heading="Stage 1" text="Land preparation & seed Selection." description ="asff"  placement="right" />
          <StageCard heading="Stage 2" text="Planting & Monitoring" description ="asff"  placement="right"/>
          <StageCard heading="Stage 3" text="Crop protection & harvesting" description ="asff"  placement="left"/>
        </div>

        {/* <div>not</div> */}
      </div>
    </>
  );
};

export default Stage;
