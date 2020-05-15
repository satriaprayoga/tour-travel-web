import React, { Fragment } from 'react';
import { Button, Dropdown, Navbar, Nav } from 'react-bootstrap';
import './AppNavbar.css';
import logo from '../../assets/logobig.png'
import { FiUser, FiSettings, FiLogOut, FiBookmark } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class AppNavbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let dropDownMenu;
        if(this.props.currentUser){
            dropDownMenu=(
                <Dropdown className="dropdown-btn">
                <Dropdown.Toggle id="dropdown-basic">
                   <FiUser></FiUser>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><FiSettings></FiSettings><span>User Setting</span></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><FiBookmark></FiBookmark><span>My Booking</span></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3"><FiLogOut></FiLogOut><span>Sign Out</span></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            )
        }
        return (
            <header>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="/">
                        <img src={logo}
                            width="183"
                            height="80"
                            className="d-inline-block align-top"
                            alt="Infosys Logo" />
                    </Navbar.Brand>
                   
                    <Nav className="mr-auto">
                        {this.props.isAuthenticated ?<Fragment >{dropDownMenu}</Fragment> : <Link className="signin-button" to="/login">Sign In</Link>}
                    </Nav>
                       
                    
                </Navbar>
            </header>
        )
    }
}

export default AppNavbar;