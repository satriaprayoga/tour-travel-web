import React, { Component, Fragment } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

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
            { "id": 1, "url": "https://robbreportedit.files.wordpress.com/2019/05/the-nest-by-airstream.jpg?w=892", "title": "CAMPER"},
            { "id": 2, "url": "https://www.whzed.com/wp-content/uploads/2017/11/3_preview-1.jpeg", "title": "GLAMCAMP"},
            { "id": 3, "url": "https://storage.googleapis.com/finansialku_media/wordpress_media/2018/05/Tengok-Analisis-Bisnis-Penginapan-Homestay-1-Finansialku.jpg", "title": "HOMESTAY"}
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