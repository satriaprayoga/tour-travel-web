import React from 'react';
import BookingService from '../../Services/BookingService';
import { Button } from 'react-bootstrap';

class CustomerBooking extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bookings:[],
        }
        this.loadBookings=this.loadBookings.bind(this);
    }

    componentDidMount(){
        console.log(this.props.customer);
        this.loadBookings();
    }

    loadBookings(){
        console.log(this.props.customer);
        BookingService.loadBookingByCustomer(this.props.customer.id).then((resp)=>{
            console.log(resp.data.response);
            this.setState({
                bookings:resp.data.response
            })
        })
    }

    render(){
        const bookings=this.state.bookings
        return (
           
            <div className="customerform-container">
                <h1>My Booking</h1>
                <ul>
                    {bookings.map(b=>(
                      <div>
                          <h4>Booking Code: {b.code}</h4>
                          <p>Package: {b.destination}, {b.packageGroup}-{b.packageName}</p>
                          <p>Person(s): {b.adults}</p>
                          <p>Total Amount: {b.grossAmount.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                    })}</p>
                          <p>Status: {b.status==='CREATED'?'Waiting for Payment':b.status}</p>
                          <hr/>
                      </div>
                      
                    ))}
                </ul>
                <div className="customerform-input-container">
                    <Button variant="info" className="signupform-btn" type="button" onClick={(e)=>{this.props.searchPackages()}}>Book New Packages</Button>
                </div>
            </div>
        )
    }
}

export default CustomerBooking;