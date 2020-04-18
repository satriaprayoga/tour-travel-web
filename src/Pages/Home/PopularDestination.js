import React from 'react';
import { Container } from 'react-bootstrap';
import lombok from '../../lombok.png';
import maluku from '../../maluku.png';
import baluran from '../../baluran.png';
import ntt from '../../ntt.png';
import bali from '../../bali.png';
import jogja from '../../jogja.png';
import papua from '../../papua.png';
import './PopularDestination.css';


class PopularDestination extends React.Component{

    render(){
        const IMAGES =
    [{
      src: `${lombok}`,
      thumbnail: `${lombok}`,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
      caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: `${maluku}`,
      thumbnail: `${maluku}`,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
      caption: "37H (gratispgraphy.com)"
    },
    {
      src: `${baluran}`,
      thumbnail: `${baluran}`,
      thumbnailWidth: 320,
      thumbnailHeight: 600,
      caption: "37H (gratispgraphy.com)"
    },
    {
      src: `${ntt}`,
      thumbnail: `${ntt}`,
      thumbnailWidth: 600,
      thumbnailHeight: 520,
      caption: "37H (gratispgraphy.com)"
    },
    {
      src: `${bali}`,
      thumbnail: `${bali}`,
      thumbnailWidth: 600,
      thumbnailHeight: 520,
      caption: "37H (gratispgraphy.com)"
    },
    {
      src: `${jogja}`,
      thumbnail: `${jogja}`,
      thumbnailWidth: 600,
      thumbnailHeight: 520,
      caption: "37H (gratispgraphy.com)"
    },
    {
      src: `${papua}`,
      thumbnail: `${papua}`,
      thumbnailWidth: 600,
      thumbnailHeight: 520,
      caption: "37H (gratispgraphy.com)"
    }];
        return (
            <div className="popular mx-auto text-center">
            <div className="popular-header">
              <h2>Most Popular Destinations</h2>
            </div>
            <div class="d-flex flex-row flex-wrap justify-content-center">
                <div className="d-flex flex-column">
                  <img src={lombok} class="cardimg img-fluid"/>
                  <img src={ntt} class="cardimg img-fluid"/>
                </div>
                <div class="d-flex flex-column">
                  <img src={baluran} class="img-fluid mb-1"/>
                  <img src={maluku}  class="img-fluid scale mb-2"/>
                </div>
                <div class="d-flex flex-column">
                  <img src={jogja} class="img-fluid m-1 p-1" />
                  <img src={bali} class="img-fluid image m-1 p-1" />
                </div>
                <div class="d-flex flex-column">
                  <img src={papua}  />
                </div>
                
              </div>
            <div className="popular-explore"><a href="#explore"><p>Explore Destinations >></p></a></div>
          </div>
        )
    }
}

export default PopularDestination;