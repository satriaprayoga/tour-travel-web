import React from 'react';
import './HotelBookingStep.css';
import logo from '../../assets/logobig.png';
import { Link, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import qs from 'qs';
import { Formik } from 'formik';
import * as Yup from 'yup';
import HotelPaymentInfo from './Steps/HotelPaymentInfo';
import HotelBookingDetails from './Steps/HotelBookingDetails';
import HotelService from '../../Services/HotelService';
import BookingService from '../../Services/BookingService';
import HotelAvailable from './Steps/HotelAvailable';
import HotelBookingWizard from './HotelBookingWizard';
import HotelBillingInfo from './Steps/HotelBillingInfo';
import HotelBookingConfirm from './Steps/HotelBookingConfirm';
import { toast } from 'react-toastify';

class HotelBookingStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pkg: {},
            pageIndex: 0
        }
        this._navigateBack = this._navigateBack.bind(this);
        this._navigateNext = this._navigateNext.bind(this);
        this._renderPage = this._renderPage.bind(this);

        this.saveBooking = this.saveBooking.bind(this);
    }

    dateDiffInDays(date1, date2) {
        var dt1 = new Date(date1);
        var dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }

    componentDidMount() {
        const params = qs.parse(this.props.location.search);
        const id = params['?id'];
        console.log(this.props.currentUser);
        if (id) {
            HotelService.hotelById(id).then((resp) => {
                this.setState({
                    pkg: resp.data
                })
            }).catch((err) => {
                console.log(err);
                this.props.history.push('/');
            })
        } else {
            this.props.history.push('/');
        }
    }
    saveBooking(values) {
        const {currentUser} = this.props;
        const cIn = values.checkIn;
        const cOut = values.checkOut;
        const inDate = (cIn.getDate() < 10 ? `0${cIn.getDate()}` : `${cIn.getDate()}`) + "-" + (cIn.getMonth() + 1 <= 10 ? `0${cIn.getMonth() + 1}` : `${cIn.getMonth() + 1}`) + "-" + cIn.getFullYear();
        const outDate = (cOut.getDate() < 10 ? `0${cOut.getDate()}` : `${cOut.getDate()}`) + "-" + (cOut.getMonth() + 1 <= 10 ? `0${cOut.getMonth() + 1}` : `${cOut.getMonth() + 1}`) + "-" + cOut.getFullYear();
        const days=this.dateDiffInDays(cIn,cOut);
        let request = {
            customerId: currentUser.id,
            destination: this.state.pkg.destination,
            packageGroup: this.state.pkg.hotelGroup,
            packageId: this.state.pkg.id,
            packageName: this.state.pkg.name,
            checkin: inDate,
            checkout: outDate,
            name: values.name,
            email: values.email,
            phone: values.phone,
            billingAddress: `${values.address} ${values.city},${values.state}, ${values.country}`,
            adults:values.adults,
            children:values.children,
            capacity: this.state.pkg.capacity,
            day: days,
            night: days-1,
            grossAmount: (values.adults + values.children) * values.basePrice* days
        }
        console.log(request);
        BookingService.initBook(request).then((resp) => {
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
        });
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
                    <HotelBookingWizard pages={[HotelAvailable, HotelBillingInfo, HotelPaymentInfo, HotelBookingConfirm]}>
                        {
                            wizProps => (
                                <div>
                                    <Formik
                                        initialValues={{
                                            adults: 0,
                                            children: 0,
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
                                            address: ''
                                        }}
                                        enableReinitialize={true}
                                        validationSchema={
                                            Yup.object().shape({
                                                adults: Yup.number()
                                                    .min(minOrder, 'Minumum Order Exceeded')
                                                    .max(capacity, 'Maximum Order Exceeded')
                                                    .required('Required'),
                                                children: Yup.number()
                                                    .min(0, 'Minumum Order Exceeded'),
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
                                                address: Yup.string().required('address is required')
                                            })
                                        }
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                toast.info("Your Booking is Created!");
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
                    </HotelBookingWizard>
                </div>
            </div>

        )
    }

    _navigateBack = () => {
        this.setState(prevState => ({
            pageIndex: prevState.pageIndex < 1 ? 1 : prevState.pageIndex - 1

        }));
        console.log(this.state.pageIndex);

    };

    _navigateNext = () => {
        this.setState(prevState => ({
            pageIndex: prevState.pageIndex >= 2 ? 3 : prevState.pageIndex + 1
        }));
        console.log(this.state.pageIndex);
    };

    _renderPage(props) {
        const { pageIndex } = this.state;
        const pageHash = {
            0: HotelAvailable,
            1: HotelBillingInfo,
            2: HotelPaymentInfo,
            3: HotelBookingConfirm
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

export default withRouter(HotelBookingStep);