import React from 'react'
import logo from '../assets/actual-aux-logo.png';
import fb from '../assets/aux-facebook.png';
import insta from '../assets/aux-insta.png';
import linkedIn from '../assets/aux-linkedIn.png';
import twitter from '../assets/aux-twitter.png';
import '../styles/Footer.css';
const Footer = () => {

    return (
        <React.Fragment>
            <div class="footer-wrapper">
                <div class="logo-row">
                    <div class="logo-column">
                        <a href="http://www.google.com" target="_blank">
                            <img src={fb} alt="facebook" className="ft-img" />
                        </a>
                    </div>
                    <div class="logo-column">
                        <a href="http://www.google.com" target="_blank">
                            <img src={insta} alt="instagram" className="ft-img" />
                        </a>
                    </div>
                    <div class="logo-column-mid">
                        <img src={logo} alt="aux logo" className="ft-img-main" />
                    </div>
                    <div class="logo-column">
                        <a href="http://www.google.com" target="_blank">
                            <img src={linkedIn} alt="facebook" className="ft-img" />
                        </a>
                    </div>
                    <div class="logo-column">
                        <a href="http://www.google.com" target="_blank">
                            <img src={twitter} alt="twitter" className="ft-img" />
                        </a>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Footer;