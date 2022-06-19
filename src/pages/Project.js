import React from 'react';
import '../styles/index.css';
import { Box, Paper, Stack, Grid } from '@mui/material';
import BusyGator from '../components/project/BusyGator';


function Project() {


    return(
        <>
            <Grid container
                // alignItems='center'
                justifyContent={'center'}
            > 
                <Grid 
                    item xs={12} 
                    textAlign='center'
                >
                    <div class='name'>PROJECTS</div>
                </Grid>
                <Grid container> 
                    <Grid 
                        item xs={12} sm={12} md={4} 
                        // textAlign={{ xs: 'center', sm: 'center', md: 'right' }}
                    >
                        <BusyGator />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Project;