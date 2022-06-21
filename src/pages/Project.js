import React from 'react';
import '../styles/index.css';
import { Grid } from '@mui/material';
import BusyGator from '../components/project/BusyGator';
import LamdbaVibe from '../components/project/LamdbaVibe';
import Itinerary from '../components/project/Itinerary';
import Tank_Game from '../components/project/Tank_Game';
import BDR_Discord_Bot from '../components/project/BDR_Discord_Bot';
import Image_Gallery from '../components/project/Image_Gallery';
import WoW_Prof_Discord_Bot from '../components/project/WoW_Prof_Discord_Bot';

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
                    <BDR_Discord_Bot />
                </Grid>
                <Grid
                    item xs={12} sm={12} md={4}
                    align='center'
                    
                >
                     <Tank_Game />
                </Grid>
                <Grid
                    item xs={12} sm={12} md={4}
                    align='center'
                    
                >
                    <WoW_Prof_Discord_Bot />
                    
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