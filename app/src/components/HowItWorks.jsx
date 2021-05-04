import React from "react";
import { makeStyles, Grid, Box } from '@material-ui/core';
import easyOne from '../assets/easy-1.png'
import easyTwo from '../assets/easy-2.png'
import easyThree from '../assets/easy-3.png'
import '../styles/HowItWorks.css'
const useStyles = makeStyles({
    howItWorksSection: {
        minHeight: `70vh`,
    },
    stepByStep: {
        fontFamily: `'Prompt', sans-serif`,
        fontSize: `40px`,
        fontWeight: `200`,
        textAlign: `center`,
        width: `100vw`
    },
    stepDad: {},
    steps: {
        marginTop: `-4vh`,
        marginBottom: `5vh`
    },
    stepMom: {
        fontFamily: `'Prompt', sans-serif`,
        fontSize: `40px`,
        fontWeight: `200`,
        textAlign: `center`,
    },
    stepKid: {
        fontFamily: `Montserrat`,
        fontSize: `22px`,
        textAlign: `center`,
    },
    stepKidSpecial: {
        fontFamily: `Montserrat`,
        fontSize: `22px`,
        textAlign: `center`,
        marginBottom: '20px'
    }
});

export default function Section3(props) {
    const classes = useStyles();
    return (
        <div className="howWorksWrapper">
            <Grid item container xs={12} className={classes.howItWorksSection} id="2">
            <Grid item className={classes.stepDad}>
                <h4 className={classes.stepByStep}>As Easy As</h4>
            </Grid>
            <Grid item container direction="row" justify="space-evenly" alignItems="flex-start" className={classes.steps} >
                <Grid item container direction="column" xs={3}>
                    <Grid item className={classes.stepMom}>
                        1
                    </Grid>
                    <Grid item className={classes.stepKid}>
                        <img src={easyOne} />
                    </Grid>
                    <Grid item className={classes.stepKid}>
                        Find who you'd like to make a playlist with. You can find people by proximity or simply search their username. 
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={3}>
                    <Grid item className={classes.stepMom}>
                        2
                    </Grid>
                    <Grid item className={classes.stepKidSpecial}>
                        Select the genres you'd like to have represented in your listening experience. 
                    </Grid>
                    <Grid item className={classes.stepKid}>
                        <img src={easyTwo} />
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={3}>
                    <Grid item className={classes.stepMom}>
                        3
                    </Grid>
                    <Grid item className={classes.stepKid}>
                        <img src={easyThree} />
                    </Grid>
                    <Grid item className={classes.stepKid}>
                        Now Aux's algorithms will get to work curating the perfect listening environment.
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}