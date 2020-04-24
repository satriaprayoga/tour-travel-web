import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../logo.jpeg';//'../logo.svg';
import './BookingNavbar.css';

class BookingNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let navLinks;
        if (this.props.currentUser) {
            navLinks = [
                <Nav.Link eventKey={2} href="#profile" className="signin">
                    Profile
                </Nav.Link>,
                <Nav.Link eventKey={3} href="#logout" className="createAccount">
                    Logout
                </Nav.Link>
            ];
        } else {
            navLinks = [
                <Nav.Link eventKey={2} href="#signin" className="signin">
                    Sign In
                </Nav.Link>,
                <Nav.Link eventKey={3} href="#createAccount" className="createAccount">
                    Create Account
                </Nav.Link>
            ];
        }
        return (
            <header>
                <Navbar bg="light" collapseOnSelect expand="lg" fixed="top">
                    <Navbar.Brand href="/">
                        <img src={logo}
                            width="183"
                            height="80"
                            className="d-inline-block align-top"
                            alt="Infosys Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="v-divider"> </div>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Destinations</Nav.Link>
                            <Nav.Link href="#link">Package</Nav.Link>
                            <Nav.Link href="#about">About Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/booking" className="booknow">Book Now</Nav.Link>
                            <div className="v-divider"> </div>
                            {
                                navLinks
                            }
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </header>
        )
    }
}
export default BookingNavbar;