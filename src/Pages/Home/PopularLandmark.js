import React from 'react';
import { Container } from 'react-bootstrap';
import goaJepang from '../../goaJepang.png';
import pantaiBalalan from '../../pantaiBalanan.png';
import telukHijau from '../../telukHijau.png';
import pantaiBama from '../../pantaiBama.png';
import bali from '../../bali.png';
import jogja from '../../jogja.png';
import papua from '../../papua.png';
import './PopularLandmark.css';


class PopularLandmark extends React.Component {

  render() {

    return (
      <div className="landmark mx-auto text-center">
        <div className="landmark-header">
          <h2>Most Popular Landmarks</h2>
        </div>
        <div class="d-flex flex-row flex-wrap justify-content-center">
          <div className="col-3">
            <div className="card">
              <img className="card-img img-fluid" src={goaJepang} alt="..."  height="300"/>
              <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-end">
                <p>Goa Jepang</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img className="card-img img-fluid" src={pantaiBalalan} alt="..." height="300"/>
              <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-end">
                <p>Pantai Balanan</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img className="card-img img-fluid" src={telukHijau} alt="..." height="300"/>
              <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-end">
                <p>Teluk Hijau</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img className="card-img img-fluid" src={pantaiBama} alt="..." height="300"/>
              <div className="card-img-overlay overlay-grey text-white d-flex justify-content-center align-items-end">
                <p>Pantai Bama</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default PopularLandmark;