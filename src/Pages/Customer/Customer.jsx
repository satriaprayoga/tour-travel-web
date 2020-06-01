import React from 'react';
import './Customer.css';
import logo from '../../assets/logobig.png'
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import CustomerBooking from '../../Components/Profile/CustomerBooking';
import AuthService from '../../Services/AuthService';
import NotFound from '../NotFound';

class Customer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            comp:null
        }
        this.handleSearchPackages=this.handleSearchPackages.bind(this);
    }

    handleSearchPackages(){
        this.props.history.push('/searchPackages');
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.location.pathname===`${nextProps.match.path}/bookings`){
            this.setState({
                comp:<CustomerBooking customer={nextProps.currentUser} searchPackages={this.handleSearchPackages}/>
            })
            console.log(nextProps.match);
            console.log(nextProps.location.pathname);
        }else{
            this.setState({
                comp:<NotFound/>
            })
        }
    }

    render(){
        return (
            <div className="customer-container">
                <div className="customer-top">
                     <Link to="/"><img className="login-logo" src={logo} alt="logo" /></Link>
                </div>
                <div className="form-container">
                {this.state.comp}
               {/*  <Route path="/bookings" render={(props)=><CustomerBooking currentUser={this.props.currentUser} {...props}/>}></Route> */}
                </div>
            </div>
         )
        
    }

   
}

export default withRouter(Customer);