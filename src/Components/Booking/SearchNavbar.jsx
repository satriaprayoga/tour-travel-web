import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../assets/logobig.png'
import './SearchNavbar.css'
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

class SearchNavbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
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
                <Link href="/login" className="signin-button">Sign In</Link>,
            ];
        }
        return (
            <header>
                <Navbar collapseOnSelect expand="lg" fixed="top">
                    <Navbar.Brand href="/">
                        <img src={logo}
                            width="183"
                            height="80"
                            className="d-inline-block align-top"
                            alt="Infosys Logo" />
                    </Navbar.Brand>
                    <div className="find-container">
                        <div className="find_item">
                        <select className="find_select" name="destination">
                                        <option value="" selected>Select destination</option>
                                        <option value="1" >A</option>
                                        <option value="2" >B</option>
                                    </select>
                        </div>
                        <div className="find_item">
                        <select className="find_select" name="destination">
                                        <option value="" selected>Select destination</option>
                                        <option value="1" >A</option>
                                        <option value="2" >B</option>
                                    </select>
                        </div>
                        <div className="find_item">
                        <select className="find_select" name="destination">
                                        <option value="" selected>Select destination</option>
                                        <option value="1" >A</option>
                                        <option value="2" >B</option>
                                    </select>
                        </div>
                        <Button className="find-button">Find</Button>
                        
                    </div>
                   
                    <Nav>
                    {navLinks}
                    </Nav>
                       
                    
                </Navbar>
            </header>
        )
    }

    
}

export default SearchNavbar;