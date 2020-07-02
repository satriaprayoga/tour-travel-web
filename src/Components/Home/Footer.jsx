import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

//icon
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerlogo from "../../assets/logobig.png"

//style
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footer">
                <div className="innerfooter">

                <div className="footeritems">
                <Link to="/"><img className="footersatu" src={footerlogo} /></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloribus quo similique modi dolores laborum quod iure 
                    quae eligendi</p>
                </div>

                <div className="footeritems">
                <h2 className="footerdua">Quick Pages</h2>
                <div className="footerborder"></div>
                <div className="footerul">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Hotel</li></Link>
                    <Link to="/"><li>Tour & Travel</li></Link>
                    <Link to="/"><li>Investment</li></Link>
                </div>
                </div>

                <div className="footeritems">
                <h2 className="footerdua">Useful Links</h2>
                <div className="footerborder"></div>
                <div className="footerul">
                    <a href ="/searchPackages"><li>Book Now</li></a>
                    <a href ="/login"><li>Sign In</li></a>
                    <a href =""><li>About Us</li></a>
                    <a href =""><li>FAQ</li></a>
                </div>
                </div>

                <div className="footeritems">
                <h2 className="footerdua">Contact us</h2>
                <div className="footerborder"></div>
                <div className="footerul">
                    <li><i><FaMapMarkerAlt /></i>Lorem ipsum dolor sit</li>
                    <li><i><FaPhone /></i>021 - 1234567890</li>
                    <li><i><FaEnvelope /></i>Support@infosys.com</li>
                    <li><i><FaWhatsappSquare /></i>+62 123 4567 8910</li>
                </div>
                <div className="socialmedia">
                    <a href=""><i><FaFacebook /></i></a>
                    <a href=""><i><FaTwitter /></i></a>
                    <a href=""><i><FaYoutube /></i></a>
                    <a href=""><i><FaInstagram /></i></a>
                </div>
                </div>

                </div>
                <div className="footerbottom">
                    Copyright &copy; Infosys Tour & Travel 2020. All rights reserved.
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;