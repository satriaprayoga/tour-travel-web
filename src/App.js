import React from 'react';
import './App.css';
import AppNavbar from './Layouts/AppNavbar';
import SearchBox from './Components/SearchBox';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import PopularDestination from './Pages/Home/PopularDestination';
import PopularLandmark from './Pages/Home/PopularLandmark';
import PackageJumbo from './Pages/Home/PackageJumbo';
import Testimony from './Pages/Home/Testimony';
import AppFooter from './Layouts/AppFooter';
import BookingPackage from './Pages/Search/BookingPackage';
import { withRouter, Switch, Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import BookingNavbar from './Layouts/Booking/BookingNavbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Pages/Home/Footer';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <AppNavbar />
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
