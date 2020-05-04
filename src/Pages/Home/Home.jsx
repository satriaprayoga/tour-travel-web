import React, { Component, Fragment} from 'react';
//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Header from '../../components/Header';
import TabComponent from '../../components/TabComponent';
import Footer from '../../components/Footer';

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