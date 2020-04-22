import React from 'react';
import './Booking.css';
import { Container, Row, Card, Col } from 'react-bootstrap';
import StepZilla from "react-stepzilla";
import PersonalInfo from './PersonalInfo';
import PaymentInfo from './PaymentInfo';

class Booking extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const steps = [
            { name: "Step 1", component: <PersonalInfo /> },
            { name: "Step 2", component: <PaymentInfo /> },
            { name: "Step 3", component: <PaymentInfo /> },
            { name: "Step 4", component: <PaymentInfo /> }
        ]
        return (
            <div className='step-progress'>
            <StepZilla steps={steps} stepsNavigation={false} prevBtnOnLastStep={false} startAtStep={0} />
        </div>
            
        )
    }
}

export default Booking;