import React from 'react';
import './Booking.css';
import { Container, Row, Card, Col } from 'react-bootstrap';

class PaymentInfo extends React.Component{

    render(){
        return(
            <div className="booking-header">
                <Container>
                <Row className="mt-4 align-items-center">
                        <Col sm={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Booking Details</Card.Title>    
                                </Card.Body>    
                            </Card>
                        </Col>
                        <Col sm={8}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Payment Information</Card.Title>    
                                </Card.Body>    
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2 align-items-center">
                        <Col sm={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Billing Information</Card.Title>    
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