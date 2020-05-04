import React from 'react';
import './App.css';
import AppNavbar from './Layouts/AppNavbar';
import BookingPackage from './Pages/Search/BookingPackage';
import { withRouter, Switch, Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
       
        <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/booking" component={BookingPackage}></Route>
              <Route path="/booking_confirm" component={Booking}></Route>
              <Route exact path="/" component={Home}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}



export default withRouter(App);
