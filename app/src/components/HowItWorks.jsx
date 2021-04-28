import React from "react";
import { makeStyles, Grid, Box } from '@material-ui/core';

const useStyles = makeStyles({
    landingSection: {
        height: `50vh`,
    }
});

export default function Section3(props) {
    const classes = useStyles();
    return (
        <Grid item container className={classes.landingSection} id="2">
            <Box m={6}>
                yeah3
            </Box>
        </Grid>
    )
}