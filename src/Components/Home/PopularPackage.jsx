import React, { Component, Fragment } from 'react';
import { FaParachuteBox, FaTram, FaRing, FaWallet } from 'react-icons/fa';

// import PopPackage from './poppackage/PopPackage';

//style
import './PopularPackage.css';

//services
// import API from '../services';

class PopularPackage extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="sub">Tour & Travel</h1>
                    <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Alias eum, quaerat aperiam facere iste numquam.</p>
                    <div className="garis"></div>
                <div className="pk-body">
                <div className="pk-container">

                    <div className="pk-card">
                        <div className="pk-imgBx" data-text="Individu">
                            <FaParachuteBox className="pk-icon"/>
                        </div>
                        <div className="pk-content">
                            <div>
                                <h2 className="pk-paket">Individu - Paket B</h2>
                                <h4 className="pk-malam"> / 2 hari 1 malam</h4>
                                <h4 className="pk-start">Start From :</h4>
                                <h3 className="pk-harga">Rp 1.500.000,- /orang</h3>
                                <h4 className="pk-orang">min.2 orang</h4>
                                <p className="pk-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="pk-card">
                        <div className="pk-imgBx" data-text="Paket/Group">
                            <FaTram className="pk-icon"/>
                        </div>
                        <div className="pk-content">
                            <div>
                                <h2 className="pk-paket">Paket/Group - Paket F</h2>
                                <h4 className="pk-malam"> / 2 hari 1 malam</h4>
                                <h4 className="pk-start">Start From :</h4>
                                <h3 className="pk-harga">Rp 1.050.000,- /orang</h3>
                                <h4 className="pk-orang">min.2 orang</h4>
                                <p className="pk-desc">Lorem ipsum dolor sit amet consectetur</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="pk-card">
                        <div className="pk-imgBx" data-text="Corporate">
                            <FaRing className="pk-icon"/>
                        </div>
                        <div className="pk-content">
                            <div>
                                <h2 className="pk-paket">Corporate - Paket C</h2>
                                <h4 className="pk-malam"> / 3 hari 2 malam</h4>
                                <h4 className="pk-start">Start From :</h4>
                                <h3 className="pk-harga">Rp 3.500.000,- /orang</h3>
                                <h4 className="pk-orang">min.2 orang</h4>
                                <p className="pk-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="pk-card">
                        <div className="pk-imgBx" data-text="Private Tour">
                            <FaWallet className="pk-icon"/>
                        </div>
                        <div className="pk-content">
                            <div>
                                <h2 className="pk-paket">Private Tour - Paket A</h2>
                                <h4 className="pk-malam"> / 1 hari </h4>
                                <h4 className="pk-start">Start From :</h4>
                                <h3 className="pk-harga">Rp 450.000,- /orang</h3>
                                <h4 className="pk-orang">min.2 orang</h4>
                                <p className="pk-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </Fragment>
        );
    }
}

export default PopularPackage;