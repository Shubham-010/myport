import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TemporaryDrawer from './Drawer';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Headers() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className='app_bgclr'>
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="black" aria-label="menu"> */}
                        {/* <MenuIcon /> */}
                    {/* </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                       <TemporaryDrawer/>
                    </Typography>
                    <Button href='/' color="inherit">HOME</Button>
                    <Button href='/Project' color="inherit">Project</Button>
                    <Button href='/AboutMe' color="inherit">AboutMe</Button>
                    <Button href='/Contact' color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}