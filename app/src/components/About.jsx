import React from "react";
import { makeStyles, Grid, Box } from '@material-ui/core';
import section2img from "../assets/new-about.png";
import squirrelydan from "../assets/sqirl-2.png";
import "../styles/About.css";

const useStyles = makeStyles({
    sec2img: {
        height: `100%`,
        width: `100%`
    },
    creatingPlaylists: {
        fontFamily: `'Prompt', sans-serif`,
        fontSize: `40px`,
        fontWeight: `200`,
        lineHeight: `50px`,
    },
    sec2container: {
        margin: `0 5vw`,
        minHeight: `90vh`,
    },
    body: {
        fontFamily: `Montserrat`,
        fontSize: `18px`
    },
    fullHeight: {
        marginTop: '50px'
    },
    swirlWrap:{
        marginTop: `3vw`,
        marginBottom: `3vw`,
        marginLeft: `-8vw`,
        width: `103vw`,
        marginRight: `-8vw`,
        overflow: `hidden`,
    },
    swirl: {
        textAlign: `center`,
        width: `100%`,
        height: `auto`,
    },
    aboutText: {
        marginLeft: '10%'
    },

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
            <Grid item container spacing={8} alignItems="flex-start">
                <Grid item md={4} className={classes.fullHeight}>
                    <FadeInSection>
                        <img src={section2img} className={classes.sec2img} />
                    </FadeInSection>
                </Grid>
                <Grid item md={6} className={classes.aboutText}>
                    <h4 className={classes.creatingPlaylists}>Aux connects people by finding common ground through music</h4>   
                    <p className={classes.body}>We all listen to music. It’s constantly around us. Why not harness the power of our music to bring ourselves closer to one another? Aux uses machine learning to blend your music tastes and preferences with the tastes and preferences of the group to curate the best possibe middle ground playlist for any situation. Wether you’re on a roadtrip with friends, enjoying a cup of coffee at your local spot, or throwing a dinner party, Aux is the perfect way to effortlessly listen together.</p>
                </Grid>
            </Grid>
            <Grid item container direction="column">
                <Grid item>
                    <div className={classes.swirlWrap}>
                        <img src={squirrelydan} className={classes.swirl} />
                    </div>
                </Grid>
                
            </Grid>
        </Grid>
    )
}