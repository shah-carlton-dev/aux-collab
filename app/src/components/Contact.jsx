import React from "react";
import '../styles/Contact.css';
import { Typography, Button, Modal, makeStyles, TextField, Grid} from '@material-ui/core';
import { useState } from 'react';
import popupImage from '../assets/ContactPopUp.png';

const useStyles = makeStyles(() => ({
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
        borderRadius: '20px'
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
    multilineColor:{
        color:'white'
    },
    label: {
        color:'white'
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
    }
}));

// import cImage from '../assets/contact-revised.png';
export default function Contact(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const body = (
        <div className={classes.paper}>
            <div className={classes.innerContact}>
                <Typography align="center" variant="h4"> Contact Us</Typography>
                <form className={classes.contactForm} noValidate autoComplete="off">
                    <Grid item container spacing={2}>
                        <Grid item md={6}>
                            <TextField 
                                className={classes.contactItem} 
                                label="First Name" 
                                variant="filled"
                                required
                                fullWidth
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
                        <Grid item md={6}>
                            <TextField 
                                className={classes.contactItem} 
                                label="First Name" 
                                variant="filled"
                                required
                                fullWidth
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
                        <Grid item md={6}>
                            <TextField 
                                className={classes.contactItem} 
                                label="Email" 
                                variant="filled"
                                fullWidth
                                required
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
                        <Grid item md={6}>
                            <TextField 
                                className={classes.contactItem} 
                                label="Phone Number" 
                                variant="filled"
                                fullWidth
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
                                label="Message" 
                                variant="filled"
                                required
                                fullWidth
                                multiline
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
                                <Button variant="contained" className={classes.submitBtn}>
                                    <Typography align="center" variant="h6"> Send Message </Typography>
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>      
                </form>
            </div>
        </div>
    )
    return (
        <div className="contactWrapper">
            <Typography align="center" variant="h2" className="contactHeader">
                Questions? We're listening
                <Button className="contactButton" variant="contained" onClick={handleOpen}>
                    <Typography align="center" variant="h4"> Contact </Typography>
                </Button>
            </Typography>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{
                    className: classes.contactBackdrop
                }}
            >
                {body}
            </Modal>
        </div>
    )
}