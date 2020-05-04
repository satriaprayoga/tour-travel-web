import React, { Component, Fragment} from 'react';
//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Header from '../../Components/Header';
import TabComponent from '../../Components/TabComponent';
import Footer from '../../Components/Footer';

class Home extends Component {
    render() {
      return (
        <Fragment>
          <Header />
          <TabComponent />
          <Footer />
        </Fragment>
      );
    }
  }
  
  export default Home;