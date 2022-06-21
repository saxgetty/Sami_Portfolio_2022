import React from 'react';
import { IconButton, Grid } from '@mui/material/';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {

    return(
        <>
            <Grid container> 
                <Grid 
                    item xs={12} 
                    textAlign='center'
                >
                    <div class='name'>
                        CONTACT SAMI
                    </div>
                </Grid>               
                <Grid container
                    direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}
                    spacing={{ xs: 4, sm: 4, md: 4 }}
                    columnSpacing={{ md: 0 }}
                    justifyContent='center'
                    align='center'                                  
                > 
                    <Grid
                        item xs={12} sm={12} md={4}           
                    >
                        <IconButton 
                            aria-label='Linkedin.com/in/sami-saxton-getty' 
                            onClick={() => window.open('https://www.linkedin.com/in/sami-saxton-getty', '_blank')}
                            style={{ color: '#0072b1', marginTop: 100 }}
                        >
                            <LinkedInIcon 
                                sx={{ fontSize: '200px' }} 
                            />
                        </IconButton>
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}                
                    >
                        <IconButton 
                            aria-label='saxgetty4@gmail.com' 
                            onClick={() => window.open('mailto:saxgetyy4@gmail.com', '_blank')}
                            style={{ color: 'white', marginTop: 100 }}
                        >
                            <EmailIcon 
                                sx={{ fontSize: '200px' }} 
                            />
                        </IconButton>
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}                      
                    >
                        <IconButton 
                            aria-label='Github.com/saxgetty' 
                            onClick={() => window.open('https://github.com/saxgetty', '_blank')}
                            style={{ color: '#333', marginTop: 100 }}
                        >
                            <GitHubIcon 
                                sx={{ fontSize: '200px' }} 
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>   
        </>
    );
}

export default Contact;