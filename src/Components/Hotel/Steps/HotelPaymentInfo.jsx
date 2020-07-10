import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import qs from 'qs';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';




class PaymentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.updateBooking = this.updateBooking.bind(this);
    }

    updateBooking(values) {
        const params = qs.parse(this.props.location.search);
        const id = params['?id'];
        window.localStorage.setItem(id, JSON.stringify(values));
    }

    dateDiffInDays(date1, date2) {
        var dt1 = new Date(date1);
        var dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }

    render() {
        const currentPerson = this.props.values.adults+this.props.values.children;
        const currentCheckIn = new Date(this.props.values.checkIn);
        const currentCheckOut = new Date(this.props.values.checkOut);
        //currentCheckIn.setDate();
        const days=this.dateDiffInDays(currentCheckIn,currentCheckOut);
        const grossAmount = currentPerson * this.props.values.basePrice*days;
        const ppn = 0;
        const totalAmount = grossAmount + ppn;
        return (
            <div className="bookingform-container">
            <h2>Booking Detail</h2>
            <p>Total Guest: {currentPerson}</p>
            <p>Check in: {currentCheckIn.toDateString()}</p>
            <p>Check out: {currentCheckOut.toDateString()}</p>
            
            <span><strong>Total Amount : {totalAmount.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
            })}</strong></span>
            <div className="bookingform-input-container">
                <select name="method"
                    value={this.props.values.method}
                    onChange={this.props.handleChange}
                    className="bookingform-input">
                    <option value="">Choose Payment Method</option>
                    <option value="tf">Bank Transfer</option>
                </select>
            </div>
            {this.props.touched.method && this.props.errors.method ? <span className="registerform-error-text">{this.props.errors.method}</span> : null}
            <div className="bookingform-button-container">
                <Button variant="danger"
                    className="bookingform-btn"
                    type="button"
                    disabled={this.props.pageIndex === 0}
                    onClick={this.props.navigateBack}>Back</Button>
                <Button variant="info"
                    className="bookingform-btn"
                    type="button"
                    disabled={!(this.props.values.method && this.props.values.method)}
                    onClick={() => {
                        this.props.navigateNext();
                        this.updateBooking(this.props.values);
                    }}>Next</Button>
            </div>
            
        </div>
        )
    }


}


export default withRouter(PaymentInfo);