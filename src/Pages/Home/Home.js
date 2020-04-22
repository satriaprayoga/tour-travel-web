import React from 'react';
import './Home.css';
import SearchBox from '../../Components/SearchBox';
import PopularLandmark from './PopularLandmark';
import PopularDestination from './PopularDestination';
import PackageJumbo from './PackageJumbo';
import Testimony from './Testimony';
import { Gallery } from './Gallery';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <SearchBox />
        <Gallery/>
        
        <Testimony/>
            </div>
        )
    }
}

export default Home;