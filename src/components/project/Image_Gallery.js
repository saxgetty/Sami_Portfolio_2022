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

function Image_Gallery() {

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
                title='Image Gallery'
                subheader='May | 2021'
            />
            <CardMedia
                component='img'
                height='300'
                image='Image_Gallery_Img.png'
                alt='Image Gallery Website'
            />
            <CardContent>
                <Typography variant='h6' color='text.secondary'>
                    JavaScript | Express.js | Node.js | Handlebars.js | HTML5 | CSS3 | SQL
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
                        Project Image Gallery is an individually made web based application created with JavaScript. This project focused heavily
                        on understanding HTML5 and CSS concepts in conjunction with JavaScript and Express.js. Features such as logging in and out, 
                        post, search, and commenting were implemented to reinforce the basics of constructing a website with front and back end.
                    </Typography> 
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Image_Gallery;