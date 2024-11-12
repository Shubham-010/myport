import { cilList } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { Button, Grid, Paper } from "@material-ui/core";
import myimage from '../Image/Firstimg.jpg'
import LayoutButton from "./layout";
import { Navigate, useNavigate } from "react-router-dom";
import BubbleEffect from "./Bubble";
import ResumeModal from "./ModalRes";
import { useState } from "react";

export default function FirstPl(params) {
    let navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const onClickContact = () => {
        navigate('/Contact'); // Navigates to /about
    };
   let openMode;
    const openModal=()=>{
        debugger
        setIsModalOpen(true)
    }

    function downloadResume() {
        // setIsModalOpen(true)
        const link = document.createElement('a');
        link.href = '/assests/resume.pdf';  // Adjust the path if necessary
        link.download = 'Shubham_Chikane_resume.pdf'; // Specify the download file name
        link.click();
    }
    return(
        <div id="Home" style={{ height: '100vh', padding: '20px' }}>
            <Grid container xs={10} className="margin_main" justifyContent="center" >
                <Grid className="Name_sect" item xs={5}>
                    <BubbleEffect/>
                    <h2>HELLO___________</h2>
                    <h1>I AM SHUBHAM CHIKANE</h1>
                    <Grid>
                    <span className="des_clr"><b>FRONTEND DEVELOPER ^_^💻</b></span><br/>
                    </Grid>
                    <LayoutButton>
                        <Button onClick={() => downloadResume()}  className="btn_color">Resume</Button>
                    <Button className="btn_color" onClick={() => onClickContact()}>Contact</Button>
                    </LayoutButton>
                </Grid>
                <ResumeModal isOpen={isModalOpen}/>
                <Grid item  xs={5}><img className="width_100" src={myimage}></img></Grid>       
            </Grid>
        </div>
    )
}