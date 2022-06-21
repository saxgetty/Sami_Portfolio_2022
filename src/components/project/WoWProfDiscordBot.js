import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

function WoWProfDiscordBot() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Card 
            sx={{ maxWidth: 480 }}
            style={{ backgroundColor: '#f2b643' }}
        >
            <CardHeader
                title='WoW Professions Discord Bot'
                subheader='June | 2021'
            />
            <CardMedia
                component='img'
                height='250'
                image='WoW_Prof_Discord_Bot_Img.png'
                alt='WoW Professions Discord Bot'
            />
            <CardContent>
                <Typography variant='body1' color='text.secondary'>
                    JavaScript | Node.js | Replit | Replit Database
                </Typography>
            </CardContent>
            <Typography marginRight={2} align='right' variant='body2' color='text.secondary'>
                        Read More
            </Typography>
            <CardActions disableSpacing>     
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                > 
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph 
                        align='left'
                    >
                        Project World of Warcraft (WoW) Professions Discord Bot is an application created with Javascript and Replit in a team of 2. This project
                        allows Discord users to call certain commands in Discord text channels that return existing data within the Replit database. The goal behind this 
                        personal project was to provide our WoW community with a hub for all data in the game regarding professions. This allowed us to keep track of
                        all individuals that had specific recipes within the given Discord server once they "learned" it by running the learn command. Using this streamlined
                        community communication and craft sharing.
                    </Typography> 
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default WoWProfDiscordBot;