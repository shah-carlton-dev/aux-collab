import React, { useState } from "react";
import { makeStyles, Grid, Box, Slide, Button, Card, CardContent, Modal, Typography, TextField } from '@material-ui/core';
import logoimg from "../assets/aux-landing.gif";
import phoneplayer from "../assets/desktop-3aux-3d-mockup-laying-down-647EDE2D-69EE-4F7B-B5ED-D78AC0A7318B 1.png";
import { db } from "../firestore.js";
import popupImage from '../assets/ContactPopUp.png';


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
            [theme.breakpoints.down('sm')]: {
                margin: `0px`,
                paddingTop: `10vw`
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
            width: `100%`,
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
            borderRadius: '15px',
            [theme.breakpoints.down('md')]: {
                width: `90px`,
                height: `110px`
            }
        },
        countdownLabel: {
            textAlign: `center`,
            marginBottom: `2vh`,
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
        },
        paper: {
            position: 'absolute',
            width: 675,
            height: 450,
            left: '50%',
            top: '50%',
            marginLeft: -337,
            marginTop: -200,
            backgroundImage: `url(${popupImage})`,
            backgroundSize: 'contain',
            borderRadius: '20px',
            [theme.breakpoints.down('sm')]: {
                width: `100%`,
                maxWidth: `100vw`,
                maxHeight: `100%`,
                marginLeft: `-50vw`,
                backgroundSize: `cover`
            }
        },
        innerContact: {
            margin: '5%'
        },
        contactForm: {
            marginTop: '10px',
            width: 607.5,
            height: 315,
        },
        contactItem: {
            background: 'rgba(216, 216, 216, 0.5)',
            borderRadius: '10px'
        },
        multilineColor: {
            color: 'white'
        },
        label: {
            color: 'white'
        },
        focusedLabel: {
            color: 'white'
        },
        contactBackdrop: {
            background: 'rgba(0,0,0, 0.8) !important'
        },
        submitBtn: {
            backgroundColor: '#0A0A11',
            "&:hover, &:focus": {
                backgroundColor: '#0A0A11 !important',
            },
            boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
            border: 'solid 3px transparent',
            backgroundImage: 'linear-gradient(rgba(10, 10, 17, 0), rgba(10, 10, 17, 0)), linear-gradient(101deg, #6720B3, #A9209C)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
            boxShadow: '2px 1000px 1px #0A0A11 inset',
            borderRadius: '90px'
        },
        modal: {
            outline: 'none !important',
            [theme.breakpoints.down('sm')]: {
                maxWidth: `100vw`,
            }
        },
        betaAccess: {
            backgroundColor: '#0A0A11',
            "&:hover, &:focus": {
                backgroundColor: '#0A0A11 !important',
            },
            boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
            border: 'solid 3px transparent',
            backgroundImage: 'linear-gradient(rgba(10, 10, 17, 0), rgba(10, 10, 17, 0)), linear-gradient(101deg, #6720B3, #A9209C)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
            boxShadow: '2px 1000px 1px #0A0A11 inset',
            borderRadius: '90px',
            marginTop: '20px',
            whiteSpace: `nowrap`,
            minWidth: `22vw`,
            width: `fit-content`
        },
        formContainer: {
            maxWidth: `80vw`,
            width: 'auto',
            margin: 0
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
                    if (minutes < 0) {
                        setMinutes(60 + minutes);
                        setHours(hours - 1);
                    }
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
        <Grid item container justify="center" sm={12} id="top">
            <Grid item container xs={3} justify="flex-end">
                <Card className={classes.countdownCard}>
                    <CardContent>
                        <h4 className={classes.countdownAmt}>{days}</h4>
                    </CardContent>
                    <div className={classes.countdownLabel}>
                        days
                    </div>
                </Card>
            </Grid>
            <Grid item container xs={3} justify="flex-start">
                <Card className={classes.countdownCard}>
                    <CardContent>
                        <h4 className={classes.countdownAmt}>{hours}</h4>
                    </CardContent>
                    <div className={classes.countdownLabel}>
                        hours
                </div>
                </Card>
            </Grid>
            <Grid item container xs={3} justify="flex-end">
                <Card className={classes.countdownCard}>
                    <CardContent>
                        <h4 className={classes.countdownAmt}>{minutes}</h4>
                    </CardContent>
                    <div className={classes.countdownLabel}>
                        minutes
                </div>
                </Card>
            </Grid>
            <Grid item container xs={3} justify="flex-start">
                <Card className={classes.countdownCard}>
                    <CardContent>
                        <h4 className={classes.countdownAmt}>{seconds}</h4>
                    </CardContent>
                    <div className={classes.countdownLabel}>
                        seconds
                </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default function Landing(props) {
    const classes = useStyles();
    const [showVideo, setShowVideo] = React.useState(false);
    const [accessSuccess, setAccessSuccess] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);

    let email, appleid = "";

    const releaseDate = new Date('June 1, 2021');
    const currentDate = new Date();
    const released = (releaseDate < currentDate);
    let days = releaseDate.getDate() - currentDate.getDate() + 31;
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

    const handleOpenTwo = () => {
        setOpenTwo(true);
    }

    const handleCloseTwo = () => {
        setOpenTwo(false);
        setAccessSuccess(false);
        appleid = email = "";
    }


    const getAccess = (e) => {
        e.preventDefault();
        const data = { email, appleid };
        const accessRef = db.collection("beta-access").add(data);
        setAccessSuccess(true);
        setTimeout(handleCloseTwo, 1000);
    }

    const bodyTwo = (
        <div className={classes.paper}>
            <div className={classes.innerContact}>
                <Typography align="center" variant="h4"> Submit your Apple ID to request beta access today:</Typography>
                <form className={classes.contactForm} noValidate autoComplete="off">
                    <Grid item container spacing={3} className={classes.formContainer}>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.contactItem}
                                label="Email"
                                variant="filled"
                                fullWidth
                                required
                                onChange={e => (email = e.target.value)}
                                InputProps={{
                                    className: classes.multilineColor
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.label,
                                        focused: classes.focusedLabel,
                                    },
                                }}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.contactItem}
                                label="Apple ID"
                                variant="filled"
                                fullWidth
                                required
                                onChange={e => (appleid = e.target.value)}
                                InputProps={{
                                    className: classes.multilineColor
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.label,
                                        focused: classes.focusedLabel,
                                    },
                                }}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center">
                                <Button variant="contained" className={classes.betaAccess} onClick={e => getAccess(e)}>
                                    <Typography align="center" variant="h6"> Get Access </Typography>
                                </Button>
                                {accessSuccess ? <p>Early access request sent successfully!</p> : <></>}
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )

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
                                    <Button variant="outlined" onClick={handleOpenTwo}>Start Listening</Button>
                                </Grid>
                                <Grid item className={classes.buttonContainer}>
                                    <Button variant="outlined" onClick={() => setShowVideo(true)}>Demo Video</Button>
                                </Grid>
                            </Grid>
                            {
                                released ? <></> :
                                    <>
                                        <h4 className={classes.betaRelease}>Beta Version Release</h4>
                                        <Countdown initialDay={days} initialHour={hours} initialMinute={mins} initialSeconds={secs}></Countdown>
                                    </>
                            }
                        </Box>

                    </Slide>
                </Grid>
                <Grid item md={6}>
                    <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                        <Box className={classes.phoneContainer}>
                            <Button onClick={() => setShowVideo(true)}>
                                <img src={phoneplayer} className={classes.phonePlayer}></img>
                            </Button>
                        </Box>
                    </Slide>

                </Grid>
                <Grid item md={6} show={showVideo}>

                </Grid>
            </Grid>
            <Modal
                open={openTwo}
                onClose={handleCloseTwo}
                BackdropProps={{
                    className: classes.contactBackdrop
                }}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                className={classes.modal}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                {bodyTwo}
            </Modal>
            <Modal
                open={showVideo}
                onClose={() => setShowVideo(false)}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <iframe width="315" height="560" src="https://www.youtube.com/embed/BSWNNHz7kLA" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* galen's video https://www.youtube.com/embed/Srjep8wa-I4 */}
            </Modal>
        </Grid>

    )
}