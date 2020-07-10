import React from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import qs from 'qs';
import "react-datepicker/dist/react-datepicker.css";
import HotelService from '../../../Services/HotelService';
import { withRouter } from 'react-router-dom';

class HotelAvailable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pkg: {},
            person: 0,
            children:0,
            basePrice: 0,
            checkin: new Date(),
            checkOut: new Date(),
            isLoading: false,
            isAvailable: false,
            isChecked: false
        }
        this.checkAvailable = this.checkAvailable.bind(this);
        this.updateBooking=this.updateBooking.bind(this);
    }

    componentDidMount() {
        const params = qs.parse(this.props.location.search);
        const id = params['?id'];
        if (id) {
            HotelService.hotelById(id).then((resp) => {
                console.log(resp.data);
                this.setState({
                    pkg:resp.data,
                    minOrder: resp.data.minOrder,
                    capacity: resp.data.capacity,
                });
            }).catch((err) => {
                console.log(err);
                this.props.history.push('/');
            })
        } else {
            this.props.history.push('/');
        }
    }

    checkAvailable(e, values) {
        e.preventDefault();
        const m = values.checkIn;
        const stringDate = m.getFullYear() + "-" + (m.getMonth() + 1 <= 10 ? `0${m.getMonth() + 1}` : `${m.getMonth() + 1}`) + "-" + (m.getDate() < 10 ? `0${m.getDate()}` : `${m.getDate()}`);
        HotelService.checkAvailableHotel(this.state.pkg.id,stringDate,this.state.pkg.capacity,(values.adults+values.children)).then((resp)=>{
            const available=resp.data;
            this.setState({isAvailable:available,isChecked:true});
        });
        e.returnValue = false;

    }

    updateBooking(values){
        window.localStorage.setItem(this.state.pkg.id,JSON.stringify(values));
    }

    dateDiffInDays(date1, date2) {
        var dt1 = new Date(date1);
        var dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }

    render() {
        return (
            <div className="bookingform-container">
                <h1>Booking Detail</h1>
                <div style={{ paddingTop: '10px' }}>
                    <span className="txt1">Person(s)</span>
                </div>
                <div className="bookingform-input-container">
                    <input type="number"
                        className="bookingform-input"
                        name="adults"
                        placeholder="Number of Adult(s)"
                        min={this.state.minOrder}
                        onBlur={this.props.handleBlur}
                        max={this.state.capacity}
                        onChange={(e) => {
                            this.props.handleChange(e)
                        }}
                        value={this.props.values.adults}
                    />
                </div>
                {this.props.touched.adults && this.props.errors.adults ? <span className="registerform-error-text">{this.props.errors.adults}</span> : null}
                <div className="bookingform-input-container">
                    <input type="number"
                        className="bookingform-input"
                        name="children"
                        placeholder="Number of children"
                        onBlur={this.props.handleBlur}
                        max={this.state.capacity}
                        onChange={(e) => {
                            this.props.handleChange(e)
                        }}
                        value={this.props.values.children}
                    />
                </div>
                {this.props.touched.children && this.props.errors.children ? <span className="registerform-error-text">{this.props.errors.children}</span> : null}
                <div className="bookingform-input-container">
                    <DatePicker name="checkIn"
                        selected={this.props.values.checkIn}
                        onBlur={this.props.handleBlur}
                        className="bookingform-input-date"
                        value={this.props.values.checkIn}
                        minDate={new Date()}
                        onChange={e => {
                            this.props.setFieldValue('checkIn', e)
                        }} />
                </div>
                <span className="registerform-error-text">{this.props.errors.checkIn}</span>
                {this.props.touched.checkIn && this.props.errors.checkIn ? <span className="registerform-error-text">{this.props.errors.checkIn}</span> : null}
                <div className="bookingform-input-container">
                    <DatePicker name="checkOut"
                        selected={this.props.values.checkOut}
                        onBlur={this.props.handleBlur}
                        className="bookingform-input-date"
                        value={this.props.values.checkOut}
                        minDate={new Date()}
                        onChange={e => {
                            this.props.setFieldValue('checkOut', e)
                        }} />
                </div>
                <span className="registerform-error-text">{this.props.errors.checkOut}</span>
                {this.props.touched.checkOut && this.props.errors.checkOut ? <span className="registerform-error-text">{this.props.errors.checkOut}</span> : null}
                <div className="bookingform-button-container">
                    <Button variant="info" className="bookingform-btn" type="button" onClick={e => { this.checkAvailable(e, this.props.values) }}>Check</Button>
                </div>

               
                {(this.state.isChecked === true && this.state.isAvailable === true) &&
                    <React.Fragment>
                         <div><h3>Your Package is available</h3></div>   
                        <div className="bookingform-button-container">
                            <Button variant="info"
                                className="bookingform-btn"
                                type="button"
                                disabled={(this.props.errors.adults || this.props.errors.children || this.props.errors.checkIn || this.props.errors.checkOut)}
                                onClick={() => {
                                   
                                    this.updateBooking(this.props.values);
                                    this.props.navigateNext();

                                }}>Next</Button>
                        </div>
                    </React.Fragment>
                }
                {(this.state.isChecked === true && this.state.isAvailable === false) &&
                    <React.Fragment>
                        <div><p>Sorry, Your Package is Not available</p></div>

                    </React.Fragment>
                }
            </div>
        )
    }
}

export default withRouter(HotelAvailable);