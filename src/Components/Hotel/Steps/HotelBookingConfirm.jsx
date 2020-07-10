import React from 'react';
import { Button } from 'react-bootstrap';

class BookingConfirm extends React.Component{
    constructor(props){
        super(props);
    }

    dateDiffInDays(date1, date2) {
        var dt1 = new Date(date1);
        var dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }

    render(){
        const currentPerson = this.props.values.adults+this.props.values.children;
        const currentCheckIn = new Date(this.props.values.checkIn);
        const currentCheckOut = new Date(this.props.values.checkOut);
        const days=this.dateDiffInDays(currentCheckIn,currentCheckOut);
        //currentCheckIn.setDate();
        const grossAmount = currentPerson * this.props.values.basePrice*days;
        const ppn = 0;// grossAmount*10/100;
        const totalAmount = grossAmount + ppn;
        return (
            <div className="bookingform-container">
            <h2>Please Check Your Booking Before Checkout</h2>
            <p>Total Guest: {currentPerson}</p>
            <p>Check in: {currentCheckIn.toDateString()}</p>
            <p>Check out: {currentCheckOut.toDateString()}</p>
            
            <span><strong>Total Amount : {totalAmount.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
            })}</strong></span>
            <p>Payment Method: {this.props.values.method==='tf'?'Bank Transfer':'Credit Card'}</p>
            <div className="bookingform-button-container">
                <Button variant="danger"
                    className="bookingform-btn"
                    type="button"
                    disabled={this.props.pageIndex === 0}
                    onClick={this.props.navigateBack}>Back</Button>
                <Button variant="info"
                    className="bookingform-btn"
                    type="submit"
                    >Checkout</Button>
            </div>
            
        </div>
        
        )
    }
}

export default BookingConfirm;