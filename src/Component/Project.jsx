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
        backgroundColor:'"var(--bg1-color)"'
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
    header: {
        color: "rgb(86, 166, 190)",
        padding: theme.spacing(4),
        backgroundSize: 'cover',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '2rem',
    },
}));

export default function Project() {
    const classes = useStyles();

    const openurl=(item)=>{
      window.open(item.url)
    }

    const projectLinks = [
        {
            label: 'TOLIST', Id: 'timecalc', img: Proi1, url: 'https://sdctodolist.vercel.app/'},
        {
            label: 'Time Calculator', Id: 'accordion', img: Proi2, url: 'https://gotimesa.netlify.app' },
        { label: 'Nature', Id: 'nature', img: Proi3, url: 'https://natureweb1999.vercel.app/' },
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
                            <CardContent style={{height:'5rem'}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.label}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is a description of the {item.label} project.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={()=>openurl(item)} size="small" color="primary">
                               DEMO
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
