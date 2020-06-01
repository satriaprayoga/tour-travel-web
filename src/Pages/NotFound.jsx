import React from 'react';
import '../Pages/Register/Register.css';
import logo from '../assets/logobig.png'
import { Link } from 'react-router-dom';

const NotFound=(props)=>{
    return(
        <div className="register-container">
           <div className="register-top">
                 <Link to="/"><img className="register-logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="form-container">
                <div className="registerform-container">
                    <h1>404</h1>
                    <p>Resources Not Found</p>
                    <a className="btn btn-info" href="/">Home</a>
                </div>
                
            </div>
          
       </div>
    )
}

export default NotFound;