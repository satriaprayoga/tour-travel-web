import React from 'react';
import './Home.css';
import SearchBox from '../../Components/SearchBox';
import PopularLandmark from './PopularLandmark';
import PopularDestination from './PopularDestination';
import PackageJumbo from './PackageJumbo';
import Testimony from './Testimony';
import { Gallery } from './Gallery';
import Testimonial from './testimonial/Testimonial';
import Testimoni from './Testimoni';
class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <SearchBox />
        <Gallery/>
        
        <Testimoni/>
            </div>
        )
    }
}

export default Home;