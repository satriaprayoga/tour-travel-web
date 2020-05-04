import React from 'react';
import './Login.css';
import logo from '../../assets/logobig.png'

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
        <div className="login-top">
                        <img className="login-logo" src={logo} />
                    </div>
            <form className="login-form">
                <span className="txt1">Email</span>
                <div className="wrap-input">
                    <input type="email" className="input" name="email"/>
                </div>
                <span className="txt1">Password</span>
                <div className="wrap-input">
                    <input type="password" className="input" name="password"/>
                </div>
                <div className="container-login-form-btn">
                    <button className="login-form-btn">Sign In</button>
                </div>
                <div style={{width:'100%',textAlign:'center'}}>
                    <span style={{fontSize:'16px',lineHeight:'1.5',color:'#fff9f9'}}>Not a member?</span>
                    <a href="#signupt" style={{fontSize:'16px',lineHeight:'1.5',color:'#fff9f9',borderBottom:'1px solid #999999'}}> Sign Up</a>
                </div>
            </form>
        </div>
    </div>
       );
    }
}

export default Login;