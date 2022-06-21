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

function BusyGator() {

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
                title='BusyGator'
                subheader='May | 2022'
            />
            <CardMedia
                component='img'
                height='250'
                image='BusyGator_Img.png'
                alt='BusyGator Website'
            />
            <CardContent>
                <Typography variant='body1' color='text.secondary'>
                    JavaScript | React.js | Express.js | AWS | SQL
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
                        Project BusyGator is a mock e-commerce website for San Francisco State University students,
                        staff, and faculty. Throughout this project, I worked in a team of 7 software developers to simulate
                        an industry level software development lifecycle.
                    </Typography>
                    <Typography paragraph 
                        align='left'
                    >
                        As a Team Lead, my role differed quite a bit from the others. The main focus on my role was on team and project 
                        management. My tasks included, team management, task deligation, organizing and assigning deadlines for workflow through 
                        Trello, bridging communication between team questions and professor responses, as well as holding 3 weekly meetings to maintain schedule
                        and progress of our workflow.
                    </Typography>
                    <Typography paragraph 
                        align='left'
                    >
                        As a Team Member, I designed and upkept our SQL database, formatted, prepared, and implemented all milestone documentation, designed our website
                        logo and map, and added finishing comments throughout the project.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default BusyGator;