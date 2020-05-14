import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';

const PaymentInfo = (props) => {
    const goBack=()=>{
        props.history.push('/booking');
    }
    const currentPerson = localStorage.getItem('person');
    const currentCheckIn = new Date(localStorage.getItem('checkIn'));
    const currentCheckOut = new Date();
    const grossAmount = currentPerson * props.data.basePrice;
    const ppn = 10 * grossAmount / 100;
    const totalAmount = grossAmount + ppn;
   // currentCheckIn.setDate(currentCheckIn);
    currentCheckOut.setDate(currentCheckIn.getDate()+2);
    return (
        <div className="bookingform-container">
            <h2>Booking Detail</h2>
            <p>Total Guest: {currentPerson}</p>
            <p>Check in: {currentCheckIn.toDateString()}</p>
            <p>Check Out: {currentCheckOut.toDateString()}</p>
            <p>Gross Amount: {grossAmount.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
            })}</p>
            <p>Taxes: PPN (10 %) = {ppn.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
            })}</p>
            <span><strong>Total Amount : {totalAmount.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
            })}</strong></span>
            <Formik
                initialValues={
                    { method: '' }
                }
                onSubmit={(values) => {
                    props.history.push('/booking/tf');
                }}
                validationSchema={
                    Yup.object().shape({
                        method: Yup.string().required('Payment method is required!'),
                    })
                }>{props => (
                    <form onSubmit={props.handleSubmit}>

                        <div className="bookingform-input-container">
                            <select name="method"
                                value={props.values.method}
                                onChange={props.handleChange}
                                className="bookingform-input">
                                <option value="">Choose Payment Method</option>
                                <option value="tf">Bank Transfer</option>
                            </select>
                        </div>
                        {props.touched.method && props.errors.method ? <span className="registerform-error-text">{props.errors.method}</span> : null}
                        <div className="bookingform-button-container">
                            <Button variant="info" type="button" className="bookingform-btn" onClick={goBack}>Back</Button>
                            <Button variant="danger" type="submit" className="bookingform-btn">Check Out</Button>
                        </div>
                    </form>
                )}

            </Formik>
        </div>
    );
}

export default PaymentInfo;