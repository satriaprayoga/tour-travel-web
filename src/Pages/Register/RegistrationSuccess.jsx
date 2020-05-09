import React from "react";
import './Register.css';
import logo from '../../assets/logobig.png'
import axios from "axios";
import { Link } from "react-router-dom";

class RegistrationSuccess extends React.Component{
    constructor(props){
        super(props);
        this.state={
            customer:{}
        }
    }
    // componentDidMount(){
    //     axios.get(`http://localhost:5555/infosys-webclient/auth/success/${this.props.match.params.id}`).then((resp)=>{
    //        this.setState({
    //            customer:resp.data.response
    //        })
    //     })
    // }
    render(){
        return(
            <div className="register-container">
                <div className="register-top">
                     <Link to="/"><img className="register-logo" src={logo} alt="logo" /></Link>
                </div>
                <div className="form-container">
                    <div className="registerform-container">
                        <h1>Hi, User</h1>
                    </div>
                </div>
            </div>
         )
    }
}

export default RegistrationSuccess;