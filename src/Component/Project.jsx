import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
    makeStyles
} from "@material-ui/core";
import Proi1  from '../Image/Project1.png';
import Proi2  from '../Image/Project2.jpg';
import Proi3  from '../Image/Project3.jpg';
import Bann  from '../Image/BannerProj.jpg';


// Custom styles for card effects
const useStyles = makeStyles((theme) => ({
    gridContainer: {
        padding: theme.spacing(4),
        backgroundColor:'rgb(181, 230, 245)'
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        },
    },
    media: {
        height: 140,
    },
}));

export default function Project() {
    const classes = useStyles();

    const projectLinks = [
        { label: 'Time Calculator', Id: 'timecalc', img: Proi1 },
        { label: 'Accordion', Id: 'accordion', img: Proi2 },
        { label: 'Nature', Id: 'nature', img: Proi3 },
    ];

    return (
        <Grid container id="Project" style={{ height: '100vh', padding: '20px' }} className={classes.gridContainer} justifyContent="center">
            <Grid item xs={12}>
                <Paper elevation={3} className={classes.cardWrapper}>
                    <h1 style={{ color: "rgb(86, 166, 190)", backgroundImage:Bann }}>Projects</h1>
                </Paper>
            </Grid>
            {projectLinks.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={item.img} // Use your own image path
                                title={item.label}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.label}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is a description of the {item.label} project.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Demo
                            </Button>
                            <Button size="small" color="primary">
                               Git
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
