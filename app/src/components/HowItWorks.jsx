import React from "react";
import { makeStyles, Grid, Box } from '@material-ui/core';

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
        fontSize: `18px`,
        textAlign: `center`,
    }
});

export default function Section3(props) {
    const classes = useStyles();
    return (
        <Grid item container xs={12} className={classes.howItWorksSection} id="2">
            <Grid item className={classes.stepDad}>
                <h4 className={classes.stepByStep}>How it works: Step by Step</h4>
            </Grid>
            <Grid item container direction="row" justify="space-evenly" alignItems="flex-start" className={classes.steps} >
                <Grid item container direction="column" xs={3}>
                    <Grid item className={classes.stepMom}>
                        1
                    </Grid>
                    <Grid item className={classes.stepKid}>
                    After downloading our mobile application, link your streaming service account, and create your Aux account. Aux uses your live listening data from Spotify to curate collaborative playlists with other users in your party lobby.
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={3}>
                    <Grid item className={classes.stepMom}>
                        2
                    </Grid>
                    <Grid item className={classes.stepKid}>
                    Once logged into Aux, nearby available users will appear on your Aux home screen. Simply drag and drop the desired users into the playlist party lobby and watch the magic happen. Aux will use artificial intelligence to cross reference your music taste with the music taste of your party lobby to curate the optimal listening experience for everyone.

                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={3}>
                    <Grid item className={classes.stepMom}>
                        3
                    </Grid>
                    <Grid item className={classes.stepKid}>
                    Now the only thing left to do is enjoy Aux’s limitless applications. From picnics to parties to Sunday brunch, music is everywhere. Anytime where you’re listening to music with two or more people, Aux has got you covered.
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}