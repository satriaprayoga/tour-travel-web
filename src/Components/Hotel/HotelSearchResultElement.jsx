import React from 'react';
import './HotelSearchResultElement.css';
import BookingService from '../../Services/BookingService'
import { Button } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

const HotelSearchResultElement = (props) => {
    function handleClick(){
        props.history.push(`/booking/?id=${props.data.id}`)
        BookingService.setStatus("create")
    }
    return (
        <div className="search-element-container">
            <div className="search-element-inner">
                <div className="search-element-item">
                    <img className="search-element-item-img" src={props.data.imageUrl} />

                </div>
                <div className="search-element-item">
                    <h1 className="search-element-item-name">{props.data.name}</h1>
                    <h2 className="search-element-item-destination">{props.data.hotelGroup}</h2>
                </div>
                <div className="search-element-item">
                    <h1 className="search-element-item-name">Start From</h1>
                    <h2 className="search-element-item-price">{props.data.price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                    })} / {props.data.unit}</h2>
                    <div className="search-element-button-item">
                        <Button className="search-element-button-book" onClick={handleClick}>Book Now</Button>
                        <Button className="search-element-button-detail">Detail</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default withRouter(HotelSearchResultElement);