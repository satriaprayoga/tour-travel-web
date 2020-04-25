import React from 'react';
import './Booking.css';
import { Container, Row, Card, Col } from 'react-bootstrap';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleMount = this.handleMount.bind(this);
    }
    handleMount() {
        let footer = document.querySelector(".app-footer");
        footer.style['margin-top'] = "30em";
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
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="form-row" style={{ paddingLeft: "20px" }}>
                                                <Col md={6} className="form-group">
                                                    <label className="form-label">Email</label>
                                                    <input className="form-control" type="text" placeholder="Adult" />

                                                </Col>
                                                <Col md={6} className="form-group">
                                                    <label className="form-label">Phone</label>
                                                    <input className="form-control" type="text" placeholder="Children" />

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