import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AccountSetup from './pophotel/Camper';
import Confirm from './pophotel/Glamcamp';
import SocialProfiles from './pophotel/Homestay';

import PopHotel from './pophotel/PopHotel';

//style
import './Popularhotel.css';

//services
//import API from '../services';

class PopularHotel extends Component {
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
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    continueglam = e => {
        e.preventDefault();
        this.props.nextStepglam();
    };

    continuehome = e => {
        e.preventDefault();
        this.props.nextStephome();
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
                <div className="hocontainer">

                <div className="hobox">
                <img className="hofoto" />
                <div className="hoicon">
                <Link onClick={this.continue}><h2 className="hotitle">CAMPER</h2></Link>
                </div>
                <div className="hocontent">
                    <p className="hotxt"></p>
                </div>
            </div>

            <div className="hobox">
                <img className="hofoto" />
                <div className="hoicon">
                <Link onClick={this.continueglam}><h2 className="hotitle">GLAMCAMP</h2></Link>
                </div>
                <div className="hocontent">
                    <p className="hotxt"></p>
                </div>
            </div>

            <div className="hobox">
                <img className="hofoto" />
                <div className="hoicon">
                <Link onClick={this.continuehome}><h2 className="hotitle">HOMESTAY</h2></Link>
                </div>
                <div className="hocontent">
                    <p className="hotxt"></p>
                </div>
            </div>

                </div>
            </div>
            </Fragment>
        );
    }
}

export default PopularHotel;