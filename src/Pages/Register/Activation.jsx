import React, { useState, useEffect } from "react";
import './Register.css';
import axios from "axios";
import logo from '../../assets/logobig.png'
import AuthService from "../../Services/AuthService";
import { Link } from "react-router-dom";
import {BASE_URL,BASE_PORT} from '../../Constants';

class Activation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            id:'',
            key:''
        }
    }
    componentDidMount(){
        axios.get(`${BASE_URL}:${BASE_PORT}/infosys-webclient/auth/success/${this.props.match.params.id}/`).then((resp)=>{
           this.setState({
              username:resp.data.response.username,
              id:resp.data.response.id,
              key:resp.data.response.activationKey
           })
           AuthService.activate({
               id:this.state.id,
               key:this.state.key
           }).then((resp)=>{
               console.log(resp.data);
           })
        });
        console.log(this.state);
       
    }
    render(){
        return(
            <div className="register-container">
               <div className="register-top">
                     <Link to="/"><img className="register-logo" src={logo} alt="logo" /></Link>
                </div>
                <div className="form-container">
                    <div className="registerform-container">
                        <h1>Hi, {this.state.username}</h1>
                        <p>Your Account now is active, please Signin to continue</p>
                        <a className="btn btn-info" href="/login">Sign In</a>
                    </div>
                    
                </div>
              
           </div>
        )
    }
}


export default Activation;