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
                <p className={classes.goalBody}>We want to reinvent your daily collaborative music experience. Everything from your next event down to your daily drive with friends, Aux has you covered. Leave the hassle of music selection in the past with seamless, cross-platform group collaboration. At Aux, our mission is to provide our users with the tools necessary to make every group listening experience an Aux experience.</p>
            </Box>
        </Grid>
    )
}