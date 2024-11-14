import { Grid } from "@material-ui/core";
import proimg from '../Image/proimg.jpg'
import { grey } from "@material-ui/core/colors";

export default function Exp(){
    return(
        <div id="exp" className='l_v100'>
        <Grid xs={12} container> 
    <Grid xs={5}>
            <img className="width_100" src={proimg}></img>
    </Grid>
    <Grid xs={6}>
                    <h1><u>Professional Experience </u>💻</h1>
                    <Grid xs={12} container style={{ height: "60vh", padding:'10px'}}>
                        <Grid item xs={8}><h3> <span style={{ color: "rgb(86, 166, 190) " }}>Designation:</span> Software Developer<span>(3 Years)</span><br />
                            <span style={{ color: "rgb(86, 166, 190) " }}>Company</span>: Finacus Solution Pvt. Ltd</h3></Grid>
                        <Grid item xs={4}><h3 style={{ color: "rgb(86, 166, 190) " }}>Nov 2021 - Present </h3></Grid>
                        {/* <Grid item xs={8}><h3>Company: Finacus Solution Pvt. Ltd</h3></Grid> */}
                        <span>
                            <ul>
                            <li> Contributed to a 30% increase in project efficiency by actively participating in cross-functional teams, leading to
                                successful implementation of key banking solutions.
                            </li>
                            <li>Reduced bug resolution time by 40% through systematic troubleshooting and proactive issue identification,
                                enhancing system reliability.
                            </li>
                            <li>Successfully delivered 95% of projects on or ahead of schedule by implementing effective time management
                                strategies, ensuring timely updates and stakeholder satisfaction.</li>
                            <li>Improved system performance by 25% through the optimization of core banking processes, resulting in faster
                                transaction times and improved user experience.</li>
                            <li>Led quality assurance initiatives that reduced post-deployment issues by 35%, contributing to a more stable
                                and reliable banking environment.</li>
                            </ul>
                        </span>
                        
                        {/* <Grid item xs={8}><h3> Designation: Software Developer Intern<span>(3 Year)</span></h3></Grid>
                        <Grid item xs={4}><h3>Nov 2021 - Present </h3></Grid>
                        <span>
                            Software developer proficient in React and JavaScript, specializing in front-end development for seamless user
                            interfaces with 3+ years of experience. Extensive experience in the finance domain, with a focus on designing
                            interactive Web-applications, implementing financial algorithms, and MERN stack development . Proficiency in
                            collaborating with cross-functional teams, translating business requirements into technical solutions, and delivering
                            high-quality software products.
                        </span> */}
                    </Grid>
    </Grid>
    </Grid>
    </div>
    )
}