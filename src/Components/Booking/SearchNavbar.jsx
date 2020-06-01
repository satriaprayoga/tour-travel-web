import React, { Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import logo from '../../assets/logobig.png'
import './SearchNavbar.css'
import SearchForm from './SearchForm';
import { Link, withRouter } from 'react-router-dom';
import { FiUser, FiSettings, FiBookmark, FiLogOut } from 'react-icons/fi';
import DestinationService from '../../Services/DestinationService';

class SearchNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: "",
            landmark: "",
            group: "",
            destinations: [],
            landmarks: [],
            enable:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.loadDestinations = this.loadDestinations.bind(this);
    }
    componentDidMount() {
        this.loadDestinations();
    }

    loadDestinations() {
        DestinationService.all().then((resp) => {
            this.setState({
                destinations: resp.data
            })
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: [event.target.value]
        });
        switch (event.target.name) {
            case "destination":
                console.log(event.target.value);
                DestinationService.landmarkByDestCode(event.target.value).then((resp) => {
                    this.setState({
                        landmarks: resp.data,
                        enable:true
                    })
                })
                break;
            case "landmark":
                console.log('landmark');
                break;
            case 'group':
                console.log('group');
            default:
                break;
        }

    }

    handleClick() {
        const { destination, landmark, group } = this.state;
        const dest = destination === '' ? '' : 'dest=' + destination;
        const l = landmark === '' ? '' : '&l=' + landmark;
        const g = group === '' ? '' : '&g=' + group;
        const queryString = `${dest}${l}${g}`;
        console.log(queryString);
        const current = this.props.location.pathname;
        this.props.history.replace(`/reload`);
        setTimeout(() => {
            this.props.history.replace(`/searchResult?${queryString}`);
        });
    
        //this.props.history.push(`/searchResult?${queryString}`);
        //this.props.history.push(`/searchResult?dest=${this.state.destination}&l=${this.state.landmark}&g=${this.state.group}`)
    }

render() {

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" fixed="top">

                <div className="find-container">
                    <div className="find_item">
                        <select className="find_select" name="destination" onChange={this.handleChange} value={this.state.destination}>
                            <option value="" selected>Select destination</option>
                            {
                                this.state.destinations.map((d) => (
                                    <option value={d.code} >{d.destination}</option>

                                ))
                            }
                        </select>
                    </div>
                    <div className="find_item">
                        <select className="find_select" name="landmark" onChange={this.handleChange} value={this.state.landmark}>
                            <option value="" selected>Select Landmark</option>
                            {
                                this.state.landmarks.map((l) => (
                                    <option value={l.landmark}>{l.landmark}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="find_item">
                        <select className="find_select" name="group" onChange={this.handleChange} value={this.state.group}>
                            <option value="" selected>Select Group</option>
                            <option value="Paket Hemat" >Paket Hemat</option>
                            <option value="Paket Family" >Paket Family</option>
                        </select>
                    </div>
                    <Button className="find-button" onClick={this.handleClick} disabled={!this.state.enable}>Find</Button>

                </div>


            </Navbar>
        </header>
    )
}


}

export default withRouter(SearchNavbar);