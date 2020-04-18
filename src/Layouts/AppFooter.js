import React from 'react';
import './AppFooter.css';
import logo from '../logo-trans.png';//'../logo.svg';

class AppFooter extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="app-footer">
                <div class="d-flex flex-row justify-content-around">
                    <div class="d-flex flex-column">
                        <div class="p-2">
                            <img src={logo}
                                width="210"
                                height="100"
                                className="d-inline-block align-top"
                                alt="Infosys Logo" />
                        </div>
                        
                    </div>
                    <div class="d-flex flex-column">
                        <div class="p-2"><h3>Useful Link</h3></div>
                        <div class="p-2" style={{marginLeft:"50px"}}><h4>About Us</h4></div>
                        <div class="p-2"style={{marginLeft:"50px"}}><h4>FAQ</h4></div>
                    </div>
                    <div class="d-flex flex-column">
                    <div class="p-2 mr-auto" style={{whiteSpace:"nowrap",overflow:"hidden"}}><h3>Contact With Us</h3></div>
                        <div class="p-2" style={{marginLeft:"50px"}}><h4>021-XXXXXXX</h4></div>
                        <div class="p-2"style={{marginLeft:"50px"}}><h4>info@infosys.com</h4></div>
                    </div>
                </div>
                <hr style={{border: '2px solid white'}}/>
                <div class="d-flex flex-row justify-content-end">
                    <span style={{margin:'20px'}}>Terms and conditions | Privacy | 2020 InfoSys</span>
                </div>
            </div>
        )
    }
}

export default AppFooter;