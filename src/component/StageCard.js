import React from "react";
import styles from "../styles/StageCard.module.css";

import {
    Tooltip,
    tooltipClasses,
  } from "@mui/material";

  import styled from "@emotion/styled";

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      border: "1px solid #dadde9",
      fontWeight: "bold",
      fontSize: "16px",
      fontFamily: "Poppins",
      letterSpacing: "1.5px",
    },
  }));
const StageCard = ({heading,text,description, placement}) => {
  const cardStyle = () => {
    if (1 === 1) {
      return { outline: "3px solid black", backgroundColor: "#fff" };
    } else {
      return { backgroundColor: "#fff" };
    }
  };
  return (
    <HtmlTooltip
      title={
        <div style={{ padding: "10px" }}>
          <div style={{ textAlign: "center" }}>{description}</div>
        </div>
      }
      placement={placement}
    >
      <div
        style={cardStyle()}
        className={styles.mainCard}
      >
        <div className={styles.subCard}>
          <div className={styles.textCard}>
            <div className={styles.deetsName}>{heading}</div>
            <div className={styles.text}>{text}</div>
          </div>
        </div>
      </div>
    </HtmlTooltip>
  );
};

export default StageCard;
