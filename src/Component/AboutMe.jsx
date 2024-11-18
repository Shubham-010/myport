import { Grid, Icon, Paper } from "@material-ui/core";
import img from '../Image/aboutmeBR.png';
import AvatarFrame from "./avatarframe";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";
import { lightBlue } from "@material-ui/core/colors";

export default function AboutMe() {
    return (
        <div id='AboutMe' className='l_v100' style={{ backgroundColor:"var(--bg1-color) "}}>
            <h1>About Me 👨‍💻!!</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Grid><h3>Professional Summary</h3></Grid>
                    <Grid container>
                        Software developer proficient in React and JavaScript, specializing in front-end development for seamless user
                        interfaces with 3+ years of experience. Extensive experience in the finance domain, with a focus on designing
                        interactive Web-applications, implementing financial algorithms, and MERN stack development.
                    </Grid>
                    <Grid><h3>Location</h3></Grid>
                    <span>📍 Mumbai, Maharashtra, Pincode-400067</span>
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
                        <li>Web-Development BootCamp, UDEMY</li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ padding: "20px", display: 'flex', justifyContent: 'center' }}>
                    <AvatarFrame />
                </Grid>
            </Grid>
        </div>
    );
}
