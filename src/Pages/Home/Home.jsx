import React, { Component, Fragment} from 'react';
//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Header from '../../Components/Home/Header';
import TabComponent from '../../Components/Home/TabComponent';
import Footer from '../../Components/Home/Footer';

class Home extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <Fragment>
           <Header isAuthenticated={this.props.isAuthenticated} onLogout={this.props.onLogout} currentUser={this.props.currentUser}/>
          <TabComponent />
        </Fragment>
      );
    }
  }
  
  export default Home;