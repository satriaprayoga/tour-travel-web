import React, { Component, Fragment } from 'react';

import PopLandmark from './poplandmark/PopLandmark';

//style
import './PopularLandmark.css';

//services
//import API from '../services';

class PopularLandmark extends Component {
    state = {
        landmark: [],
    }

   /*  getPostAPI = () => {
        API.getNewPopLandmark().then(result => {
            this.setState({
                landmark: result
            })
        })
    }

    componentDidMount (){
        this.getPostAPI();
    } */

    render() {
        const landmark=[
            { "id": 1, "url": "https://picsum.photos/id/13/600/600", "title": "Lorem ipsum dolor sit amet"},
            { "id": 2, "url": "https://picsum.photos/id/1083/600/600", "title": "Lorem ipsum dolor sit amet"},
            { "id": 3, "url": "https://picsum.photos/id/368/600/600", "title": "Lorem ipsum dolor sit amet"},
            { "id": 4, "url": "https://picsum.photos/id/241/600/600", "title": "Lorem ipsum dolor sit amet"},
            { "id": 5, "url": "https://picsum.photos/id/166/600/600", "title": "Lorem ipsum dolor sit amet"},
            { "id": 6, "url": "https://picsum.photos/id/168/600/600", "title": "Lorem ipsum dolor sit amet"},
            { "id": 7, "url": "https://picsum.photos/id/179/600/600", "title": "Lorem ipsum dolor sit amet"},
            { "id": 8, "url": "https://picsum.photos/id/386/600/600", "title": "Lorem ipsum dolor sit amet"}
          ];
        return (
            <Fragment>
                <div className="pl-body">
                    <h1 className="sub">Popular Landmarks</h1>
                    <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Alias eum, quaerat aperiam facere iste numquam.</p>
                    <div className="garis"></div>
                    <div className="pl-container">
                        {
                            landmark.map(l => {
                            return  <PopLandmark key={l.id} data={l}/>    
                        })
                        }
                    </div>    
                </div>
            </Fragment>
        );
    }
}

export default PopularLandmark;