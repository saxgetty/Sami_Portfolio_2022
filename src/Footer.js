import React from 'react';
import { AppBar, IconButton, Stack } from '@mui/material/';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({

    palette: {
      primary: {  
        main: '#9C6984',
      },
      secondary: {
        main: '#F4E1B5',
      },
    },
});

function Footer(){

    return(
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, height: 40 }}>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} 
                    spacing={10}
                >
                    <IconButton 
                        aria-label="Linkedin.com" 
                        onClick={() => window.open('https://www.linkedin.com/in/sami-saxton-getty', "_blank")}
                        style={{ color: 'wheat', marginTop: 0 }}
                    >
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    {/* <IconButton 
                        aria-label="Linkedin.com" 
                        onClick={() => window.open('www.linkedin.com/in/sami-saxton-getty', "_blank")}
                        style={{ color: 'wheat', marginTop: 0 }}
                    >
                        <GitHubIcon fontSize="large" />
                    </IconButton>
                    <IconButton 
                        aria-label="Linkedin.com" 
                        onClick={() => window.open('www.linkedin.com/in/sami-saxton-getty', "_blank")}
                        style={{ color: 'wheat', marginTop: 0 }}
                    >
                        <LinkedInIcon fontSize="large" />
                    </IconButton> */}
                </Stack>
            </AppBar>
        </ThemeProvider>
    )
}

export default Footer