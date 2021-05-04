import React from "react";
import { makeStyles, Grid, Box, Slide, Button } from '@material-ui/core';
import logoimg from "../assets/2gradient2-transparent.gif";
import phoneplayer from "../assets/desktop-3aux-3d-mockup-laying-down-647EDE2D-69EE-4F7B-B5ED-D78AC0A7318B 1.png";

const useStyles = makeStyles(theme => ({
    landingSection: {
        minHeight: `75vh`,
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
    },
    phonePlayer: {
        height: `100%`,
        width: `100%`
    },
    phoneContainer: {
        maxHeight: `671px`
    }
}));

export default function Section1(props) {
    const classes = useStyles();

    return (
        <Grid item container className={classes.landingSection} id="0">
                <Grid item container>
                    <Grid item container md={6}>
                        <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit>
                            <Box marginTop={5} marginLeft={10} className={classes.leftLanding}>
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
                    <Grid item md={6}>
                        <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                            <Box className={classes.phoneContainer}>
                                <img src={phoneplayer} className={classes.phonePlayer}></img>
                            </Box>
                        </Slide>
                    </Grid>
                </Grid>
        </Grid>
    )
}