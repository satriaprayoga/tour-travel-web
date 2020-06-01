import React from 'react';
import './BookingStep.css'
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import * as Yup from 'yup';
import logo from '../../assets/logobig.png'
import qs from 'qs';
import { Formik } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import DestinationService from '../../Services/DestinationService';
import { Link } from 'react-router-dom';
import BookingService from '../../Services/BookingService';

class BookingAvailable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pkg: {},
      person:0,
      basePrice:0,
      checkin:new Date(),
      isLoading: false,
      isAvailable: false,
      isChecked:false
    }
    this.checkAvailable = this.checkAvailable.bind(this);
  }

  componentDidMount() {
    const params = qs.parse(this.props.location.search);
    const id = params['?id'];
    if (id) {
      DestinationService.tourById(id).then((resp) => {
        console.log(resp.data);
        this.setState({
          pkg: resp.data,
          person:resp.data.minOrder,
          basePrice:resp.data.price,
          min:resp.data.minOrder,
          max:resp.data.capacity
        });
      }).catch((err) => {
        console.log(err);
        this.props.history.push('/');
      })
    } else {
      this.props.history.push('/');
    }
  }

  checkAvailable(e,values) {
    e.preventDefault();
    const m=values.checkIn;
    const stringDate=m.getFullYear() +"-"+ (m.getMonth()+1<=10?`0${m.getMonth()+1}`:`${m.getMonth()+1}`) +"-"+ (m.getDate()<10?`0${m.getDate()}`:`${m.getDate()}`) ;
    DestinationService.checkAvailableTour(this.state.pkg.id,stringDate,this.state.pkg.capacity,values.person).then((resp)=>{
      const available=resp.data;
      this.setState({isAvailable:available,isChecked:true});
    });
    e.returnValue = false;
    
  }

  render() {
    const today = new Date();
    const { pkg } = this.state;
    return (
      <div className="booking-container">
        <div className="booking-top">
          <Link to="/"><img className="booking-logo" src={logo} alt="logo" /></Link>
        </div>
        <div className="step-container">
          <div className="bookingform-container">
            <Formik
              initialValues={{
                person: this.state.person,
                checkIn: this.state.checkin,
                basePrice: this.state.basePrice
              }}
              enableReinitialize={true}
              onSubmit={(values) => {
                const m=values.checkIn;
                const stringDate=(m.getDate()<10?`0${m.getDate()}`:`${m.getDate()}`)+"-"+(m.getMonth()+1<=10?`0${m.getMonth()+1}`:`${m.getMonth()+1}`)+"-"+m.getFullYear();
                let request={
                  adults:values.person,
                  checkin:stringDate,
                  packageGroup:this.state.pkg.group,
                  packageId:this.state.pkg.id,
                  packageName:this.state.pkg.name,
                  day:this.state.pkg.day,
                  night:this.state.pkg.night,
                  grossAmount:values.person*values.basePrice,
                  destination:this.state.pkg.destination
                }
                BookingService.initBook(request).then((resp)=>{
                  console.log(resp.data);
                  localStorage.setItem('bcode',resp.data.response.code)
                  this.props.history.push(`/booking`)
                })
               
              }}
           
              validationSchema={
                Yup.object({
                  person: Yup.number()
                    .min(pkg.minOrder, 'Minumum Order Exceeded')
                    .max(pkg.capacity, 'Maximum Order Exceeded')
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
                      min={this.state.min}
                      max={this.state.max}
                      onChange={(e) => {
                        props.handleChange(e)
                        this.setState({
                          person:e.target.value
                        })
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
                        this.setState({checkIn:e})
                      }} />
                  </div>
                  {props.touched.checkIn && props.errors.checkIn ? <span className="registerform-error-text">{props.errors.checkIn}</span> : null}
                  <div className="bookingform-button-container">
                    <Button variant="info" className="bookingform-btn" type="button" onClick={e=>{this.checkAvailable(e,props.values)}}>Check</Button>
                  </div>
                  <p>Gross Amount: {eval(props.values.person * props.values.basePrice).toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}</p>
                  {(this.state.isChecked===true && this.state.isAvailable===true ) &&
                  <React.Fragment>
                    <div><h3>Your Package is available</h3></div>    
                    <div className="bookingform-button-container">
                      <Button variant="danger" className="bookingform-btn" type="submit">Book Now</Button>
                    </div>
                      </React.Fragment>
                  }
                  {(this.state.isChecked===true && this.state.isAvailable===false ) &&
                  <React.Fragment>
                    <div><p>Sorry, Your Package is Not available</p></div>    
                    
                      </React.Fragment>
                  }
                </form>

              )}

            </Formik>
          </div>

        </div>
      </div>
    )
  }
}

export default BookingAvailable;