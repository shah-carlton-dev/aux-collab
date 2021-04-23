import React from "react";
import { makeStyles, Grid, Box } from '@material-ui/core';

const useStyles = makeStyles({
    landingSection: {
        height: `100vh`,
    }
});

export default function Section2(props) {
    const classes = useStyles();
    return (
        <Grid item container className={classes.landingSection} id="2">
            <Box m={12}>
                yeah2
            </Box>
        </Grid>
    )
}