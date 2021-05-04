import React from "react";
import { makeStyles, Grid, Box, Typography, Button } from '@material-ui/core';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from 'react-material-ui-carousel'
import featureImg from "../assets/key-fns.png"
import '../styles/Features.css';
import carouselbg from '../assets/carousel-background.png';

const useStyles = makeStyles({
    featureSection: {
        backgroundColor: `rgb(27,25,28)`,
        paddingBottom: '5vh',
        overflow: `hidden`,
        height: `100vh`
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
        marginBottom: `0px`,
        marginTop: `-8px`
    },
    carouselText: {
        fontFamily: `Montserrat`,
        fontSize: `18px`,
        marginLeft: `2px`,
        marginRight: `2px`
    },
    carouselContainer: {
        minHeight: `50vh`,
        maxHeight: `50vh`
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
        padding: `20%`
    },
    dotsWrap: {
        paddingTop: ``,
        textAlign: `center`
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
    const classes = useStyles();
    return (
        <div className={classes.topWrapper}>
            <div className={classes.wrapper}>
                <div class={classes.carouselContent}>
                    <h2 className={classes.carouselHeader}>{props.item.name}</h2>
                    <p className={classes.carouselText}>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
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
            name: "Live Playlists",
            description: "One of our most exciting, revolutionary features are our live playlists. Live playlists allow for users to come and go from a playlist lobby and have the algorithm constantly reconfigure the music accordingly. For example, say Mark enters the party a little late, as soon as he joins the live playlist party, Mark’s music data will be taken into account. As soon as Mark is ready to go home, he just simply leaves the party and his preferences no longer have an effect on the party."
        }, {
            ix: 3,
            name: "AI That Learns With You",
            description: "Our selection software is continuously updating and learning what you like to listen to so that when you and your friends want to listen to music together, our software knows what you like, what they like, and will find the perfect middle ground. The more you use Aux, the more Aux will learn and be able to provide you with better playlists."
        }, {
            ix: 4,
            name: "Pair With Anyone",
            description: "Ever wonder what your favorite artists are actually listening to? How about what your favorite sports star likes to listen to when they warm up for a big game? Aux allows users to set their profile as public so you don’t need to be invited to make a playlist. This means you can search up any Aux user and if they’re public, create a playlist between you two immediately. Next time you’re listening with friends, add your favorite celebrity’s Aux profile to the mix!"
        }, {
            ix: 5,
            name: "Quick Sync With Friends",
            description: "Aux allows you to turn on quick sync once your are friends on our app. Quick synch allows you to not even need to open the app to join a host’s playlist. The host can simply sync you at any time allowing them to create playlists even faster. This feature is especially useful for things like car rides with a friend where you both already know each other and you’d like to quickly put on music every time you get in the car."
        }
    ]
    return (
        <Grid item container className={classes.featureSection} id="3" alignItems="center">
            <Grid item md={12} className={classes.title}>
                <Typography align="center" variant="h2">Key Functionalities</Typography>
            </Grid>
            <Grid item sm={6}>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={90}
                    totalSlides={6}
                    className={classes.pureCarousel}
                    infinite={true}
                    isPlaying={true}
                    interval={2500}
                >
                    <Slider className={classes.carouselSlidey}>
                        {items.map(item => (
                            <Slide index={item.ix}>
                                <h4 className={classes.carouselHeader}>{item.name}</h4>
                                <p className={classes.carouselText}>{item.description}</p>
                            </Slide>
                        ))}
                    </Slider>
                    {/* <ButtonBack disabled={false}>
                    <Button variant="outlined">{"<"}</Button>
                </ButtonBack>
                <ButtonNext disabled={false}>
                    <Button variant="outlined">{">"}</Button>
                </ButtonNext> */}
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