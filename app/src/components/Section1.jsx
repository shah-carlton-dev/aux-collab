import React from "react";
import { makeStyles, Grid, Box } from '@material-ui/core';
import landingbg from "../assets/2gradient.gif";

const useStyles = makeStyles({
    landingSection: {
        height: `100vh`,
        backgroundImage: `url(${landingbg})`
    },
});

export default function Section1(props) {
    const classes = useStyles();
    return (
        <Grid item container className={classes.landingSection} id="1">
            <Box m={12}>
                zoom this pic out
            </Box>
        </Grid>
    )
}