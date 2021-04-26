import React from "react";
import { makeStyles, Grid, Box, Slide, Button } from '@material-ui/core';
import logoimg from "../assets/2gradient2.gif";
import phoneplayer from "../assets/desktop-3aux-3d-mockup-laying-down-647EDE2D-69EE-4F7B-B5ED-D78AC0A7318B 1.png";

const useStyles = makeStyles(theme => ({
    landingSection: {
        height: `100vh`,
    },
    subtitle: {
        fontFamily: `'Montserrat', sans-serif`,
        color: `#ffffff`
    },
    leftLanding: {
        textAlign: `center`
    },
    auxLogo: {
        maxHeight: `100%`,
        maxWidth: `100%`
    },
    buttonContainer: {
        margin: `0 5px`
    }
}));

export default function Section1(props) {
    const classes = useStyles();

    return (
        <Grid item container className={classes.landingSection} id="0">
            <Box m={10}>
                <Grid item container>
                    <Grid item container xs={6}>
                        <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit>
                            <Box marginTop={-6} className={classes.leftLanding}>
                                <img src={logoimg} className={classes.auxLogo} />
                                <p className={classes.subtitle}>The future of collaborative listening</p>
                                <Grid item container direction="row" justify="center">
                                    <Grid item className={classes.buttonContainer}>
                                        <Button variant="outlined" onClick={() => ""}>Start Listening</Button>
                                    </Grid>
                                    <Grid item className={classes.buttonContainer}>
                                        <Button variant="outlined" onClick={() => ""}>Demo Video</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Slide>
                    </Grid>
                    <Grid item xs={6}>
                        <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                            <Box marginTop={-12} marginLeft={-6}>
                                <img src={phoneplayer} ></img>
                            </Box>
                        </Slide>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}