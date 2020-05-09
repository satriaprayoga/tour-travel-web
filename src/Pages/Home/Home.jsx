import React, { Component, Fragment} from 'react';
//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Header from '../../Components/Home/Header';
import TabComponent from '../../Components/Home/TabComponent';
import Footer from '../../Components/Home/Footer';

class Home extends Component {
    render() {
      return (
        <Fragment>
           <Header isAuthenticated={false}/>
          <TabComponent />
        </Fragment>
      );
    }
  }
  
  export default Home;