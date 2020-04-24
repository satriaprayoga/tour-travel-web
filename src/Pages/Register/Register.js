import React from 'react';
import './Register.css';
import logo from '../../logo-trans.png'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
    }

    render(){
       return(
        <div className="container-register">
        <div className="wrap-register">
            <form className="register-form">
                <span className="register-form-title">Register Account</span>
                <div style={{paddingTop:'31px',paddingBottom:'9px'}}>
                    <span className="txt1">Username</span>
                </div>
                <div className="wrap-input">
                    <input type="text" className="input" name="username"/>
                </div>
                <div style={{paddingTop:'31px',paddingBottom:'9px'}}>
                    <span className="txt1">Email</span>
                </div>
                <div className="wrap-input">
                    <input type="email" className="input" name="email"/>
                </div>
                <div style={{paddingTop:'31px',paddingBottom:'9px'}}>
                    <span className="txt1">Password</span>
                </div>
                <div className="wrap-input">
                    <input type="password" className="input" name="password"/>
                </div>
                <div className="container-register-form-btn">
                    <button className="register-form-btn">Sign Up</button>
                </div>
               
            </form>
        </div>
    </div>
       );
    }
}

export default Register;