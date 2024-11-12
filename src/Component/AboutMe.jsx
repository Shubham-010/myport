import { Grid } from "@material-ui/core";
import img from '../Image/aboutme.jpg'

export default function AboutMe(){
    return(
        <div id='AboutMe' style={{ height: '100vh', padding: '20px' }}>
        <h1>
        About Me!!
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
        <Grid><h3>Technical Skills</h3></Grid>
        <Grid><h3>Certificate</h3></Grid>
                </Grid>
                <Grid style={{margin:"20px" , justifyContent:'center'}} item xs={4}><img style={{ maxWidth:"80%"}} src={img}></img></Grid>
        </Grid>
        </div>
    )
}