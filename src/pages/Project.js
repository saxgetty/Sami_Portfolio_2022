import React from 'react';
import '../styles/index.css';
import { Grid } from '@mui/material';
import BusyGator from '../components/project/BusyGator';
import LamdbaVibe from '../components/project/LamdbaVibe';
import Itinerary from '../components/project/Itinerary';
import TankGame from '../components/project/TankGame';
import BDRDiscordBot from '../components/project/BDRDiscordBot';
import ImageGallery from '../components/project/ImageGallery';
import WoWProfDiscordBot from '../components/project/WoWProfDiscordBot';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 700,
        sm: 900,
        md: 1200,
        lg: 1440,
        xl: 1536,
      },
    },
});

function Project() {

    return(
        <>
            <Grid container
                direction='row'
                alignItems='center'
                justifyContent='center'
            > 
                <Grid 
                    item xs={12} 
                    textAlign='center'
                >
                    <div class='name'>
                        PROJECTS
                    </div>
                </Grid>
            </Grid>
            <ThemeProvider theme={theme}>
                <Grid container
                    direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}
                    spacing={{ xs: 4, sm: 4, md: 4 }}
                    columnSpacing={{ md: 0 }}
                    justifyContent='center'
                    textAlign='center'        
                > 
                    <Grid
                        item xs={12} sm={12} md={4}
                        align='center'   
                    >
                        <BusyGator />
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}
                        align='center'
                    >
                        <LamdbaVibe />
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}
                        align='center'       
                    >
                        <Itinerary />
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}
                        align='center'
                        
                    >   
                        <BDRDiscordBot />
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}
                        align='center'
                        
                    >
                        <TankGame />
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}
                        align='center'
                        
                    >
                        <WoWProfDiscordBot />
                        
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}
                        align='center'
                        
                    >
                        <ImageGallery />
                    </Grid>               
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default Project;