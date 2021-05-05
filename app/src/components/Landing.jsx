import React from "react";
import { makeStyles, Grid, Box, Slide, Button, Card, CardContent, CardActions } from '@material-ui/core';
import logoimg from "../assets/aux-landing.gif";
import phoneplayer from "../assets/desktop-3aux-3d-mockup-laying-down-647EDE2D-69EE-4F7B-B5ED-D78AC0A7318B 1.png";

const useStyles = makeStyles(theme => (
    {
        landingSection: {
            minHeight: `85vh`,
        },
        subtitle: {
            fontFamily: `'Montserrat', sans-serif`,
            color: `#ffffff`,
        },
        leftLanding: {
            textAlign: `center`,
            [theme.breakpoints.down('md')]: {
                margin: `0px`
            }
        },
        auxLogo: {
            maxHeight: `100%`,
            maxWidth: `100%`,
            [theme.breakpoints.down('md')]: {
                maxWidth: `80%`
            }
        },
        buttonContainer: {
            margin: `0 5px`
        },
        phonePlayer: {
            height: `100%`,
            width: `100%`
        },
        phoneContainer: {
            maxHeight: `671px`
        },
        countdownCard: {
            width: `8vw`,
            alignItems: `center`,
            alignContent: `center`,
            textAlign: `center`,
            margin: `0 5px`,
            marginTop: `10px`,
            color: `white`,
            border: 'solid 3px transparent',
            backgroundImage: 'linear-gradient(rgba(10, 10, 17, 0), rgba(10, 10, 17, 0)), linear-gradient(101deg, #6720B3, #A9209C)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
            boxShadow: '2px 1000px 1px rgb(56,23,92) inset',
            borderRadius: '15px'
        },
        countdownLabel: {
            textAlign: `center`,
            paddingBottom: `2vh`,
            fontFamily: `Montserrat`,
            fontSize: `16px`,
        },
        countdownAmt: {
            margin: `0px`,
            fontFamily: `'Prompt', sans-serif`,
            fontSize: `36px`,
            fontWeight: `200`,
        },
        betaRelease: {
            paddingTop: `3vh`,
            marginBottom: `1vh`,
            fontFamily: `Montserrat`,
            fontSize: `22px`,
        }
    }
));

const Countdown = (props) => {
    const classes = useStyles();
    const { initialDay = 0, initialHour = 0, initialMinute = 0, initialSecond = 0 } = props;
    const [days, setDays] = React.useState(initialDay);
    const [hours, setHours] = React.useState(initialHour);
    const [minutes, setMinutes] = React.useState(initialMinute);
    const [seconds, setSeconds] = React.useState(initialSecond);
    React.useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <Grid item container justify="center"> 
            <Card className={classes.countdownCard}>
                <CardContent>
                    <h4 className={classes.countdownAmt}>{days}</h4>
                </CardContent>
                <div className={classes.countdownLabel}>
                    days
                </div>
            </Card>
            <Card className={classes.countdownCard}>
                <CardContent>
                    <h4 className={classes.countdownAmt}>{hours}</h4>
                </CardContent>
                <div className={classes.countdownLabel}>
                    hours
                </div>
            </Card>
            <Card className={classes.countdownCard}>
                <CardContent>
                    <h4 className={classes.countdownAmt}>{minutes}</h4>
                </CardContent>
                <div className={classes.countdownLabel}>
                    minutes
                </div>
            </Card>
            <Card className={classes.countdownCard}>
                <CardContent>
                    <h4 className={classes.countdownAmt}>{seconds}</h4>
                </CardContent>
                <div className={classes.countdownLabel}>
                    seconds
                </div>
            </Card>
        </Grid>
    )
}

export default function Landing(props) {
    const classes = useStyles();
    const releaseDate = new Date(2021, 4, 15, 17);
    const currentDate = new Date();
    let days = releaseDate.getDate() - currentDate.getDate();
    let hours = releaseDate.getHours() - currentDate.getHours();
    let mins = releaseDate.getMinutes() - currentDate.getMinutes();
    let secs = releaseDate.getSeconds() - currentDate.getSeconds();
    if (hours < 0) {
        days--;
        hours = 24 + hours;
    }
    if (mins < 0) {
        hours--;
        mins = 60 + mins;
    }
    if (secs < 0) {
        mins--;
        secs = 60 + secs;
    }

    return (
        <Grid item container className={classes.landingSection} id="0">
            <Grid item container alignItems="center">
                <Grid item container md={6} justify="center">
                    <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit>
                        <Box marginTop={-8} marginLeft={10} className={classes.leftLanding}>
                            <img src={logoimg} className={classes.auxLogo} />
                            <p className={classes.subtitle}>The Future of Collaborative Listening</p>
                            <Grid item container direction="row" justify="center">
                                <Grid item className={classes.buttonContainer}>
                                    <Button variant="outlined" onClick={() => ""}>Start Listening</Button>
                                </Grid>
                                <Grid item className={classes.buttonContainer}>
                                    <Button variant="outlined" onClick={() => ""}>Demo Video</Button>
                                </Grid>
                            </Grid>
                            <h4 className={classes.betaRelease}>Beta Version Release</h4>
                            <Countdown initialDay={days} initialHour={hours} initialMinute={mins} initialSeconds={secs}></Countdown>
                        </Box>

                    </Slide>
                </Grid>
                <Grid item md={6}>
                    <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                        <Box className={classes.phoneContainer}>
                            <img src={phoneplayer} className={classes.phonePlayer}></img>
                        </Box>
                    </Slide>

                </Grid>
                <Grid item md={6}>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/GfueGrOLXS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </Grid>
            </Grid>
        </Grid>
    )
}