import { Grid, Icon } from "@material-ui/core";
import img from '../Image/aboutme.jpg'
import AvatarFrame from "./avatarframe";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";

export default function AboutMe(){
    return(
        <div id='AboutMe' style={{ height: '100vh', padding: '20px' }}>
        <h1>
        About Me 👨‍💻!!
        </h1>
        <Grid container xs={12}>
        <Grid item xs={6}>
        <Grid><h3>Professional Summary</h3></Grid>
        <Grid container xs={12}>
                    Software developer proficient in React and JavaScript, specializing in front-end development for seamless user
                    interfaces with 3+ years of experience. Extensive experience in the finance domain, with a focus on designing
                    interactive Web-applications, implementing financial algorithms, and MERN stack development . Proficiency in
                    collaborating with cross-functional teams, translating business requirements into technical solutions, and delivering
                    high-quality software products.

        </Grid>
        <Grid><h3>Location</h3></Grid>
        <span>📍 Mumbai, Maharashtra , Pincode-400067</span>
        <Grid><h3>Technical Skills :-</h3></Grid>
                    <span style={{ color: '#4c93af' }}>React <FaReact /></span>|
                    <span style={{ color: '#4e4cbb' }}>Redux <SiRedux /> </span>|
                    <span style={{ color: '#be9e44' }}>JavaScript <IoLogoJavascript /> </span>|
                    <span style={{ color: '#44bcec' }}>HTML <TiHtml5 /> </span>|
                        <span style={{ color: '#44ec8a' }}>CSS <MdCss /></span>
                    <Grid><h3>Certificate</h3></Grid>
        </Grid>
                {/* <Grid style={{ padding: "20px" }} item xs={4}><img style={{ padding: "20px", maxWidth:"80%"}} src={img}></img></Grid> */}
                <Grid style={{ padding: "20px" }} item xs={4}><AvatarFrame/></Grid>
        </Grid>
        </div>
    )
}