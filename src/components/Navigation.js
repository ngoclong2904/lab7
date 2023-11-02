import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Film App
        </Typography>
        <Button color="inherit" href='/'>Home</Button>
        <Button color="inherit" href='/about'>About</Button>
        <Button color="inherit" href='/contact'>Contact</Button>
        <Button color="inherit" href='dashboard'>Dashboard</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;


