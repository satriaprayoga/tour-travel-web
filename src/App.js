import React from 'react';
import './App.css';
import AppNavbar from './Layouts/AppNavbar';
import BookingPackage from './Pages/Search/BookingPackage';
import { withRouter, Switch, Router, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import RegistrationSuccess from './Pages/Register/RegistrationSuccess';
import Activation from './Pages/Register/Activation';
import SearchPackage from './Pages/Search/SearchPackage';
import SearchResult from './Pages/Search/SearchResult';
import BookingStep from './Components/Booking/BookingStep';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isAuthenticated:false,
      currentUser:{}
    }
  }

  render(){
    return (
      <div>
       
        <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/registerSuccess/:id" component={RegistrationSuccess}></Route>
              <Route path="/activate/:id" component={Activation}></Route>
              <Route path="/searchPackages" component={SearchPackage}></Route>
              <Route path="/searchResult" component={SearchResult}></Route>
              <Route path="/booking" component={BookingStep}></Route>
              <Route path="/booking_confirm" component={Booking}></Route>
              <Redirect from='/registerSuccess/' to='/' exact />
              <Redirect from='/activate/' to='/' exact />
              <Route exact path="/" component={Home}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}



export default withRouter(App);
