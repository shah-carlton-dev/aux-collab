import React from "react";
import { makeStyles, Grid, Box, Typography, Button } from '@material-ui/core';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from 'react-material-ui-carousel'
import featureImg from "../assets/Music.png"
import '../styles/Features.css';
import carouselbg from '../assets/carousel-background.png';

const useStyles = makeStyles(theme => ({
    featureSection: {
        backgroundColor: `rgb(27,25,28)`,
        paddingBottom: '5vh',
        overflow: `hidden`,
        minHeight: `100vh`
    },
    featureImg: {
        height: `40vh`,
    },
    header: {
        fontFamily: `'Prompt', sans-serif`,
        fontSize: `40px`,
        fontWeight: `200`,
        lineHeight: `50px`,
    },
    body: {
        fontFamily: `Montserrat`,
        fontSize: `18px`
    },
    title: {
        marginTop: '5vh',
        marginBottom: '5vh'
    },
    carouselHeader: {
        fontFamily: `'Prompt', sans-serif`,
        fontSize: `30px`,
        fontWeight: `200`,
        lineHeight: `30px`,
        marginBottom: `0px`,
        marginTop: `0px`
    },
    carouselText: {
        fontFamily: `Montserrat`,
        fontSize: `18px`,
        [theme.breakpoints.down('sm')]: {
            fontSize: `16px`,
        },
        marginLeft: `2px`,
        marginRight: `2px`
    },
    carouselContainer: {
        minHeight: `80vh`,
        maxHeight: `80vh`
    },
    wrapper: {
        backgroundImage: `url(${carouselbg})`,
        width: `auto`,
        height: `auto`,
        backgroundSize: `100% 75%`,
        padding: `20%`,
    },
    carouselContent: {

    },
    pureCarousel: {
        backgroundImage: `url(${carouselbg})`,
        backgroundSize: `100% 100%`,
        padding: `20%`,
        height: `100% !important`,
        [theme.breakpoints.down('sm')]: {
            height: '70vh !important',
        }
    },
    dotsWrap: {
        paddingTop: ``,
        textAlign: `center`
    },
    carouselMobile: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    carouselSlidey: {
        [theme.breakpoints.down('md')]: {
            height: '60vh !important',
        }
    }
}))

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

export default function Section4(props) {
    const classes = useStyles();
    const items = [
        {
            ix: 0,
            name: "Aux Finds Common Ground",
            description: "Aux uses AI to blend your music tastes with the preferences of others to curate the best playlist for any situation. Whether you’re on a roadtrip with friends, enjoying a cup of coffee at your local spot, or throwing a dinner party, Aux is the perfect way to effortlessly listen together."
        }, {
            ix: 1,
            name: "Our Goal",
            description: "We want to reinvent the collaborative music experience. Our powerful machine learning algorithms can learn your music preferences better than you to provide an unparalleled listening experience. Leave the hassle of music selection in the past with seamless, cross-platform group collaboration. At Aux, our mission is to provide our users with the tools necessary to make every group listening experience an Aux experience."
        }, {
            ix: 2,
            name: "Live Playlists", //
            description: "Live playlists are an exciting feature that allows our song selection algorithm to reconfigure playlists as users join and leave streaming lobbies. For example, Mark comes to a party a little late. As soon as Mark arrives, he can still join the live playlist party and have his music data incorporated into the listening experience of the party. As soon as Mark is ready to go home, he leaves the listening party, and his music preferences no longer affect the party's playlist."
        }, {
            ix: 3,
            name: "AI That Learns With You", //
            description: "Our music selection software utilizes neural networks that understand prior group playlist dynamics to improve future group listening experiences. Aux generates distinct user signatures by managing data from streaming services providers. Our software offers continuously refined curation, allowing Aux to offer better song recommendations as users spend more time on the platform."
        }, {
            ix: 4,
            name: "Pair With Anyone", //
            description: "People are always looking for additional ways to connect. Aux allows people to blend their music preferences in a playlist with their favorite music artists, celebrities, and friends. Users can make their profiles public, allowing people to create Aux playlists through a simple search. Next time you’re listening with friends, add your favorite celebrity’s Aux profile to the mix!"
        }, {
            ix: 5,
            name: "Quick Sync With Friends", //
            description: "As Aux learns who you frequently listen with, the quick sync feature will automatically send you and your friend a playlist invitation once you’re near each other. This enables users to join playlists through a simple notification swipe. The quick synch feature is handy for things like car rides with a friend as it allows for effortless playlist creation."
        }
    ]
    return (
        <Grid item container className={classes.featureSection} id="3" alignItems="center">
            <Grid item xs={12} className={classes.title}>
                <Typography align="center" variant="h2" style={{ fontSize: '40px' }}>Key Functionalities</Typography>
            </Grid>
            <Grid item md={6} className={classes.carouselMobile}>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={6}
                    className={classes.pureCarousel}
                    infinite={true}
                    isPlaying={true}
                    interval={5000}
                >
                    <Slider className={classes.carouselSlidey}>
                        {items.map(item => (
                            <Slide index={item.ix}>
                                <h4 className={classes.carouselHeader}>{item.name}</h4>
                                <p className={classes.carouselText}>{item.description}</p>
                            </Slide>
                        ))}
                    </Slider>
                    <div className={classes.dotsWrap}>
                        <DotGroup />
                    </div>
                </CarouselProvider>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={5}>
                <Box>
                    <FadeInSection>
                        <img src={featureImg} className={classes.featureImg} />
                    </FadeInSection>
                </Box>
            </Grid>

        </Grid>
    )
}