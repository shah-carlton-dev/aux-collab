import React from "react";
import '../styles/Contact.css';
import {Typography, Button} from '@material-ui/core';
// import cImage from '../assets/contact-revised.png';
export default function Contact (props) {
    return (
    <div className="contactWrapper">
        <Typography align="center" variant="h2" className="contactHeader">
            Questions? We're listening 
            <Button className="contactButton" variant="contained">
                <Typography align="center" variant="h4"> Contact </Typography>
            </Button>
        </Typography>
    </div>
    )
}