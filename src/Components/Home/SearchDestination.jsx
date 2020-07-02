import React, { Component, Fragment } from 'react';
import { InputGroup, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AccountSetup from './pophotel/Camper';
import Confirm from './pophotel/Glamcamp';
import SocialProfiles from './pophotel/Homestay';

import PopHotel from './pophotel/PopHotel';

//style
import './SearchDestination.css';

//services
//import API from '../services';

class SearchDestination extends Component {
     state = {
         hotel: [],
         tabIndex: 0
     };

   /*  getPostAPI = () => {
        API.getNewPopLandmark().then(result => {
            this.setState({
                landmark: result
            })
        })
    }

    componentDidMount (){
        this.getPostAPI();
    } */
    continuese = e => {
        e.preventDefault();
        this.props.nextStepse();
    };

    backse = e => {
        e.preventDefault();
        this.props.prevStepse();
    };

    render() {
            const hotel=[
            { "id": 1, "url": " ", "title": "CAMPER","event": "0"},
            { "id": 2, "url": " ", "title": "GLAMCAMP","event": "1"},
            { "id": 3, "url": " ", "title": "HOMESTAY","event": "2"}
           ];
        return (
            <Fragment>
            <div>
                <h1 className="sub">Hotel</h1>
                <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias eum, quaerat aperiam facere iste numquam.</p>
                <div className="garis"></div>
                <div className="secontainer">
                <InputGroup className="inputgrp">
                <Button onClick={this.continuese} className="btnsearch" variant="info"><FaSearch /></Button>
                <FormControl className="searchform" aria-label="Large" aria-describedby="inputGroup-sizing-lg" placeholder="Insert the Destinations" />
                </InputGroup>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default SearchDestination;