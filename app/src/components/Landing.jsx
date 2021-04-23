import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { Grid } from "@material-ui/core";

export default function Landing(props) {
    return (
        <Grid container p={3}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </Grid>
    )
}