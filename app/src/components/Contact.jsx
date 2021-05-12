import React from "react";
import '../styles/Contact.css';
import { Typography, Button, Modal, makeStyles, TextField, Grid } from '@material-ui/core';
import { useState } from 'react';
import popupImage from '../assets/ContactPopUp.png';
import Axios from "axios";
import { db } from "../firestore.js";

const useStyles = makeStyles(theme => ({
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
            top: `250px`,
            marginLeft: `-50vw`,
            backgroundSize: `cover`
        }
    },
    contactPaper: {
        [theme.breakpoints.down('sm')]: {
            width: `100%`,
            maxWidth: `100vw`,
            top: `250px`,
            height: `80vh`,
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
    contactButton: {
        marginTop: '28px'
    },
    betaAccess: {
        backgroundColor: '#0A0A11',
        "&:hover, &:focus": {
            backgroundColor: '#0A0A11 !important',
        },
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
}));

// import cImage from '../assets/contact-revised.png';
export default function Contact(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [accessSuccess, setAccessSuccess] = useState(false);
    let appleid, fname, lname, email, phone, message = "";

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setEmailSuccess(false);
        fname = lname = email = phone = message = "";
    }

    const handleOpenTwo = () => {
        setOpenTwo(true);
    }

    const handleCloseTwo = () => {
        setOpenTwo(false);
        setAccessSuccess(false);
        appleid = email = "";
    }

    const sendMessage = (e) => {
        e.preventDefault();
        const name = fname + " " + lname;
        const fnurl = "https://us-central1-aux-collab.cloudfunctions.net/sendEmail";
        Axios.post(
            fnurl,
            {
                name,
                email,
                phone,
                message
            },
        ).then(res => {
            setEmailSuccess(res.data.isEmailSend);
            setTimeout(handleClose, 1000);
        }).catch();
    }

    const getAccess = (e) => {
        e.preventDefault();
        const data = { email, appleid };
        const accessRef = db.collection("beta-access").add(data);
        setAccessSuccess(true);
        setTimeout(handleCloseTwo, 1000);
    }

    const body = (
        <div className={`${classes.paper} ${classes.contactPaper}`}>
            <div className={classes.innerContact}>
                <Typography align="center" variant="h4"> Contact Us</Typography>
                <form className={classes.contactForm} noValidate autoComplete="off">
                    <Grid item container spacing={2} justify="center" className={classes.formContainer}>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                className={classes.contactItem}
                                label="First Name"
                                variant="filled"
                                required
                                fullWidth
                                onChange={e => (fname = e.target.value)}
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
                        <Grid item sm={6} xs={12}>
                            <TextField
                                className={classes.contactItem}
                                label="Last Name"
                                variant="filled"
                                required
                                fullWidth
                                onChange={e => (lname = e.target.value)}
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
                        <Grid item sm={6} xs={12}>
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
                        <Grid item sm={6} xs={12}>
                            <TextField
                                className={classes.contactItem}
                                label="Phone Number"
                                variant="filled"
                                fullWidth
                                onChange={e => (phone = e.target.value)}
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
                                label="Message"
                                variant="filled"
                                required
                                fullWidth
                                multiline
                                onChange={e => (message = e.target.value)}
                                rows={5}
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
                        <Grid item md={12}>
                            <Typography align="center">
                                <Button variant="contained" className={classes.submitBtn} onClick={(e) => sendMessage(e)}>
                                    <Typography align="center" variant="h6"> Send Message </Typography>
                                </Button>
                                {emailSuccess ? <p>Sent successfully!</p> : <></>}
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
    const bodyTwo = (
        <div className={classes.paper}>
            <div className={classes.innerContact}>
                <Typography align="center" variant="h4"> Submit your Apple ID to request beta access today:</Typography>
                <form className={classes.contactForm} noValidate autoComplete="off">
                    <Grid item container spacing={3} justify="center" className={classes.formContainer}>
                        <Grid item md={12}>
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
                        <Grid item md={12}>
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
                        <Grid item md={12}>
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
        <div className="contactWrapper" id="4">
            <Grid item container justify="center">
                <Typography align="center" variant="h2" className="contactHeader">
                    Try Aux Yourself
                    </Typography>
            </Grid>
            <Grid item container direction="row" style={{ padding: 0, margin: 0 }}>
                <Grid item container sm={6} xs={12} justify="center" >
                    <Button variant="contained" className={classes.betaAccess} onClick={handleOpen}>
                        <Typography align="center" variant="h6"> Contact </Typography>
                    </Button>
                </Grid>

                <Grid item container sm={6} xs={12} justify="center" >
                    <Typography align="center">
                        <Button variant="contained" onClick={handleOpenTwo} className={classes.betaAccess}>
                            <Typography align="center" variant="h6"> Request Beta Access </Typography>
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{
                    className: classes.contactBackdrop
                }}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                className={classes.modal}
            >
                {body}
            </Modal>

            <Modal
                open={openTwo}
                onClose={handleCloseTwo}
                BackdropProps={{
                    className: classes.contactBackdrop
                }}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                className={classes.modal}
            >
                {bodyTwo}
            </Modal>
        </div>
    )
}