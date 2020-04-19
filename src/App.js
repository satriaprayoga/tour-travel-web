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
              <Route path="/booking" component={BookingPackage}></Route>
              <Route exact path="/" component={Home}/>
        </Switch>
        <AppFooter/>
      </div>
    );
  }
}



export default withRouter(App);
