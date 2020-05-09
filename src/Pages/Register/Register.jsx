import React from 'react';
import './Register.css';
import logo from '../../assets/logobig.png'
import { useFormik } from 'formik';
import axios from 'axios';
import AuthService from '../../Services/AuthService';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Register = (props) => {
    const validate = values => {
        const errors = {};

        if (!values.username) {
            errors.username = "Required";
        }

        if (!values.password) {
            errors.password = "Required";
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Your password not matched"
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email format";
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
            email: ""
        },
        validate,
        onSubmit: values => {
            console.log(values);
            // props.history.push('/');
            // const emailRegistered = {}
            // AuthService.checkEmail(values.email).then((resp) => {
            //     if (resp.data.response === true) {
            //         alert("email already registered");
            //         emailRegistered.email = "Email Already Registered"

            //     } else {
            //         let activationUrl = `${window.location.protocol}//${window.location.host}/activate/`
            //         let request = {
            //             username: values.username,
            //             email: values.email,
            //             password: values.password,
            //             provider: 'local',
            //             activationUrl: activationUrl
            //         }

            //         AuthService.register(request).then((resp) => {
            //             const data = resp.data;
            //             props.history.push('/registerSuccess/' + data.id);
            //         })

            //     }
            //});
            // let activationUrl=`${window.location.protocol}//${window.location.host}/activate/`
            // let request={
            //     username:values.username,
            //     email:values.email,
            //     password:values.password,
            //     provider:'local',
            //     activationUrl:activationUrl
            // }

            // AuthService.register(request).then((resp)=>{
            //     const data=resp.data;
            //     props.history.push('/registerSuccess/'+data.id);
            // })

        }


    });
    return (
        <div className="register-container">
            <div className="register-top">
                <Link to="/"><img className="register-logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="form-container">
                <div className="registerform-container">
                    <form onSubmit={formik.handleSubmit}>
                        <h1>Sign Up</h1>
                        <div style={{ paddingTop: '10px' }}>
                            <span className="txt1">Name</span>
                        </div>
                        <div className="registerform-input-container">
                            <input type="text"
                                className="registerform-input"
                                name="username"
                                placeholder="Username"
                                onChange={formik.handleChange}
                                value={formik.values.username} />
                        </div>
                        {formik.touched.username && formik.errors.username ? <span className="registerform-error-text">{formik.errors.username}</span> : null}
                        <div style={{ paddingTop: '10px'}}>
                            <span className="txt1">Email</span>
                        </div>
                        <div className="registerform-input-container">
                            <input type="email"
                                className="loginform-input"
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.email} />
                        </div>
                        {formik.touched.email && formik.errors.email ? <span className="registerform-error-text">{formik.errors.email}</span> : null}
                        <div style={{ paddingTop: '10px'}}>
                            <span className="txt1">Password</span>
                        </div>
                        <div className="registerform-input-container">
                            <input type="password"
                                className="registerform-input"
                                name="password"
                                placeholder="password"
                                onChange={formik.handleChange}
                                value={formik.values.password} />
                        </div>
                        {formik.touched.password && formik.errors.password ? <span className="registerform-error-text">{formik.errors.password}</span> : null}
                        <div style={{ paddingTop: '10px'}}>
                            <span className="txt1">Confirm Password</span>
                        </div>
                        <div className="registerform-input-container">
                            <input type="password"
                                className="registerform-input"
                                name="confirmPassword"
                                placeholder="password confirmation"
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword} />
                        </div>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <span className="registerform-error-text">{formik.errors.confirmPassword}</span> : null}
                        <div className="loginform-input-container">
                                <Button variant="danger" className="signupform-btn" type="submit">Sign Up</Button>
                        </div>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <span style={{ fontSize: '16px', lineHeight: '1.5', color: '#fff9f9' }}>Already a member?</span>
                            <a href="/login" style={{ fontSize: '16px', lineHeight: '1.5', color: '#fff9f9', borderBottom: '1px solid #999999' }}> Sign In</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );

}

export default Register;

/*

*/