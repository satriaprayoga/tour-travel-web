import React from 'react';
import './Booking.css';
import { Container, Row, Card, Col } from 'react-bootstrap';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            fullName:props.getStore().fullName,
            email:props.getStore().email,
            phone:props.getStore().phone,
            country:'',
            province:'',
            city:'',
            billingAddress:props.getStore().billingAddress

        }
        this._validateOnDemand=true
        this.handleMount = this.handleMount.bind(this);

        this._validationCheck=this._validationCheck.bind(this);
        this.isValidated=this.isValidated.bind(this);
    }

    _validationCheck(){

    }

    isValidated(){

    }


    _grabUserInput(){
        return {
            fullName:this.refs.fullName.value,
            email:this.refs.email.value,
            phone:this.refs.phone.value,
            billingAddress:this.refs.billingAddress.value
        }
    }

    handleMount() {
       
        let footerButton = document.querySelector(".footer-buttons");
        footerButton.style['margin-top'] = "-80px";
        footerButton.style['margin-right'] = "50px";
    }
    componentDidMount() {
        this.handleMount();
    }
    render() {
        return (
            <div className="booking-step-header">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    
                                    <Card.Title>Customer Information</Card.Title>
                                    <Row>
                                        <Col sm={3}>
                                            <h5>Booking Details</h5>
                                            <p>Destination</p>
                                            <p>Package Group</p>
                                            <p>Package Name</p>
                                            <br/>
                                            <span>Adults: Children: </span>
                                            <p><strong>Rp. xxxx.-</strong></p>
                                        </Col>
                                        <Col sm={1}>
                                            <div style={{borderLeft:"1px solid black",height:"100%"}}></div>
                                        </Col>
                                        <Col sm={8}>
                                        <div>
                                        <form>
                                            <div style={{ paddingLeft: "20px" }}>
                                                <label>Use Profile</label>
                                                <input style={{ marginLeft: "50px" }} type="checkbox"></input>
                                            </div>
                                            <div style={{ paddingLeft: "20px" }}>
                                                <label>Full Name</label>
                                                <input type="text" 
                                                       ref="fullName"
                                                       className="form-control" 
                                                       name="fullName"
                                                       defaultValue={this.state.fullName}
                                                       required></input>
                                            </div>
                                            <div className="form-row" style={{ paddingLeft: "20px" }}>
                                                <Col md={6} className="form-group">
                                                    <label className="form-label">Email</label>
                                                    <input className="form-control" 
                                                            type="email" 
                                                            placeholder="email address"
                                                            ref="email"
                                                            name="email"
                                                            defaultValue={this.state.email} 
                                                            required/>

                                                </Col>
                                                <Col md={6} className="form-group">
                                                    <label className="form-label">Phone</label>
                                                    <input className="form-control" 
                                                           type="text" 
                                                           placeholder="Phone Number"
                                                           ref="phone"
                                                           name="phone"
                                                           defaultValue={this.state.phone} 
                                                           required/>

                                                </Col>
                                            </div>
                                            <div className="form-row" style={{ paddingLeft: "20px" }}>
                                                <Col md={3} className="form-group">
                                                    <label className="form-label">Country</label>
                                                    <input className="form-control" type="text" placeholder="Country" />

                                                </Col>
                                                <Col md={3} className="form-group">
                                                    <label className="form-label">Province/State</label>
                                                    <input className="form-control" type="text" placeholder="Children" />

                                                </Col>
                                                <Col md={3} className="form-group">
                                                    <label className="form-label">City</label>
                                                    <input className="form-control" type="text" placeholder="Children" />

                                                </Col>
                                            </div>
                                            <div style={{ paddingLeft: "20px" }}>
                                                <label>Address</label>
                                                <input type="text" className="form-control"></input>
                                            </div>

                                        </form>
                                    </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </Container>
            </div>
        )
    }
}

export default PersonalInfo;