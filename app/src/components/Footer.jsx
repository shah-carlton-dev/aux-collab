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
            <div className="footer-wrapper">
                <div className="logo-row">
                    <div className="logo-column">
                        <a href="https://www.facebook.com/AuxTunes/" target="_blank">
                            <img src={fb} alt="facebook" className="ft-img" />
                        </a>
                    </div>
                    <div className="logo-column">
                        <a href="https://instagram.com/aux.ai?utm_medium=copy_link" target="_blank">
                            <img src={insta} alt="instagram" className="ft-img" />
                        </a>
                    </div>
                    <div className="logo-column-mid">
                        <img src={logo} alt="aux logo" className="ft-img-main" />
                    </div>
                    <div className="logo-column">
                        <a href="https://www.linkedin.com/company/aux-inc" target="_blank">
                            <img src={linkedIn} alt="linkedIn" className="ft-img" />
                        </a>
                    </div>
                    <div className="logo-column">
                        <a href="https://twitter.com/aux_ai?s=21" target="_blank">
                            <img src={twitter} alt="twitter" className="ft-img" />
                        </a>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Footer;