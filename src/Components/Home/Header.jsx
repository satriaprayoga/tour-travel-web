import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import logo from '../../assets/logobig.png';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="h-container">
                    <div className="h-top">
                        <img className="h-logo" src={logo} />
                        <Link className="signIn-btn" to="/login">Sign In</Link>
                    </div>
                    <div className="h-content">
                        <h1 className="h-title">It's Time To Travel</h1>
                        <h3 className="h-subtitle">Search Over 100+ Destination Across The Country</h3>
                        <InputGroup size="lg">
                        <InputGroup.Prepend>
                            <Button variant="info"><FaSearch /></Button>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Insert the Destinations" />
                    </InputGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;