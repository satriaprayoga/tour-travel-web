import React, { Component, Fragment } from 'react';

//componen
import Testimonial from './testimonial/Testimonial';

//icon
import { IoIosQuote } from 'react-icons/io';

//style
import './Testimoni.css';

//services
//import API from '../services';

class Testimoni extends Component {
    state = {
        testimonial: [],
    }

    /* getPostAPI = () => {
        API.getNewTestimonial().then(result => {
            this.setState({
                testimonial: result
            })
        })
    }

    componentDidMount (){
        this.getPostAPI();
    } */

    render() {
        const testimonial=[
            { "id": 1, "name":"John Doe", "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "url": "https://placeimg.com/100/100/people/grayscale"},
            { "id": 2, "name":"Elsa", "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", "url": "https://placeimg.com/100/100/people/sepia"},
            { "id": 3, "name":"Peter Stanbridge", "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "https://placeimg.com/100/100/people"}
          ];
        return (
            <Fragment>
                <h1 className="sub">Testimonials</h1>
                    <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Alias eum, quaerat aperiam facere iste numquam.</p>
                    <div className="garis"></div>
                <div className="tbody">
                <div className="tcontainer">
                {
                    testimonial.map(t => {
                    return  <div className="tbox">
                            <div className="tcontent">
                            <IoIosQuote className="tquote"/>
                            <Testimonial key={t.id} data={t}/>
                            </div>
                            </div>
                })
                }
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Testimoni;