import { Button, Grid, Paper } from "@material-ui/core";
import myimage from '../Image/FirstImgBR.png';
import LayoutButton from "./layout";
import { Navigate, useNavigate } from "react-router-dom";
import BubbleEffect from "./Bubble";
import ResumeModal from "./ModalRes";
import { useState } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function FirstPl() {
    let navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const onClickContact = () => {
        navigate('/Contact'); // Navigates to /Contact
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    function downloadResume() {
        const link = document.createElement('a');
        link.href = '/assets/resume.pdf';  // Adjust the path if necessary
        link.download = 'Shubham_Chikane_resume.pdf'; // Specify the download file name
        link.click();
    }

    return (
        <Grid>
        <div id="Home" className='l_v100'>
            <Grid container xs={12} justifyContent="center" alignItems="center" spacing={3}>
                <Grid item xs={12} sm={5} className="Name_sect" style={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
                    <BubbleEffect />
                    <h2>HELLO 👋</h2>
                    <h1>I AM SHUBHAM CHIKANE</h1>
                        <h3 className="des_clr"><b>FRONTEND DEVELOPER ^_^💻</b></h3><br />
                    <LayoutButton>
                        <Button onClick={downloadResume} className="btn_color">Resume</Button>
                        {/* <Button className="btn_color" onClick={onClickContact}>Contact</Button> */}
                    </LayoutButton>
                </Grid>
                <ResumeModal isOpen={isModalOpen} />
                <Grid item xs={12} sm={5}>
                    <img className={`width_100 blendMode ${isSmallScreen ? 'mobile-img' : ''}`} src={myimage} alt="Profile" />
                </Grid>
            </Grid>
        </div>
        </Grid>
    );
}
