import React from "react";
import { makeStyles, Grid, Box } from '@material-ui/core';
import section2img from "../assets/desktop-collabgraphic-E525152A-F8F0-4C56-8CF0-1924ABD97151.png";
import "../styles/About.css";

const useStyles = makeStyles({
    sec2img: {
        height: `84%`,
        width: `84%`
    },
    header: {
        fontFamily: `'Prompt', sans-serif`,
        fontSize: `40px`,
        fontWeight: `200`,
        lineHeight: `50px`,
    },
    sec2container: {
        margin: `0 5vw`,
        height: `100vh`,
    },
    body: {
        fontFamily: `Montserrat`,
        fontSize: `18px`
    },
    fullHeight: {
        // height: `100%`,
    }
});

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div className={`fade-in-section-about ${isVisible ? 'is-visible-about' : ''}`} ref={domRef} >
            {props.children}
        </div>
    );
}

export default function About(props) {
    const classes = useStyles();
    return (
        <Grid item container id="1" className={classes.sec2container} >
            <Grid item container alignItems="flex-start">
                <Grid item md={4} className={classes.fullHeight}>
                    <FadeInSection>
                        <img src={section2img} className={classes.sec2img} />
                    </FadeInSection>
                </Grid>
                <Grid item md={8}>
                    <h4 className={classes.header}>Manually creating playlists is now a thing of the past</h4>
                    <p className={classes.body}>Collaborative music is a bigger part of life than you’d think. Think of all the times you listen to music with others: car rides, date night, dinner parties, night clubs, even restaurants. You may not always realize it but in every case where music is playing, someone had to take the time to choose that music. Think of how convenient it would be to have a playlist generated by our powerful AI software with the click of a button rather than take time and manually collaborate on a playlist for your next…. anything!</p>
                </Grid>
            </Grid>
            <Grid item container>
                {/* our goal */}
            </Grid>
        </Grid>
    )
}