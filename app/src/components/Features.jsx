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
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>
            
            

    )
}

export default function Section4(props) {
    const classes = useStyles();
    const items = [
        { 
            name: "Live Playlists",
            description: "One of our most exciting, revolutionary features is the living playlist. A playlist host can turn on the living playlist feature to allow guests to an event to come and go as they please. Guests can toggle if they’re “in” or “out” of the playlist and the music will adapt accordingly. For example, say Mark enters the party a little late, as soon as he toggles the “in” button, Mark’s music data will be taken into account and will shift the playlist accordingly. As soon as Mark is ready to go home, he can toggle “out” so that his music preferences aren’t having an effect on the party after he’s left."
        }, { 
            name: "Ex2",
            description: "One of our mist. A playlist host can turn on the living playlist feature to allow guests to an event to come and go as they please. Guests can toggle if they’re “in” or “out” of the playlist and the music will adapt accordingly. For example, say Mark enters the party a little late, as soon as he toggles the “in” button, Mark’s music data will be taken into account and will shift the playlist accordingly. As soon as Mark is ready to go home, he can toggle “out” so that his music preferences aren’t having an effect on the party after he’s left."
        }, { 
            name: "Ex3",
            description: "One of our most exciting, reeft."
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