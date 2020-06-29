import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


const PopHotel = (props) => {
    return (
            <div className="hobox">
                <img className="hofoto" src={props.data.url} />
                <div className="hoicon">
                    <h2 className="hotitle">{props.data.title}</h2>
                </div>
                <div className="hocontent">
                    <p className="hotxt"></p>
                </div>
            </div>
    );
}

export default PopHotel;