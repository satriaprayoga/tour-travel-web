import React from 'react';
import './SearchPackage.css';
import logo from '../../assets/logobig.png'
import { Link } from 'react-router-dom';


class SearchPackage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            destination:"",
            landmark:"",
            group:""
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:[event.target.value]
        });
        switch(event.target.name){
            case "destination":
                console.log('destination');
                
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

    handleClick(){
      
    }

    render() {
       // const selectedDate=new Date();
        return (
            <div className="searchpackage-container">
                <div className="searchpackage-top">
                    <Link to="/"><img className="searchpackage-logo" src={logo} alt="logo" /></Link>
                </div>
               
                <div className="searchpackage-title">
                    Discover Your Destination
                </div>
                <div className="searchpackage-search">
                    <div className="search-container">
                        <div className="search-container-form">
                            <div className="searchpackage-form-container">
                                <div className="find_form">
                                        <div className="find_item">
                                            <div>Destination</div>
                                            <select className="find_select" name="destination" onChange={this.handleChange} value={this.state.destination}>
                                                <option value="" selected>Select destination</option>
                                                <option value="1" >A</option>
                                                <option value="2" >B</option>
                                            </select>
                                           
                                        </div>
                                        <div className="find_item">
                                            <div>Landmark</div>
                                            <select className="find_select" name="landmark" onChange={this.handleChange} value={this.state.landmark}>
                                                <option value="" selected>Select Landmark</option>
                                                <option value="1" >A</option>
                                                <option value="2" >B</option>
                                            </select>
                                           
                                        </div>
                                        <div className="find_item">
                                            <div>Package</div>
                                            <select className="find_select" name="group" onChange={this.handleChange} value={this.state.group}>
                                                <option value="" selected>Select Group</option>
                                                <option value="1" >A</option>
                                                <option value="2" >B</option>
                                            </select>
                                           
                                        </div>
                                        
                                        <button className="find_button" onClick={this.handleClick}>Find</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
               
            </div>
        );
    }

}

export default SearchPackage;

/*

                */