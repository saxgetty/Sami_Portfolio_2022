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

function BDRDiscordBot() {

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
                title='BDR Discord Bot'
                subheader='December | 2021'
            />
            <CardMedia
                component='img'
                height='300'
                image='BDR_Discord_Bot_Img.png'
                alt='BDR Discord Bot'
            />
            <CardContent>
                <Typography variant='h6' color='text.secondary'>
                    Python | SQL | Replit
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
                        Project BDR Discord Bot is an individually made application created with Python and MySQL. This project allows Discord users
                        to interact with a Blog Database Management System Discord Bot, sending certain commands that the Bot can fetch
                        data for. This database holds over 30 entities and is connected with the Discord API through using Python in Replit.
                    </Typography> 
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default BDRDiscordBot;