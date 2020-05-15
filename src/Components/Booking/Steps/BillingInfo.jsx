import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';

const BillingInfo=(props)=>{
    const goBack=()=>{
        props.history.push('/booking');
    }
    return(
        <div className="bookingform-container">
            <Formik
                initialValues={{
                    name:'',
                    email:'',
                    phone:'',
                    address:''
                }}
                validationSchema={
                    Yup.object({
                        name:Yup.string().required('Name is required'),
                        email:Yup.string().email('Invalid email format').required('email is required'),
                        phone:Yup.string().required('Phone is required'),
                        address:Yup.string().required('address is required')
                    })
                }>

            </Formik>
        </div>
    )
}

export default BillingInfo;