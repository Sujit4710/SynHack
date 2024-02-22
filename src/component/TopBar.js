import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styles from "../styles/TopBar.module.css";
import leaves from '../Images/leaves.jpg';
import logo from '../Images/logo.png';

const ButtonAppBar = () => {
  const appBarStyle = {
    backgroundImage: `url(${leaves})`,
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
              <Button color="inherit">Login</Button>
              <Button color="inherit">Sign Up</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
