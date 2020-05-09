import React, { useState, useEffect } from "react";
import './Register.css';
import axios from "axios";
import AuthService from "../../Services/AuthService";

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
        axios.get(`http://localhost:5555/infosys-webclient/auth/success/${this.props.match.params.id}`).then((resp)=>{
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
            <div className="container-register">
               <div className="success-form-title">
                   <h1>Hai, {this.state.username}</h1>
                   <h3>Your account is active now, please login to continue</h3>
                   <a className="btn btn-info" href="/login">Sign In</a>
               </div>
           </div>
        )
    }
}


export default Activation;