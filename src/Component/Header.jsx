import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from './Drawer';
import { Link } from 'react-scroll';
import ThemeToggleButton from '../ThemeBut';
import { useMediaQuery } from '@material-ui/core';
import { FaHome } from 'react-icons/fa';
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
const NavData = [
    {title:"Home",to:"Home"},
    {title:"Experience", to:"exp"},
    {title:"Project", to:"Project"},
    { title: "AboutMe", to:"AboutMe"},
    {title:"Contact", to:"Contact"},
]

export default function Headers() {
    const classes = useStyles();
    const isMobile = useMediaQuery("(max-width:600px)");
    return (
        <div className={classes.root}>
            <AppBar position="static" className='app_bgclr'>
                
                {isMobile ?<Typography variant="h6" className={classes.title}>
                    <TemporaryDrawer data={NavData} />
                </Typography>:<></>}
                {!isMobile ? 
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                                <FaHome color='black'/>
                        </Typography>
                    {NavData.map((item,index)=>{
                        console.log(item,"item");
                        return(
                        <nav style={{ padding: "10px" }}>
                            <Button key={index} className='h_btn'>
                                <Link to={item.to} smooth={true} duration={500}>
                                    {item.title}
                                </Link>
                            </Button>
                        </nav>
                        )
                    })
                    } 
                        <Button>
                            <div>
                                <ThemeToggleButton />
                            </div>
                        </Button>
                </Toolbar>:<></>}
            </AppBar>
        </div>
    );
}


{/* 
<Button className='h_btn'>
                                <Link to="exp" smooth={true} duration={500}>
                                    <b>Experience</b>
                                </Link>
                            </Button>
                            <Button className='h_btn'>
                                <Link to="Project" smooth={true} duration={500}>
                                    <b> Projects </b>
                                </Link>
                            </Button>
                            <Button className='h_btn'>
                                <Link to="AboutMe" smooth={true} duration={500}>
                                    <b>About</b>
                                </Link>
                            </Button>
                            <Button className='h_btn'>
                                <Link to="Contact" smooth={true} duration={500}>
                                    <b>Contact</b>
                                </Link>
                            </Button> */}