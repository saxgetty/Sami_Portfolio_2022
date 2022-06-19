import React from 'react';
import { Stack, Grid, Paper, Box } from '@mui/material/';

function Skill() {

    return(
        <>
            <Grid container> 
                <Grid 
                    item xs={12} 
                    textAlign='center'
                >
                    <div class='name'>SKILLS & TECHNOLOGIES</div>
                </Grid>
            </Grid>
            <Grid container 
                style={{alignItems: 'center', justifyContent:'center'}}
            >
                <Stack container 
                    direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} 
                    spacing={10}
                    alignItems={{md: 'center'}}
                    marginTop={10}
                >
                    <Box
                        sx={{
                            '& > :not(style)': {
                                
                                width: 500,
                                height: 455,
                                backgroundColor: '#f2b643',
                            },
                        }}
                    >
                        <Paper elevation={16}>
                                <div class='skill_card_title'>
                                    LANGUAGES
                                </div>
                                <div>
                                    <ul class='list-info'>
                                        <li>Python</li>
                                        <li>SQL</li>
                                        <li>JavaScript</li>
                                        <li>TypeScript</li>
                                        <li>Java</li>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>C++</li>
                                        <li>C</li>
                                        <li>Swift</li>
                                    </ul>
                                </div>
                        </Paper>
                    </Box>
                    <Box
                        sx={{
                            '& > :not(style)': {
                                
                                width: 500,
                                height: 455,
                                backgroundColor: '#f2b643',
                            },
                        }}
                    >
                        <Paper elevation={16}>
                            <div class='skill_card_title'>
                                TECHNOLOGIES
                            </div>
                            <div>
                                <ul class='list-info'>
                                    <li>Amazon Web Service</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                            <div class='skill_card_title'>
                                TOOLS
                            </div>
                            <div>
                                <ul class='list-info'>
                                    <li>Git</li>
                                    <li>Visual Studio</li>
                                    <li>Intellij</li>
                                    <li>Microsoft Office</li>
                                    <li>VirtualBox</li>
                                    <li>NetBeans</li>
                                    <li>Figma</li>    
                                </ul>
                            </div>
                        </Paper>
                    </Box>
                    <Box 
                        sx={{
                            '& > :not(style)': {
                                
                                width: 500,
                                height: 455,
                                backgroundColor: '#f2b643',
                            },
                        }}
                    >
                        <Paper elevation={16}>
                            <div class='skill_card_title'>
                                FRAMEWORKS
                            </div>
                            <div>
                                <ul class='list-info'>
                                    <li>React.js</li>
                                    <li>Material UI</li>
                                    <li>Bootstrap</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>UIKit</li>
                                    <li>SwiftUI</li>
                                </ul>
                            </div>
                        </Paper>
                    </Box>
                </Stack>
            </Grid>
        </>
    );
}

export default Skill;