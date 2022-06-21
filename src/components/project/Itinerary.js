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

function Itinerary() {

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
                title='iTinerary'
                subheader='May | 2022'
            />
            <CardMedia
                component='img'
                height='300'
                image='Itinerary_Img.png'
                alt='iTinerary iOS Application'
            />
            <CardContent>
                <Typography variant='h6' color='text.secondary'>
                    Swift | UIKit | SwiftUI
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
                        Project iTinerary is an iOS mobile application created in XCode in a team of 4, utilizing the Swift language, and
                        UI Kit and SwiftUI frameworks. iTinerary serves as a note taking application to plan trips and record
                        relevant information.
                    </Typography>
                    <Typography paragraph 
                        align='left'
                    >
                        I contributed to this project by implementing two important APIs from Apple and Google Places for our map option. In addition to this,
                        I helped organize our design layout, and worked with my team members to add our checklist and schedule. I used an Apple iOS application called
                        Procreate to design our logo and individual feature icons.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Itinerary;