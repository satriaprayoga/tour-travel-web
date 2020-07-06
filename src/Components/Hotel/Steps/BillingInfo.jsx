import React from 'react';
import { Formik } from 'formik';
import qs from 'qs';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class BillingInfo extends React.Component{
    constructor(props){
        super(props);
        this.updateBooking=this.updateBooking.bind(this);
    }

    updateBooking(values){
        const params = qs.parse(this.props.location.search);
        const id = params['?id'];
        window.localStorage.setItem(id,JSON.stringify(values));
    }
    
    render(){
        return (
            <div className="bookingform-container">
                <h1>Billing Info</h1>
                <div style={{ paddingTop: '10px' }}>
                    <span className="txt1">Full Name</span>
                </div>
                <div className="bookingform-input-container">
                    <input type="text"
                        className="bookingform-input"
                        name="name"
                        placeholder="Billing Name"
                        onBlur={this.props.handleBlur}
                        onChange={(e) => {
                            this.props.handleChange(e)
                        }}
                        value={this.props.values.name}
                    />
                </div>
                {this.props.touched.name && this.props.errors.name ? <span className="registerform-error-text">{this.props.errors.name}</span> : null}
                <div style={{ paddingTop: '10px' }}>
                    <span className="txt1">Email</span>
                </div>
                <div className="bookingform-input-container">
                    <input type="email"
                        className="bookingform-input"
                        name="email"
                        onBlur={this.props.handleBlur}
                        placeholder="Billing Email"
                        onChange={(e) => {
                            this.props.handleChange(e)
                        }}
                        value={this.props.values.email}
                    />
                </div>
                {this.props.touched.email && this.props.errors.email ? <span className="registerform-error-text">{this.props.errors.email}</span> : null}
                <div style={{ paddingTop: '10px' }}>
                    <span className="txt1">Phone</span>
                </div>
                <div className="bookingform-input-container">
                    <input type="text"
                        className="bookingform-input"
                        name="phone"
                        onBlur={this.props.handleBlur}
                        placeholder="Billing Phone"
                        onChange={(e) => {
                            this.props.handleChange(e)
                        }}
                        value={this.props.values.phone}
                    />
                </div>
                {this.props.touched.phone && this.props.errors.phone ? <span className="registerform-error-text">{this.props.errors.phone}</span> : null}
                <div className="bookingform-input-container">
                    <div style={{ paddingTop: '10px' }}>
                        <span className="txt1">City</span>
                    </div>
                    <input type="text"
                        className="bookingform-input"
                        name="city"
                        onBlur={this.props.handleBlur}
                        placeholder="City"
                        onChange={(e) => {
                            this.props.handleChange(e)
                        }}
                        value={this.props.values.city}
                    />
                </div>
                {this.props.touched.city && this.props.errors.city ? <span className="registerform-error-text">{this.props.errors.city}</span> : null}
                <div className="bookingform-input-container">
                    <div style={{ paddingTop: '10px' }}>
                        <span className="txt1">State/Province</span>
                    </div>
                    <input type="text"
                        className="bookingform-input"
                        name="state"
                        onBlur={this.props.handleBlur}
                        placeholder="State/Province"
                        onChange={(e) => {
                            this.props.handleChange(e)
                        }}
                        value={this.props.values.state}
                    />
                </div>
                {this.props.touched.state && this.props.errors.state ? <span className="registerform-error-text">{this.props.errors.state}</span> : null}
                <div className="bookingform-input-container">
                    <div style={{ paddingTop: '10px' }}>
                        <span className="txt1">Country</span>
                    </div>
                    <input type="text"
                        className="bookingform-input"
                        name="country"
                        placeholder="Country"
                        onBlur={this.props.handleBlur}
                        onChange={(e) => {
                            this.props.handleChange(e)
                        }}
                        value={this.props.values.country}
                    />
                </div>
                {this.props.touched.country && this.props.errors.country ? <span className="registerform-error-text">{this.props.errors.country}</span> : null}
                <div className="bookingform-input-container">
                    <div style={{ paddingTop: '10px' }}>
                        <span className="txt1">Address</span>
                    </div>
                    <input type="text"
                        className="bookingform-input"
                        name="address"
                        placeholder="Address"
                        onBlur={this.props.handleBlur}
                        onChange={(e) => {
                            this.props.handleChange(e)
                        }}
                        value={this.props.values.address}
                    />
                </div>
                {this.props.touched.address && this.props.errors.address ? <span className="registerform-error-text">{this.props.errors.address}</span> : null}
                <div className="bookingform-button-container">
                      <Button variant="danger" 
                              className="bookingform-btn" 
                              type="button" 
                              onClick={()=>{this.props.navigateBack();}}>Back</Button>
                      <Button variant="info" 
                              className="bookingform-btn" 
                              type="button" 
                              onClick={()=>{
                                this.props.navigateNext();
                                this.updateBooking(this.props.values);
                              }}
                              disabled={((this.props.errors.name) || (this.props.errors.email) 
                                || (this.props.errors.phone) 
                                || (this.props.errors.city)
                                || (this.props.errors.state)
                                || (this.props.errors.country)
                                || (this.props.errors.address))}>Next</Button>
                    </div>
            </div>
        )
    }
}

export default withRouter(BillingInfo);