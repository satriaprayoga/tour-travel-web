import React, { Component } from 'react';

import SearchBookForm from './SearchBookForm';

export class Homestay extends Component {
    continuehome = e => {
        e.preventDefault();
        this.props.nextStephhome();
    };

    backhome = e => {
        e.preventDefault();
        this.props.prevStephome();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div>
                <h1 className="sub">Hotel</h1>
                <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias eum, quaerat aperiam facere iste numquam.</p>
                <div className="garis"></div>

                <div className="hocontainerglam">
                <div className="hoboxglam">
                <img className="hofoto" />
                <div className="hoicon">
                <h2 className="hotitle">HOMESTAY</h2>
                </div>
                <div className="hocontent">
                    <p className="hotxt"></p>
                </div>
                </div>

                <div>
                    <SearchBookForm />
                    <button className="form-control btn btn-danger" onClick={this.backhome}>Back</button>
                </div>
                </div>

            {/* <div className="form-container">
                <h1 className="mb-5">Social Profiles</h1>
                <div className="form-group">
                    <label htmlFor="facebook">Facebook URL</label>
                    <input type="text" className="form-control" name="facebook" onChange={inputChange('facebook')} value={values.facebook} />
                </div>
                <div className="form-group">
                    <label htmlFor="twitter">Twitter URL</label>
                    <input type="text" className="form-control" name="twitter" onChange={inputChange('twitter')} value={values.twitter} />
                </div>
                <div className="form-group">
                    <label htmlFor="github">Github URL</label>
                    <input type="text" className="form-control" name="github" onChange={inputChange('github')} value={values.github} />
                </div>

                <br /> */}

                {/* <div className="row"> */}
                    {/* <div className="text-center">
                        <button className="btn btn-danger" onClick={this.backhome}>Back</button>
                    </div> */}
                {/* </div> */}
            </div>
            // </div>
        )
    }
}

export default Homestay