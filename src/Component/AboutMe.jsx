import { Grid, Icon, Paper } from "@material-ui/core";
import img from '../Image/aboutme.jpg'
import AvatarFrame from "./avatarframe";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";

export default function AboutMe() {

    return (
        <div id='AboutMe' className='l_v100'>
            <h1>
                About Me 👨‍💻!!
            </h1>
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <Grid><h3>Professional Summary</h3></Grid>
                    <Grid container xs={12}>
                        Software developer proficient in React and JavaScript, specializing in front-end development for seamless user
                        interfaces with 3+ years of experience. Extensive experience in the finance domain, with a focus on designing
                        interactive Web-applications, implementing financial algorithms, and MERN stack development

                    </Grid>
                    <Grid><h3>Location</h3></Grid>
                    <span>📍 Mumbai, Maharashtra , Pincode-400067</span>
                    <Grid xs={12}><h3>Technical Skills :-</h3></Grid>
                    <div className="wrapSkills">
                            <div item className="skill_card"><span style={{ color: '#4c91af' }}>React <FaReact /></span></div>
                            <div item className="skill_card"><span style={{ color: '#4e4cbb' }}>Redux <SiRedux /> </span></div>
                            <div item className="skill_card"><span style={{ color: '#be9e44' }}>JavaScript <IoLogoJavascript /> </span></div>
                            <div item className="skill_card"><span style={{ color: '#44bcec' }}>HTML <TiHtml5 /> </span></div>
                            <div item className="skill_card"><span style={{ color: '#44ec8a' }}>CSS<MdCss /></span></div>
                    </div>
                    <Grid><h3>Certificate</h3></Grid>
                    <ul>
                        <li>Web-Development BootCamp , UDEMY </li>
                    </ul>
                </Grid>
                {/* <Grid style={{ padding: "20px" }} item xs={4}><img style={{ padding: "20px", maxWidth:"80%"}} src={img}></img></Grid> */}
                <Grid style={{ padding: "20px" }} item xs={4}><AvatarFrame /></Grid>
            </Grid>
        </div>
    )
}