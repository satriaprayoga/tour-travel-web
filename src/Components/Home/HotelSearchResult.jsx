import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//style
import './HotelSearchResult.css';
import HotelService from '../../Services/HotelService';
import DestinationService from '../../Services/DestinationService';

//services
//import API from '../services';

class HotelSearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: {},
            hotelTypes: []
        }
        this.getPostAPI = this.getPostAPI.bind(this);
    }

    getPostAPI = () => {
        const selectedDest = localStorage.getItem('destCode');
        console.log(selectedDest);
        DestinationService.destinationByCode(selectedDest).then(resp => {
            this.setState({ destination: resp.data });
        })
        HotelService.hotelAggregateDestination(selectedDest).then(resp => {
            console.log(resp.data);
            this.setState({ hotelTypes: Object.entries(resp.data) });
            console.log(this.state.hotelTypes);
        });
    }

    componentDidMount() {
        this.getPostAPI();
    }
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

    continuese = e => {
        e.preventDefault();
        this.props.nextStepse();
    };

    render() {
        const hotel = [
            { "id": 1, "url": " ", "title": "CAMPER", "event": "0" },
            { "id": 2, "url": " ", "title": "GLAMCAMP", "event": "1" },
            { "id": 3, "url": " ", "title": "HOMESTAY", "event": "2" }
        ];
        // const destination=localStorage.getItem('destination');
       
        return (
            <Fragment>
                <div>
                    <h1 className="sub">{this.state.destination.destination}</h1>
                    <p className="sub-text">{this.state.destination.location}</p>
                    <div className="garis"></div>
                    <div className="hocontainer">
                        {
                            this.state.hotelTypes.map((t) => (
                                t[1].length>0 && 
                                <div className="hobox">
                                    <img className="hofoto" />
                                    <div className="hoicon">
                                        <Link onClick={(e) => {
                                            this.continue(e);
                                            localStorage.setItem('hgroup', t[0])
                                        }}><h2 className="hotitle">{t[0]}</h2></Link>
                                    </div>
                                    <div className="hocontent">
                                        <p className="hotxt"></p>
                                    </div>
                                </div>
                            ))
                        }
                        {/* <div className="hobox">
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
                        </div> */}

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HotelSearchResult;