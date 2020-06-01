import React from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Components/Home/Footer';
import RegistrationSuccess from './Pages/Register/RegistrationSuccess';
import Activation from './Pages/Register/Activation';
import SearchPackage from './Pages/Search/SearchPackage';
import SearchResult from './Pages/Search/SearchResult';
import BookingStep from './Components/Booking/BookingStep';
import AuthService from './Services/AuthService';
import PrivateRoute from './Components/Commons/PrivateRoute';
import NotFound from './Pages/NotFound';
import SignIn from './Pages/Login/SignIn';
import BookingAvailable from './Components/Booking/BookingAvailable';
import Customer from './Pages/Customer/Customer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isAuthenticated:false,
      currentUser:{}
    }
    this.handleLogout=this.handleLogout.bind(this);
    this.loadCustomer=this.loadCustomer.bind(this);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.loadCustomer();
    },100);
  }

  loadCustomer(){
    AuthService.currentUser().then((resp)=>{
      this.setState({
        currentUser:resp.data.response,
        isAuthenticated:true
      })
      
    }).catch((error)=>{

    })
    console.log(this.state.isAuthenticated);
  }

  

  handleLogout(){
    AuthService.logout();
    this.setState({currentUser:{},isAuthenticated:false})
    this.props.history.replace(`/reload`)
    this.props.history.push("/");
  }

  isLogin(){
    return AuthService.isLogin();
  }

  render(){
    return (
      <div>
       
        <Switch>
              <Route path="/login" render={(props) => <SignIn isAuthenticated={this.isLogin()} {...props} />}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/registerSuccess/:id" component={RegistrationSuccess}></Route>
              <Route path="/activate/:id" component={Activation}></Route>
              <Route path="/searchPackages" component={SearchPackage}></Route>
              <Route path="/searchResult" render={(props) => <SearchResult  {...props} />}></Route>
              <Route path="/check" component={BookingAvailable}></Route>
              <PrivateRoute path="/booking" authenticated={this.isLogin()} component={BookingStep} currentUser={this.state.currentUser}/>
              <PrivateRoute path="/customer" authenticated={this.isLogin()} component={Customer} currentUser={this.state.currentUser}/>
              <Route path="/booking_confirm" component={Booking}></Route>
              <Redirect from='/registerSuccess/' to='/' exact />
              <Redirect from='/activate/' to='/' exact />
              <Route exact path="/" render={(props) => <Home isAuthenticated={this.isLogin()} onLogout={this.handleLogout} currentUser={this.state.currentUser} {...props} />}/>
              <Route path="/reload" component={null} key="reload" />
              <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}



export default withRouter(App);
