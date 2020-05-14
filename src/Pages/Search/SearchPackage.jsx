import React from 'react';
import './SearchPackage.css';
import logo from '../../assets/logobig.png'
import { Link } from 'react-router-dom';
import SearchForm from '../../Components/Booking/SearchForm';


class SearchPackage extends React.Component {
    constructor(props) {
        super(props);
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
                <SearchForm/>
                
               
            </div>
        );
    }

}

export default SearchPackage;

/*

                */