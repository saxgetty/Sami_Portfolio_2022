import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Box, Paper, Avatar, Container, Stack, Typography } from '@mui/material';
import { brown } from '@mui/material/colors';

function About() {

    return(
        <Stack
            direction={{ xs: 'column', sm: 'column' }}
            spacing={{ xs: -5, sm: -4, md: -2 }}
            justifyContent= "center"
            alignItems="center" 
            marginTop={15}
        >
            <Box 
                component="img"
                sx={{
                
                // top: '20%',
                // left: '25%',
                // zIndex: 'modal',
                height: 350,
                width: 900,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
                }}
                alt="About Me Name"
                src="about_me_name.png">
            </Box>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                // spacing={{ xs: -5, sm: -4, md: -2 }}
                justifyContent= "center"
                alignItems="center"
                marginTop={-10}       
                >    
                <Box 
                    component="img"
                    sx={{
                    
                    // top: '20%',
                    // left: '25%',
                    // zIndex: 'modal',
                    height: 550,
                    width: 400,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Sami Profile"
                    src="sami_profile.png">
                </Box>
                <Box 
                    sx={{
                        // display: 'flex',
                        // flexWrap: 'wrap',
                        '& > :not(style)': {
                            
                            width: 400,
                            height: 300,
                            backgroundColor: "#f2b643",
                        },
                    }}
                    >
                    <Paper elevation={10}>
                        <Typography variant="h4" style={{padding: 5}}>
                            ABOUT ME
                        </Typography>
                        <div style={{padding: 15}}>
                            I am a graduate computer science student looking for an entry-level software development role at a fast growing technology
                            company. I love solving complex problems, working with others, and being a dependable team member.
                        </div>
                        <div style={{padding: 15}}>
                            
                        </div>
                    </Paper>
                </Box>
                <Box 
                    sx={{
                        // display: 'flex',
                        // flexWrap: 'wrap',
                        '& > :not(style)': {
                            
                            width: 400,
                            height: 300,
                            marginLeft: 5,
                            backgroundColor: "#f2b643",
                        },
                    }}
                    >
                    <Paper elevation={10}>
                    <Typography variant="h4">
                        PLACEHOLDER
                    </Typography>
                        {/* <div>
                            Hello my name is Sami.
                        </div> */}
                    </Paper>
                </Box>
            </Stack> 
        </Stack>                  
        //         {/* <Avatar alt="Sami" src="sami_avatar.png" sx={{ width: 250, height: 300 }} /> */}
        //     {/* <Avatar alt="Sami" src="sami_avatar.png" sx={{ width: 250, height: 300 }}></Avatar> */}
    );
}

export default About;

{/* <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 128,
                            height: 128,
                            },
                        }}
                        >
                        <Paper elevation={3} />
                    </Box>
                </Grid>
</Grid> */}