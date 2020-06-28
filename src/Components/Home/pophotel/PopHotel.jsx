import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


const PopHotel = (props) => {
    return (
            <div className="hobox">
                <Link to="#">
                <img className="hofoto" src={props.data.url} />
                <div className="hoicon">
                    <h2 className="hotitle">{props.data.title}</h2>
                </div>
                <div className="hocontent">
                    <p className="hotxt"></p>
                </div>
                </Link>
            </div>
    );
}

export default PopHotel;