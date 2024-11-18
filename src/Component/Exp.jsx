import { Grid, Typography } from "@material-ui/core";
import proimg from '../Image/proimgBR.png';

export default function Exp() {
    return (
        <Grid>
        <div id="exp" className="l_v100">
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {/* Image Section */}
                <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img className="width_100" src={proimg} alt="Profile" style={{ maxWidth: "100%", height: "auto" }} />
                </Grid>

                {/* Experience Details Section */}
                <Grid item xs={12} md={7}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        <u>Professional Experience</u> 💻
                    </Typography>

                    <Grid container spacing={2} style={{ marginTop: "20px" }}>
                        {/* Designation and Company Info */}
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h6">
                                <span style={{ color: "rgb(86, 166, 190)" }}>Designation:</span> Software Developer <span>(3 Years)</span>
                                <br />
                                <span style={{ color: "rgb(86, 166, 190)" }}>Company:</span> Finacus Solution Pvt. Ltd
                            </Typography>
                        </Grid>

                        {/* Date Info */}
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" style={{ color: "rgb(86, 166, 190)" }}>
                                Nov 2021 - Present
                            </Typography>
                        </Grid>

                        {/* Key Responsibilities */}
                        <Grid item xs={12}>
                            <ul>
                                <li>Contributed to a 30% increase in project efficiency by actively participating in cross-functional teams, leading to successful implementation of key banking solutions.</li>
                                <li>Reduced bug resolution time by 40% through systematic troubleshooting and proactive issue identification, enhancing system reliability.</li>
                                <li>Successfully delivered 95% of projects on or ahead of schedule by implementing effective time management strategies, ensuring timely updates and stakeholder satisfaction.</li>
                                <li>Improved system performance by 25% through the optimization of core banking processes, resulting in faster transaction times and improved user experience.</li>
                                <li>Led quality assurance initiatives that reduced post-deployment issues by 35%, contributing to a more stable and reliable banking environment.</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </Grid>
    );
}
