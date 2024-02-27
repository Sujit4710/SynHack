import React from "react";
import styles from "../styles/Stage.module.css";
import Points from "./Points";
import StageCard from "./StageCard";
import { Button } from "@mui/material";
import Analysis from "./Analysis";
import que1 from "../Question/Stage1.json";
import { useNavigate } from 'react-router-dom';
import Quizz from "../pages/Quizz";
import QModal from "./QModal";
import TopBar from "./TopBar";

const Stage = () => {
  const [detail, setDetail] = React.useState(false);
  const [points,setPoints] = React.useState(0)
  const navigate = useNavigate();
  console.log("he",que1);
 
  return (
    <>
      {detail ? (
        <div>
             <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            <button
               onClick={() => setDetail(false)}
              className={styles["btn-left"]}
            >
              Back
            </button>
          </div>

<div>
  <Analysis/>
</div>
          
        </div>
      ) : (
        <div className={styles["Stage"]}>
          <div>
            {" "}
            <Points points={points} />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "col",
              justifyContent: "space-around",
              marginTop: "50px",
            }}
          >
      
            <QModal content={ <StageCard
              heading="Stage 1"
              text="Land preparation & seed Selection."
              description=" Cultivate Knowledge, Plant Seeds of Sustainability, and Watch Your Eco-IQ Blossom!"
              placement="right"
            />} que = "1" points={points} setPoints={setPoints}/>
           
            <QModal content={ <StageCard
              heading="Stage 2"
              text="Planting & Monitoring"
              description="GreenHarvest: Planting & Monitoring – where you nurture your green expertise, sow seeds of environmental wisdom, and watch your sustainable know-how sprout to life!"
              placement="right"
            />} que = "2" points={points} setPoints={setPoints}/>
            
            <QModal content={<StageCard
              heading="Stage 3"
              text="Crop protection & harvesting"
              description="GreenHarvest: Crop Protection & Harvesting – guard your green gains, reap a bounty of eco-knowledge, and celebrate the sustainable harvest of your environmental expertise!"
              placement="left"
            />
          } que = "3" points={points} setPoints={setPoints} />
          
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexDirection: "row",
            }}
          >
            {" "}
            {/* <button
               onClick={() => setDetail(true)}
              className={styles["btn-right"]}
            >
              Detailed Analysis
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Stage;


