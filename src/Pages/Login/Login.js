import React from 'react';
import './Login.css';
import logo from '../../logo-trans.png'

class Login extends React.Component{
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
        <div className="container-login">
        <div className="wrap-login">
            <form className="login-form">
                <span className="login-form-title">Login</span>
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
                <div className="container-login-form-btn">
                    <button className="login-form-btn">Sign In</button>
                </div>
                <div style={{width:'100%',textAlign:'center', paddingTop:'55px'}}>
                    <span style={{fontSize:'16px',lineHeight:'1.5',color:'#999999'}}>Not a member?</span>
                    <a href="#signupt" style={{fontSize:'16px',lineHeight:'1.5',color:'#999999',borderBottom:'1px solid #999999'}}> Sign Up</a>
                </div>
            </form>
        </div>
    </div>
       );
    }
}

export default Login;