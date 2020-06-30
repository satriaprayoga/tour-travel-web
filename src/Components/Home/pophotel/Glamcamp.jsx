import React, { Component } from 'react'

export class Glamcamp extends Component {
    continueglam = e => {
        e.preventDefault();
        this.props.nextStepglam();
    };

    backglam = e => {
        e.preventDefault();
        this.props.prevStepglam();
    };

    render() {
        const {
            values: { name, email, phone, password, facebook, twitter, github }
        } = this.props;

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
                <h2 className="hotitle">GLAMCAMP</h2>
                </div>
                <div className="hocontent">
                    <p className="hotxt"></p>
                </div>
                </div>
                </div>

            {/* <div className="form-container">
                <ul class="list-group">
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Phone Number: {phone}</li>
                    <li class="list-group-item">Password: {password}</li>
                    <li class="list-group-item">Facebook URL: <a href={facebook}>{facebook}</a></li>
                    <li class="list-group-item">Twitter URL: <a href={twitter}>{twitter}</a></li>
                    <li class="list-group-item">Github URL: <a href={github}>{github}</a></li>
                </ul>

                <br /><br /> */}

                    <div className="text-center">
                        <button className="btn btn-danger" onClick={this.backglam}>Back</button>
                    </div>
            </div>
            // </div>
        )
    }
}

export default Glamcamp