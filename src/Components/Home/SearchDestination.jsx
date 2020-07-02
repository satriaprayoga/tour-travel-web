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
                <select className="form-control searchform" aria-label="Large" aria-describedby="inputGroup-sizing-lg" placeholder="Insert the Destinations" >
                Insert the Destinations
                <option>Destinations 1</option>
                    <option >Destinations 2</option>
                    <option >Destinations 3</option>
                    <option >Destinations 4</option>
                    <option >Destinations 5</option>
                    <option >Destinations 6</option>
                    <option >Destinations 7</option>
                    <option >Destinations 8</option>
                    <option >Destinations 9</option>
                    <option >Destinations 10</option>
                    </select>
                </InputGroup>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default SearchDestination;