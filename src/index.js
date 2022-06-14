import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Image from './images/background_bg_clean.png';
import { useMediaQuery, Paper } from '@mui/material';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        // backgroundSize: "cover",
        // backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundRepeat: 'repeat',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        // width: '100vw',
        height: '100vh',
        // color: "#f5f5f5",
        // maxWidth: "sm",  
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
            <Paper style={styles.paperContainer}>
                <CssBaseline />
                <App />
            </Paper>     
    </React.StrictMode>
);

