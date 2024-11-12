import { Grid, Paper } from "@material-ui/core";
import ContactForm from "./Contactform";

export default function ContactInfo(){
    return(
        <Grid container id="Contact" style={{ height: '100vh', padding: '20px' }}>
            <Grid item xs={6}>
            <h1>Lets Talk</h1>
                Email 📩:- shubhamchikane0109@gmail.com <br/>
                GitHub 💻:- <br />
                Mobile No.:- 9167404223 <br />
            </Grid>    
            <Grid item xs={6}>
            <ContactForm/>
            </Grid>    
        </Grid>
    )
}