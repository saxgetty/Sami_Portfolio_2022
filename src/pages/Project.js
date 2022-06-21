import React from 'react';
import '../styles/index.css';
import { Grid } from '@mui/material';
import BusyGator from '../components/project/BusyGator';
import LamdbaVibe from '../components/project/LamdbaVibe';
import Itinerary from '../components/project/Itinerary';
import TankGame from '../components/project/TankGame';
import BDRDiscordBot from '../components/project/BDRDiscordBot';
import Image_Gallery from '../components/project/Image_Gallery';
import WoWProfDiscordBot from '../components/project/WoWProfDiscordBot';

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
                    <Image_Gallery />
                </Grid>
            </Grid>
        </>
    );
}

export default Project;