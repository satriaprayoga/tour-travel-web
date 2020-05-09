import React from 'react';
import './Login.css';
import logo from '../../assets/logobig.png'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = (props) => {

    const validate = values => {
        const errors = {};
        if (!values.password) {
            errors.password = "Required";
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
            password: "",
            email: "",
            rememberMe:false
        },
        validate,
        onSubmit: values => {
            console.log(values);
            //props.history.push('/');
        },
    });
    return (
        <div className="login-container">
            <div className="login-top">
                <Link to="/"><img className="login-logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="form-container">
                <div className="loginform-container">
                    <form onSubmit={formik.handleSubmit}>
                        <h1>Sign In</h1>
                        <div className="loginform-input-container">
                            <input type="email"
                                className="loginform-input"
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.email} />
                        </div>
                        {formik.touched.email && formik.errors.email ? <span className="loginform-error-text">{formik.errors.email}</span> : null}
                        <div className="loginform-input-container">
                            <input type="password"
                                className="loginform-input"
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.values.password} />
                        </div>
                        {formik.touched.password && formik.errors.password ? <span className="loginform-error-text">{formik.errors.password}</span> : null}
                        <div className="loginform-input-container">
                            <Button variant="info" className="loginform-btn" type="submit">Sign In</Button>
                        </div>
                        <label className="loginform-checkbox">
                            Remember Me
                            <input type="checkbox"
                                   name="rememberMe"

                                   onChange={(event)=>{
                                      formik.values.rememberMe=event.target.checked
                                   }}

                            />
                            <span className="checkmark"></span>
                        </label>
                        <Link to="#" className="loginform-help">
                            Need Help?
                        </Link>
                       
                    </form>
                    <div className="loginform-input-container">
                            <Button variant="danger" className="signupform-btn" onClick={(e)=>{e.preventDefault();props.history.push('/register');}} type="button">Not a Member? Sign Up!</Button>
                        </div>
                </div>

            </div>
        </div>
    );
}

export default Login;