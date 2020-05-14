import React from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import * as Yup from 'yup';
import {Formik } from 'formik';
import "react-datepicker/dist/react-datepicker.css";


const BookingInfo = (props) => {

  let today = new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth() + 1; //January is 0!
  // var yyyy = today.getFullYear();
  // if (dd < 10) {
  //   dd = '0' + dd
  // }
  // if (mm < 10) {
  //   mm = '0' + mm
  // }

  // today = yyyy + '-' + mm + '-' + dd;
  const initPerson=localStorage.getItem('person')?localStorage.getItem('person'):props.data.minOrder
  const initDate=localStorage.getItem('checkIn')?localStorage.getItem('checkIn'):today;
  const cancel=()=>{
    localStorage.removeItem('person');
    localStorage.removeItem('checkIn');
    props.history.push('/searchPackages');
  }
  return (
    <div className="bookingform-container">
      <Formik
        initialValues={{
          person: initPerson,
          checkIn: new Date(initDate),
          basePrice:props.data.basePrice
        }}
        onSubmit={(values) => {
          localStorage.setItem("person", values.person);
          localStorage.setItem("checkIn", new Date(values.checkIn));
          props.history.push('/booking/payment');
        }}
        validationSchema={
          Yup.object({
            person: Yup.number()
              .min(props.data.minOrder, 'Minumum Order Exceeded')
              .max(props.data.capacity, 'Maximum Order Exceeded')
              .required('Required'),
            checkIn: Yup.date()
              .min(today, 'Minimum date is today')
              .required("Required")
          })
        }>{props => (
          <form onSubmit={props.handleSubmit}>
            <h1>Booking Detail</h1>
            <div style={{ paddingTop: '10px' }}>
              <span className="txt1">Person</span>
            </div>
            <div className="bookingform-input-container">
              <input type="number"
                className="bookingform-input"
                name="person"
                placeholder="Number of person(s)"
                onChange={(e) => {
                  props.handleChange(e)
                }}
                value={props.values.person}
              />
            </div>
            {props.touched.person && props.errors.person ? <span className="registerform-error-text">{props.errors.person}</span> : null}
            <div className="bookingform-input-container">
              <DatePicker name="checkIn"
                selected={props.values.checkIn}
                className="bookingform-input-date"
                value={props.values.checkIn}
                minDate={today}
                onChange={e => {
                  props.setFieldValue('checkIn', e)
                }} />
            </div>
            {props.touched.checkIn && props.errors.checkIn ? <span className="registerform-error-text">{props.errors.checkIn}</span> : null}
            <div className="bookingform-button-container">
              <Button variant="danger" className="bookingform-btn" type="button" onClick={cancel}>Cancel</Button>
              <Button variant="info" className="bookingform-btn" type="submit" >Next</Button>
            </div>
            <p>Gross Amount: {eval(props.values.person*props.values.basePrice).toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                    })}</p>
              <span></span>
          </form>
            
        )}

      </Formik>
      
    </div>
  )
}

export default BookingInfo;
