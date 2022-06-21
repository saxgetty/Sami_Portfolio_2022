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

function LamdbaVibe() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Card 
            sx={{ maxWidth: 550 }}
            style={{ backgroundColor: '#f2b643' }}
        >
            <CardHeader
                title='LamdbaVibe'
                subheader='May | 2022'
            />
            <CardMedia
                component='img'
                height='300'
                image='LamdbaVibe_Img.png'
                alt='LamdbaVibe Website'
            />
            <CardContent>
                <Typography variant='h6' color='text.secondary'>
                    TypeScript | React.js | SQLite
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
                        Project LamdbaVibe is a web based music player and visualizer created in a team of 4. Using the Tone.js package,
                        users can click the selected instrument to create and play notes. In addition to this, a 
                        small database of songs are included to be played and searched by either the song name or artist.
                    </Typography>
                    <Typography paragraph 
                        align='left'
                    >
                        I contributed to this project by implementing my saxophone instrument and visualizer. I also added
                        a handful of songs to our database and implemented the search by artist feature.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default LamdbaVibe;