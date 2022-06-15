import React from 'react';
import '../styles/index.css';
import CardMedia from '@mui/material/CardMedia';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Grid, Box, Paper, Avatar, Container, Stack, Typography } from '@mui/material';
// import { brown } from '@mui/material/colors';

function About() {

    return(
        <>
            <div class="name">
                <CardMedia
                    component="img"
                    height="150"
                    image="about_me_name.png"
                    alt="Sami Saxton-Getty"
                />
            </div>

            <br />

            <div class="container">
                <div class="profile">
                    <CardMedia
                    component="img"
                    height="400"
                    image="sami_profile.png"
                    alt="Profile Picture"
                    />
                </div>
                <div class="about_me_text">PAPER</div>
                <div class="about_me_text">PAPER</div>
            </div>
        </>
    );
}

export default About;