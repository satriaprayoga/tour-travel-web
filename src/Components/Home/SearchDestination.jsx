import React, { Component, Fragment } from 'react';
import { InputGroup, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AccountSetup from './pophotel/Camper';
import Confirm from './pophotel/Glamcamp';
import SocialProfiles from './pophotel/Homestay';
import DestinationService from '../../Services/DestinationService';

import PopHotel from './pophotel/PopHotel';

//style
import './SearchDestination.css';

//services
//import API from '../services';

class SearchDestination extends Component {
    constructor(props){
        super(props);
        this.state={
            destination:"",
            landmark:"",
            group:"",
            destinations:[],
            landmarks:[],
            enable:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.loadDestinations=this.loadDestinations.bind(this);
    }

    componentDidMount(){
        this.loadDestinations();
    }

    loadDestinations(){
        DestinationService.all().then((resp)=>{
            this.setState({
                destinations:resp.data
            })
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]:[event.target.value]
        });
        switch(event.target.name){
            case "destination":
                localStorage.setItem("destCode",event.target.value);
               
                break;
        }

    }

    handleClick(){
        const {destination,landmark,group}=this.state;
        const dest=destination===''?'':'dest='+destination;
        const l=landmark===''?'':'&l='+landmark;
        const g=group===''?'':'&g='+group;
        const queryString=`${dest}${l}${g}`;
       // console.log(queryString);
        this.props.history.push(`/searchResult?${queryString}`);
                             //this.props.history.push(`/searchResult?dest=${this.state.destination}&l=${this.state.landmark}&g=${this.state.group}`)
      } 
    
    
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
                <select className="form-control" name="destination" onChange={this.handleChange} value={this.state.destination}>
                    <option value="" selected>Select destination</option>
                        {
                        this.state.destinations.map((d)=>(
                        <option value={d.code} >{d.destination}</option>
                                               
                        ))
                        }
                </select>
                </InputGroup>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default SearchDestination;