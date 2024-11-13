import { Grid, Paper } from "@material-ui/core";
import ContactForm from "./Contactform";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "react-scroll";

export default function ContactInfo(){
    const OpenInNewWindow=()=>{
        window.open("https://github.com/Shubham-010")
    }
    return(
        <Grid container id="Contact" style={{ height: '100vh', padding: '20px', backgroundColor: 'rgb(181, 230, 245)' }}>
            <Grid item xs={6} style={{backgroundColor:"white", padding:'20px'}}>
            <h1>Lets Talk</h1>
                <Grid>Email 📩:- shubhamchikane0109@gmail.com <br /></Grid>
                <Grid>GitHub 💻:- https://github.com/Shubham-010 <br /></Grid>
                <Grid>Mobile No.:- 9167404223 <br /></Grid>
                <Grid justifyContent="center"><h3>Follow Us</h3></Grid>
                <div>
                    <span style={{ margin: '10px' }} onClick={() => { OpenInNewWindow()}}><FaGithub /></span>
                    <span style={{ margin: '10px' }}><FaLinkedin /></span>
                </div>
            </Grid>    
            <Grid item xs={6}>
            <ContactForm/>
            </Grid>    
        </Grid>
    )
}