import React from 'react';
import './Booking.css';
import { Container, Row, Card, Col } from 'react-bootstrap';

class PaymentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            paymentType: 'select'
        })
        this.handlePaymentChange = this.handlePaymentChange.bind(this);
    }

    handlePaymentChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        let paymentForm;
        switch (this.state.paymentType) {
            case "cc":
                paymentForm =

                    <div>
                        <div className="form-row">
                        <Col md={8} className="form-group">
                            <hr />
                            <label className="form-label">Credit Card Number</label>
                            <input className="form-control" type="text" placeholder="xxxx-xxx-xxxx-xxx" />
                        </Col>
                    </div>
                    <div className="form-row">
                        <Col md={4} className="form-group">
                            <label className="form-label">CVV</label>
                            <input className="form-control" type="text" placeholder="CVV" />
                        </Col>
                        <Col md={4} className="form-group">
                            <label className="form-label">Valid Until</label>
                            <input className="form-control" type="text" placeholder="mm/yy" />
                        </Col>
                    </div>
                    </div>
                     
                break;
            case "tf":
                paymentForm =
                    <div>
                        <span>Please transfer to thie account:</span>
                        <p><strong>BANK: xxxxxxxxxxxxx</strong></p>
                    </div>
                break;
            default:
                break;
        }
        return (
            <div className="booking-step-header">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>

                                    <Card.Title>Payment Information</Card.Title>
                                    <Row>
                                        <Col sm={3}>
                                            <h5>Booking Details</h5>
                                            <p>Destination</p>
                                            <p>Package Group</p>
                                            <p>Package Name</p>
                                            <br />
                                            <span>Adults: Children: </span>
                                            <p><strong>Rp. xxxx.-</strong></p>
                                        </Col>
                                        <Col sm={1}>
                                            <div style={{ borderLeft: "1px solid black", height: "100%" }}></div>
                                        </Col>
                                        <Col sm={8}>
                                            <div>
                                                <form>
                                                    <div>
                                                        <label>Select Payment Method</label>
                                                        <select className="form-control" name="paymentType" value={this.state.paymentType} onChange={this.handlePaymentChange}>
                                                            <option value="select">Select</option>
                                                            <option value="cc">Credit Card</option>
                                                            <option value="tf">Bank Transfer Virtual Account</option>
                                                        </select>
                                                        <p>{this.state.paymentType}</p>
                                                        {paymentForm}
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

export default PaymentInfo;