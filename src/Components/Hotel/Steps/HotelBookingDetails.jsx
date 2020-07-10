import React from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import qs from 'qs';
import "react-datepicker/dist/react-datepicker.css";
import DestinationService from '../../../Services/DestinationService';
import { withRouter } from 'react-router-dom';

class BookingDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            minOrder:1,
            capacity:0,
            day:0
        }
    }

    componentDidMount(){
        const params = qs.parse(this.props.location.search);
        const id = params['?id'];
        if (id) {
            DestinationService.tourById(id).then((resp) => {
                console.log(resp.data);
                this.setState({
                    minOrder: resp.data.minOrder,
                    capacity:resp.data.capacity,
                    day:resp.data.day
                });
            }).catch((err) => {
                console.log(err);
                this.props.history.push('/');
            })
        } else {
            this.props.history.push('/');
        }
    }

    render(){
        return(
            <div className="bookingform-container">
                <h1>Booking Detail</h1>
                <div style={{ paddingTop: '10px' }}>
                  <span className="txt1">Person</span>
                </div>
                <div className="bookingform-input-container">
                  <input type="number"
                    className="bookingform-input"
                    name="person"
                    placeholder="Number of person(s)"
                    min={this.state.minOrder}
                    onBlur={this.props.handleBlur}
                    max={this.state.capacity}
                    onChange={(e) => {
                      this.props.handleChange(e)
                    }}
                    value={this.props.values.person}
                  />
                </div>
                {this.props.touched.person && this.props.errors.person ? <span className="registerform-error-text">{this.props.errors.person}</span> : null}
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
                <div className="bookingform-button-container">
                  <Button variant="danger" 
                          className="bookingform-btn" 
                          type="button" 
                          disabled={this.props.pageIndex === 0}
                          onClick={this.props.navigateBack}>Cancel</Button>
                  <Button variant="info" 
                          className="bookingform-btn" 
                          type="button" 
                          disabled={(this.props.errors.person || this.props.errors.checkIn)}
                          onClick={()=>{
                            const checkOut=new Date(this.props.values.checkIn);
                            checkOut.setDate(checkOut.getDate()+this.state.day);
                            this.props.setFieldValue('checkOut',checkOut);
                            this.props.navigateNext();
                          
                          }}>Next</Button>
                </div>
                <p>Gross Amount: {eval(this.props.values.person*this.props.values.basePrice).toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                        })}</p>
                  <span></span>
            </div>
        )
    }
}



export default withRouter(BookingDetails);