import { Grid, Paper, Typography } from "@material-ui/core";
import ContactForm from "./Contactform";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactInfo() {
    const OpenInNewWindow = () => {
        window.open("https://github.com/Shubham-010");
    };

    return (
        <Grid
            container
            id="Contact"
            style={{
                minHeight: "100vh",
                padding: "20px",
                backgroundColor: 'var(--bg-color)',
            }}
            spacing={3}
        >
            {/* Left Section with Contact Details */}
            <Grid item xs={12} md={6}>
                <Paper
                    elevation={3}
                    style={{
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Let's Talk
                    </Typography>
                    <Typography variant="body1">
                        Email 📩: <strong>shubhamchikane0109@gmail.com</strong>
                    </Typography>
                    <Typography variant="body1">
                        GitHub 💻:{" "}
                        <strong>
                            <a
                                href="https://github.com/Shubham-010"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                https://github.com/Shubham-010
                            </a>
                        </strong>
                    </Typography>
                    <Typography variant="body1">Mobile No.: <strong>9167404223</strong></Typography>
                    <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
                        Follow Us
                    </Typography>
                    <div>
                        <FaGithub
                            onClick={OpenInNewWindow}
                            style={{
                                fontSize: "24px",
                                margin: "10px",
                                cursor: "pointer",
                                color: "#333",
                            }}
                        />
                        <FaLinkedin
                            style={{
                                fontSize: "24px",
                                margin: "10px",
                                cursor: "pointer",
                                color: "#0077b5",
                            }}
                        />
                    </div>
                </Paper>
            </Grid>

            {/* Right Section with Contact Form */}
            <Grid item xs={12} md={6}>
                <Paper
                    elevation={3}
                    style={{
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                    }}
                >
                    <ContactForm />
                </Paper>
            </Grid>
        </Grid>
    );
}
