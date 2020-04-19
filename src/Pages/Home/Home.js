import React from 'react';
import './Home.css';
import SearchBox from '../../Components/SearchBox';
import PopularLandmark from './PopularLandmark';
import PopularDestination from './PopularDestination';
import PackageJumbo from './PackageJumbo';
import Testimony from './Testimony';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <SearchBox />
        <PopularDestination/>
        <PopularLandmark/>
        <PackageJumbo/>
        <Testimony/>
            </div>
        )
    }
}

export default Home;