import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchNavbar from '../../Components/Booking/SearchNavbar';
import SearchResultContent from '../../Components/Booking/SearchResultContent';
import defaultImage from '../../assets/Beautifulsea.jpg';

class SearchResult extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <Fragment>
                <SearchNavbar/>
                <SearchResultContent imageUrl={defaultImage}/>
           </Fragment>
        )
    }


}

export default SearchResult;