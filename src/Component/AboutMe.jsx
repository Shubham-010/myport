import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import AvatarFrame from "./avatarframe";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";

export default function AboutMe() {
    return (
        <Grid>
        <div
            id="AboutMe"
            style={{
                backgroundColor: "var(--bg1-color)",
                padding: "2rem 1rem",
            }}
            className={"l_v100"}
        >
            <Typography variant="h5"  gutterBottom>
                About Me 👨‍💻!!
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {/* Left Section */}
                <Grid item xs={12} md={8}>
                    {/* <Paper elevation={3} style={{ padding: "1rem" }}> */}
                        <Typography variant="h6" gutterBottom>
                            Professional Summary
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Software developer proficient in React and JavaScript,
                            specializing in front-end development for seamless user
                            interfaces with 3+ years of experience. Extensive experience in
                            the finance domain, with a focus on designing interactive
                            web-applications, implementing financial algorithms, and MERN
                            stack development.
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            Location
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            📍 Mumbai, Maharashtra, Pincode-400067
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            Technical Skills
                        </Typography>
                        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
                            <Grid item xs={6} sm={4}>
                                <Paper className="skill_card" style={{ padding: "0.5rem" }}>
                                    <Typography style={{ color: "#4c91af" }}>
                                        React <FaReact />
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Paper className="skill_card" style={{ padding: "0.5rem" }}>
                                    <Typography style={{ color: "#4e4cbb" }}>
                                        Redux <SiRedux />
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Paper className="skill_card" style={{ padding: "0.5rem" }}>
                                    <Typography style={{ color: "#be9e44" }}>
                                        JavaScript <IoLogoJavascript />
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Paper className="skill_card" style={{ padding: "0.5rem" }}>
                                    <Typography style={{ color: "#44bcec" }}>
                                        HTML <TiHtml5 />
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Paper className="skill_card" style={{ padding: "0.5rem" }}>
                                    <Typography style={{ color: "#44ec8a" }}>
                                        CSS <MdCss />
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>

                        <Typography variant="h6" gutterBottom style={{ marginTop: "1rem" }}>
                            Certificate
                        </Typography>
                        <Typography variant="body2">Web-Development BootCamp, UDEMY</Typography>
                    {/* </Paper> */}
                </Grid>

                {/* Right Section */}
                <Grid item xs={12} md={4}>
                    {/* <Paper elevation={3} style={{ padding: "1rem", textAlign: "center" }}> */}
                        <AvatarFrame />
                    {/* </Paper> */}
                </Grid>
            </Grid>
        </div>
        </Grid>
    );
}
