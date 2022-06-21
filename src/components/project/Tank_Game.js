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

function Tank_Game() {

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
                title='Tank Wars'
                subheader='August | 2021'
            />
            <CardMedia
                component='img'
                height='300'
                image='Tank_Game_Img.png'
                alt='Tank Wars 2v2 Game'
            />
            <CardContent>
                <Typography variant='h6' color='text.secondary'>
                    Java
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
                        Project Tank Wars is an individually made Java based application using the model view controller design archetype. 
                        This project was built utilizing all 3 pillars of object oriented programming and allowed two players to interact 
                        with each other and their surroundings using the keyboard. The objective is to shoot each other down until one players lives run out. 
                    </Typography> 
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Tank_Game;