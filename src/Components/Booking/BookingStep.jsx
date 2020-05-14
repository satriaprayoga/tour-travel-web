import React from 'react';
import './BookingStep.css'
import logo from '../../assets/logobig.png'
import BookingInfo from './Steps/BookingInfo';
import { Link, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import PaymentInfo from './Steps/PaymentInfo';
import BankTransfer from './Steps/BankTransfer';
import CreditCard from './Steps/CreditCard';

class BookingStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minOrder: 2,
            capacity: 10,
            basePrice: 1000000
        }
    }

    componentDidMount() {

    }

    render() {
        const data = {
            minOrder: 2,
            capacity: 10,
            basePrice: 1000000
        }
        return (
            <div className="booking-container">
                <div className="booking-top">
                    <Link to="/"><img className="booking-logo" src={logo} alt="logo" /></Link>
                </div>
                <div className="step-container">
                    <Switch>
                        <Redirect from="/booking" exact to="/booking/info"/>
                        <Route path="/booking/info" render={(props)=><BookingInfo {...props} data={data}/>}></Route>
                        <Route path="/booking/payment" render={(props)=><PaymentInfo {...props} data={data}/>}></Route>
                        <Route path="/booking/tf" render={(props)=><BankTransfer {...props} data={data}/>}></Route>
                        <Route path="/booking/cc" render={(props)=><CreditCard {...props} data={data}/>}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(BookingStep);