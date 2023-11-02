import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    &copy; 2023 Copyright
                </Typography>
            </Toolbar>
        </AppBar>
    )
}