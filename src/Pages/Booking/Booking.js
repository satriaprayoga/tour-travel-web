import React from 'react';
import './Booking.css';
import { Container, Row, Card, Col } from 'react-bootstrap';
import StepZilla from "react-stepzilla";
import PersonalInfo from './PersonalInfo';
import PaymentInfo from './PaymentInfo';

class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
        this.store={
            fullName:"",
            email:"",
            phone:"",
            billingAddress:"",
            paymentType:"",
            ccNumber:"",
            cvv:"",
            validUntil:"",
            saved:false
        }
    }

    getStore(){
        return this.store;
    }

    updateStore(update){
        this.store={
            ...this.store,
            ...update
        }
    }

    render() {
        const steps = [
            { name: "Step 1", component: <PersonalInfo getStore={()=>this.getStore()} /> },
            { name: "Step 2", component: <PaymentInfo /> },
            { name: "Step 3", component: <PaymentInfo /> }
        ]
        return (
            <div className='step-progress'>
            <StepZilla steps={steps} 
                       stepsNavigation={false} 
                       prevBtnOnLastStep={false} 
                       startAtStep={0} 
                       nextButtonCls="btn nextButton"
                       backButtonCls="btn backButton"/>
        </div>
            
        )
    }
}

export default Booking;