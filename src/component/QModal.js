import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Quizz from "../pages/Quizz";
import que1 from "../Question/Stage1.json";
import que2 from "../Question/Stage2.json";
import que3 from "../Question/Stage3.json";
import styles from "../styles/QModal.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const QModal = ({ content, que, points,setPoints }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getQuizz = () => {
    switch (que) {
      case "1":
        return <Quizz que={que1} points={points} setPoints={setPoints} />;
      case "2":
        return <Quizz que={que2} points={points} setPoints={setPoints}/>;
      case "3":
        return <Quizz que={que3} points={points} setPoints={setPoints}/>;
      default:
        return null;
    }
  };
  return (
    <div>
      <div sx={{ width: "20%" }} onClick={handleOpen}>
        {content}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {getQuizz()}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleClose} className={styles["btn"]}>close</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default QModal;
