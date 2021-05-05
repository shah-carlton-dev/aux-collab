import React from "react";
import { makeStyles, Grid, Box } from '@material-ui/core';
import goalbg from "../assets/goalbg.png";

const useStyles = makeStyles({
    ourGoal: {
        fontFamily: `'Prompt', sans-serif`,
        fontSize: `40px`,
        fontWeight: `200`,
        lineHeight: `50px`,
        textAlign: `center`,
        margin: `0px`
    },
    goalBody: {
        fontFamily: `Montserrat`,
        fontSize: `18px`,
        textAlign: `center`,
    },
    goalWrap: {
        background: `url(${goalbg})`,
        backgroundSize: `100% 100%`,
        height: `30vh`
    }
});

export default function OurGoal(props) {
    const classes = useStyles();
    return (
        <Grid item className={classes.goalWrap}>
            <h4 className={classes.ourGoal}>Our Goal</h4>
            <Box mx={{ sm: 2, md: 12 }}>
                <p className={classes.goalBody}>We’re reimagining the collaborative music experience. Our AI learns your music preferences better than you to provide unparalleled listening experiences. Leave the hassle of music selection in the past with seamless, cross-platform group collaboration.</p>
            </Box>
        </Grid>
    )
}