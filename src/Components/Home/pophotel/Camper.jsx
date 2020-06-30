import React, { Component } from 'react';

import SearchBookForm from './SearchBookForm';

export class Camper extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div>
                <h1 className="sub">Hotel</h1>
                <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias eum, quaerat aperiam facere iste numquam.</p>
                <div className="garis"></div>
                
                <div className="hocontainer">
                <div className="hobox">
                <img className="hofoto"/>
                <div className="hoicon">
                <h2 className="hotitle">CAMPER</h2>
                </div>
                <div className="hocontent">
                    <p className="hotxt"></p>
                </div>
                </div>

                <div>
                    <SearchBookForm />
                    <button className="form-control btn btn-danger" onClick={this.back}>Back</button>
                </div>
                </div>

            {/* <div className="form-container">
                <h1 className="mb-5">Account Setup</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" onChange={inputChange('password')} value={values.password} />
                </div>

                <br /> */}
            </div>
            // </div>
        )
    }
}

export default Camper