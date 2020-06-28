import React, { Component, Fragment } from 'react';

import PopHotel from './pophotel/PopHotel';


//style
import './Popularhotel.css';

//services
//import API from '../services';

class PopularHotel extends Component {
     state = {
         hotel: [],
     }

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

    render() {
            const hotel=[
            { "id": 1, "url": " ", "title": "CAMPER","event": "/PopularDestination"},
            { "id": 2, "url": " ", "title": "GLAMCAMP","event": "dua"},
            { "id": 3, "url": " ", "title": "HOMESTAY","event": "tiga"}
           ];
        return (
            <Fragment>
            <div>
                <h1 className="sub">Hotel</h1>
                <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias eum, quaerat aperiam facere iste numquam.</p>
                <div className="garis"></div>
                <div className="hocontainer">
                        {
                            hotel.map(ho => {
                            return  <PopHotel key={ho.id} data={ho}/>    
                        })
                        }
                </div>
            </div>
            </Fragment>
        );
    }
}

export default PopularHotel;