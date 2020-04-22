import React from 'react';
import './Booking.css';
import { Container, Row, Card, Col } from 'react-bootstrap';

class PersonalInfo extends React.Component{
    constructor(props){
        super(props);
        this.handleMount=this.handleMount.bind(this);
    }
    handleMount(){
        let footer=document.querySelector(".app-footer");
        footer.style['margin-top']="30em";
        let footerButton=document.querySelector(".footer-buttons");
        footerButton.style['margin-top']="-375px";
        footerButton.style['margin-right']="50px";
    }
    componentDidMount(){
        this.handleMount();
    }
    render(){
        return(
            <div className="booking-step-header">
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
                                    <Card.Title>Customer Information</Card.Title>    
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

export default PersonalInfo;