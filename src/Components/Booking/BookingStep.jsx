import React from 'react';
import './BookingStep.css'
import logo from '../../assets/logobig.png'
import BookingInfo from './Steps/BookingInfo';
import { Link, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import qs from 'qs';
import * as Yup from 'yup';
import PaymentInfo from './Steps/PaymentInfo';

import DestinationService from '../../Services/DestinationService';
import BookingDetails from './Steps/BookingDetails';
import { Formik } from 'formik';
import BookingWizard from './BookingWizard';
import BillingInfo from './Steps/BillingInfo';
import BookingAvailable from './Steps/BookingAvailable';
import BookingConfirm from './Steps/BookingConfirm';
import BookingService from '../../Services/BookingService';

class BookingStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pkg: {},
            pageIndex: 0
        }
        this._navigateBack = this._navigateBack.bind(this);
        this._navigateNext = this._navigateNext.bind(this);
        this._renderPage = this._renderPage.bind(this);

        this.saveBooking=this.saveBooking.bind(this);
    }
    componentDidMount() {
        const params = qs.parse(this.props.location.search);
        const id = params['?id'];
        if (id) {
            DestinationService.tourById(id).then((resp) => {
                console.log(resp.data);
                this.setState({
                    pkg: resp.data
                });
            }).catch((err) => {
                console.log(err);
                this.props.history.push('/');
            })
        } else {
            this.props.history.push('/');
        }
    }

    saveBooking(values){
        const currentUser=this.props.currentUser;
        const cIn = values.checkIn;
        const cOut=values.checkOut;
        const inDate = (cIn.getDate() < 10 ? `0${cIn.getDate()}` : `${cIn.getDate()}`)+"-"+ (cIn.getMonth() + 1 <= 10 ? `0${cIn.getMonth() + 1}` : `${cIn.getMonth() + 1}`)+"-"+cIn.getFullYear();
        const outDate= (cOut.getDate() < 10 ? `0${cOut.getDate()}` : `${cOut.getDate()}`)+"-"+ (cOut.getMonth() + 1 <= 10 ? `0${cOut.getMonth() + 1}` : `${cOut.getMonth() + 1}`)+"-"+cOut.getFullYear();
        let request={
            customerId:currentUser.id,
            destination:this.state.pkg.destination,
            packageGroup:this.state.pkg.group,
            packageId:this.state.pkg.id,
            packageName:this.state.pkg.name,
            checkin:inDate,
            checkout:outDate,
            name:values.name,
            email:values.email,
            phone:values.phone,
            billingAddress:`${values.address} ${values.city},${values.state}, ${values.country}`,
            adults:values.person,
            children:0,
            day:this.state.pkg.day,
            night:this.state.pkg.night,
            grossAmount:values.person*values.basePrice
        }
        console.log(request);
        BookingService.initBook(request).then((resp)=>{
            console.log(resp.data.response);
            let payment={
                bookingCode:resp.data.response.code,
                paymentType:values.method,
                totalAmount:request.grossAmount
            }
            BookingService.updatePayment(payment).then((resp)=>{
                console.log(resp.data.response);
                this.props.history.push("/");
            })
        })
    }
    componentWillUnmount(){
        window.localStorage.clear();
    }

    render() {
        const today = new Date();
        const { minOrder, capacity, price } = this.state.pkg;
        return (
            <div className="booking-container">
                <div className="booking-top">
                    <Link to="/"><img className="booking-logo" src={logo} alt="logo" /></Link>
                </div>
                <div className="step-container">
                    <BookingWizard pages={[BookingAvailable, BillingInfo, PaymentInfo, BookingConfirm]}>
                        {
                            wizProps => (
                                <div>
                                    <Formik
                                        initialValues={{
                                            person: minOrder,
                                            checkIn: today,
                                            checkOut: today,
                                            basePrice: price,
                                            name: '',
                                            email: '',
                                            phone: '',
                                            city: '',
                                            state: '',
                                            country: '',
                                            method: '',
                                            address:''
                                        }}
                                        enableReinitialize={true}
                                        validationSchema={
                                            Yup.object().shape({
                                                person: Yup.number()
                                                    .min(minOrder, 'Minumum Order Exceeded')
                                                    .max(capacity, 'Maximum Order Exceeded')
                                                    .required('Required'),
                                                checkIn: Yup.date()
                                                    .min(today, 'Minimum date is today')
                                                    .required("Required"),
                                                checkOut: Yup.date()
                                                    .min(today, 'Minimum date is today')
                                                    .required("Required"),
                                                name: Yup.string().required('Name is required'),
                                                email: Yup.string().email('Invalid email format').required('email is required'),
                                                phone: Yup.string().required('Phone is required'),
                                                city: Yup.string().required('address is required'),
                                                state: Yup.string().required('address is required'),
                                                country: Yup.string().required('address is required'),
                                                address:Yup.string().required('address is required')
                                            })
                                        }
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                alert(JSON.stringify(values, null, 2));
                                                window.localStorage.clear();
                                                this.saveBooking(values);
                                            }, 1000)
                                        }}>
                                        {
                                            props => {
                                                return (
                                                    <form onSubmit={props.handleSubmit}>
                                                        {wizProps.renderPage(props)}
                                                    </form>
                                                )
                                            }
                                        }


                                    </Formik>
                                </div>
                            )
                        }
                    </BookingWizard>
                </div>
            </div>

        )
    }

    _navigateBack = () => {
        this.setState(prevState => ({
            pageIndex: prevState.pageIndex <= 1 ? 1: prevState.pageIndex - 1
           
        }));
       
    };

    _navigateNext = () => {
        this.setState(prevState => ({
            pageIndex: prevState.pageIndex >=2? 3: prevState.pageIndex+1
        }));
        console.log(this.state.pageIndex);
    };

    _renderPage(props) {
        const { pageIndex } = this.state;
        const pageHash = {
            0: BookingDetails,
            1:BillingInfo,
            2: PaymentInfo,
            3:BookingConfirm
        };

        const Page = pageHash[pageIndex];

        return (
            <Page
                {...props}
                navigateBack={this._navigateBack}
                navigateNext={this._navigateNext}
                pageIndex={pageIndex}
            />
        );
    }
}


export default withRouter(BookingStep);