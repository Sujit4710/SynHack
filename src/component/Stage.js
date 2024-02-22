import React from "react";
import styles from "../styles/Stage.module.css";
import Points from "./Points";
import StageCard from "./StageCard";
import que1 from '../Question/Stage1.json';
import que2 from '../Question/Stage2.json';
import que3 from "../Question/Stage3.json";
import Quizz from "../pages/Quizz";
const Stage = () => {
  return (
    <>
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
          <div onClick={<Quizz que={que1}/>}><StageCard heading="Stage 1" text="Land preparation & seed Selection." description ="asff"  placement="right" /> </div>
          <div onClick={<Quizz que={que2}/>}> <StageCard heading="Stage 2" text="Planting & Monitoring" description ="asff"  placement="right"/></div>
         <div onClick={<Quizz que={que3}/>}><StageCard heading="Stage 3" text="Crop protection & harvesting" description ="asff"  placement="left"/></div>
          
        </div>

        {/* <div>not</div> */}
      </div>
    </>
  );
};

export default Stage;


