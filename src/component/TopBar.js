import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styles from "../styles/TopBar.module.css";
import leaves from '../Images/leaves.jpg';
import logo from '../Images/logo.png';
import { Navigate, useNavigate } from 'react-router-dom';

const ButtonAppBar = () => {
  const navigate = useNavigate();  // Use the useNavigate hook to get the navigate function

  const handleLoginClick = () => {
    navigate('/login');  // Call navigate function with the desired path
  };
  const handleRegClick = () => {
    navigate('/register');  // Call navigate function with the desired path
  };
  const appBarStyle = {
    backgroundImage: 'linear-gradient(90deg, rgb(109, 192, 190),rgb(11, 73, 25))',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={appBarStyle}>
        <Toolbar>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Your Logo" style={{ marginRight: '11px', height: '70px' }} />
              <div variant="h6" className={styles.text} component="div">
                GreenHarvest Quiz
              </div>
            </div>
            <div style={{ display: "flex" }} className={styles.text}>
              <Button color="inherit" onClick={handleLoginClick}>Login</Button>
              <Button color="inherit" onClick={handleRegClick}>Sign Up</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
