import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';

import PopDestination from './popdestination/PopDestination';

//style
import './Populardestination.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//services
//import API from '../services';

class Populardestination extends Component {
    state = {
        destination: [],
    }

    /* getPostAPI = () => {
        API.getNewPopDestination().then(result => {
            this.setState({
                destination: result
            })
        })
    }

    componentDidMount (){
        this.getPostAPI();
    }
 */

    render() {
        const destination=[
          { "id": 1, "url": "https://picsum.photos/id/251/600/600", "title": "Lorem ipsum dolor sit amet"},
          { "id": 2, "url": "https://picsum.photos/id/296/600/600", "title": "Lorem ipsum dolor sit amet"},
          { "id": 3, "url": "https://picsum.photos/id/1018/600/600", "title": "Lorem ipsum dolor sit amet"},
          { "id": 4, "url": "https://picsum.photos/id/1028/600/600", "title": "Lorem ipsum dolor sit amet"},
          { "id": 5, "url": "https://picsum.photos/id/249/600/600", "title": "Lorem ipsum dolor sit amet"},
          { "id": 6, "url": "https://picsum.photos/id/1049/600/600", "title": "Lorem ipsum dolor sit amet"},
          { "id": 7, "url": "https://picsum.photos/id/1057/600/600", "title": "Lorem ipsum dolor sit amet"},
          { "id": 8, "url": "https://picsum.photos/id/108/600/600", "title": "Lorem ipsum dolor sit amet"}
        ];
        var settings = {
            dots: true,
            infinite: true,
            width: 100,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1049,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 727,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 524,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Fragment>
                <div className="pd-body">
                    <h1 className="sub">Investment</h1>
                    <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Alias eum, quaerat aperiam facere iste numquam.</p>
                    <div className="garis"></div>
                    <Slider {...settings} className="pd-slider">
                        {
                            destination.map(d => {
                            return  <div className="pd-card">
                                    <PopDestination key={d.id} data={d}/>    
                                    </div>
                        })
                        }
                    </Slider>
                </div>
            </Fragment>
        );
    }
}

export default Populardestination;