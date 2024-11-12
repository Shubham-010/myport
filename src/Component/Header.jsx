import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from './Drawer';
import { Link } from 'react-scroll';
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
                    <nav style={{padding:"10px"}}>
                        <Button className='h_btn'>
                            <Link to="Home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </Button>
                        <Button className='h_btn'>
                            <Link to="exp" smooth={true} duration={500}>
                                Experience
                            </Link>
                        </Button>
                        <Button className='h_btn'>
                            <Link to="Project" smooth={true} duration={500}>
                                Projects
                            </Link>
                        </Button>
                        <Button className='h_btn'>
                            <Link to="AboutMe" smooth={true} duration={500}>
                                About
                            </Link>
                        </Button>
                        <Button className='h_btn'>
                            <Link to="Contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </Button>
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    );
}
