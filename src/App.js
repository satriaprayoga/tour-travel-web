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

function App() {
  
  return (
    <div>
      <AppNavbar />
      <SearchBox />
      <PopularDestination/>
      <PopularLandmark/>
      <PackageJumbo/>
      <Testimony/>
      <AppFooter/>
    </div>
  );
}

export default App;
