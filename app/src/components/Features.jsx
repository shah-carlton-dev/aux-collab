import React from "react";
import { makeStyles, Grid, Box, Paper, Button, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import featureImg from "../assets/key-fns.png"
import '../styles/Features.css';
const useStyles = makeStyles({
    featureSection: {
        backgroundColor: 'rgb(27,27,27)',
        borderTop: '2px solid white',
        paddingBottom: '5vh',
        overflow: `hidden`
    },
    featureImg: {
        height: `50vh`,
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
    title: {
        marginTop: '5vh',
        marginBottom: '5vh'
    }
})

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
        <div className={`fade-in-section-features ${isVisible ? 'is-visible-features' : ''}`} ref={domRef} >
            {props.children}
        </div>
    );
}

function Item(props) {
    return (
        <div class="wrapper">
            <div class="text-div">
                <h2 className="carousel-header">{props.item.name}</h2>
                <p className="carousel-text">{props.item.description}</p>
            </div>
        </div> 
            
            

    )
}

export default function Section4(props) {
    const classes = useStyles();
    const items = [
        { 
            name: "Aux Finds Common Ground",
            description: "Aux uses AI to blend your music tastes with the preferences of others to curate the best playlist for any situation. Whether you’re on a roadtrip with friends, enjoying a cup of coffee at your local spot, or throwing a dinner party, Aux is the perfect way to effortlessly listen together."
        }, { 
            name: "Our Goal",
            description: "We want to reinvent the collaborative music experience. Our powerful machine learning algorithms can learn your music preferences better than you to provide an unparalleled listening experience. Leave the hassle of music selection in the past with seamless, cross-platform group collaboration. At Aux, our mission is to provide our users with the tools necessary to make every group listening experience an Aux experience."
        }, { 
            name: "Live Playlists",
            description: "One of our most exciting, revolutionary features are our live playlists. Live playlists allow for users to come and go from a playlist lobby and have the algorithm constantly reconfigure the music accordingly. For example, say Mark enters the party a little late, as soon as he joins the live playlist party, Mark’s music data will be taken into account. As soon as Mark is ready to go home, he just simply leaves the party and his preferences no longer have an effect on the party."
        }, { 
            name: "AI That Learns With You",
            description: "Our selection software is continuously updating and learning what you like to listen to so that when you and your friends want to listen to music together, our software knows what you like, what they like, and will find the perfect middle ground. The more you use Aux, the more Aux will learn and be able to provide you with better playlists."
        }, { 
            name: "Pair With Anyone",
            description: "Ever wonder what your favorite artists are actually listening to? How about what your favorite sports star likes to listen to when they warm up for a big game? Aux allows users to set their profile as public so you don’t need to be invited to make a playlist. This means you can search up any Aux user and if they’re public, create a playlist between you two immediately. Next time you’re listening with friends, add your favorite celebrity’s Aux profile to the mix!"
        }, {
            name: "Quick Sync With Friends",
            description: "Aux allows you to turn on quick sync once your are friends on our app. Quick synch allows you to not even need to open the app to join a host’s playlist. The host can simply sync you at any time allowing them to create playlists even faster. This feature is especially useful for things like car rides with a friend where you both already know each other and you’d like to quickly put on music every time you get in the car."
        }
    ]
    return (
        <Grid item container className={classes.featureSection} id="3">
            <Grid item md={12} className={classes.title}>
                <Typography align="center" variant="h2">Key Functionalities</Typography>
            </Grid>
            <Grid item md={6}>
                <Carousel autoPlay="false" stopAutoPlayOnHover="true" align="center">
                    {items.map((item, i) => <Item key={i} item={item}/>)}
                </Carousel>
            </Grid>
            <Grid item md={6}>
                <Box>
                    <FadeInSection>
                        <img src={featureImg} className={classes.featureImg} />
                    </FadeInSection>
                </Box>
            </Grid>
        </Grid>
    )
}