import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingPackage.css';
import Firebase from 'firebase';
import firebaseConfig from '../../Services/MockupService';
import searchBg from '../../search-bg.png';
import { withRouter } from 'react-router-dom';

class BookingPackage extends React.Component {
    constructor(props) {
        super(props);
        Firebase.initializeApp(firebaseConfig);
        this.state = ({
            destinations: [],
            landmarks: [],
            avaliablePacks: [],
            destination: {},
            landmark: {},
            checkIn: new Date(),
            adult: 0,
            children: 0,
            packLoading: false
        });

        this.loadPackages = this.loadPackages.bind(this);
        this.handleChangeDate=this.handleChangeDate.bind(this);
        this.gotoConfirm=this.gotoConfirm.bind(this);
    }

    handleChangeDate=(date)=>{
        this.setState({checkIn:date})
    }

    loadPackages = (e) => {
        //e.prevenDefault();
        let ref = Firebase.database().ref('/1');
        ref.on('value', snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                avaliablePacks: data,
                packLoading: true
            })
            console.log(this.state.avaliablePacks);
        });
    }

    gotoConfirm(e){
        e.preventDefault();
        this.props.history.push("/booking_confirm");
    }



    render() {
        const destinations = [
            { id: 0, name: "Baluran Sabana Park", location: "Situbondo, EastJava" }
        ]
        const landmarks = [
            {
                id: 0, name: "Goa Jepang"
            },
            {
                id: 1, name: "Pantai Balalan"
            },
            {
                id: 2, name: "Pantai Bama"
            },
            {
                id: 3, name: "Teluk Hijau"
            }
        ]
        const packs = [
            {
                id: 0, name: "Paket Hemat"
            },
            {
                id: 1, name: "Paket Family"
            }
        ]
        const selectedDate=new Date();
        return (
            <div className="booking-header">
                <Container>
                    <Row className="align-items-center">
                        <Col sm>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Search Package</Card.Title>

                                    <div>
                                        <label>Destinations</label>
                                        <select className="form-control">
                                            <option value="" selected>Select A Destination</option>
                                            {
                                                destinations.map((d) => (
                                                    <option value={d.id}>{d.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <label>Landmarks</label>
                                        <select className="form-control" as="select">
                                            <option value="" selected>Select A Landmark</option>
                                            {
                                                landmarks.map((l) => (
                                                    <option value={l.id}>{l.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <label>Package</label>
                                        <select className="form-control" as="select">
                                            <option value="" selected>Select A Package</option>
                                            {
                                                packs.map((p) => (
                                                    <option value={p.id}>{p.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-row">
                                        <Col md={6} className="form-group">
                                            <label className="form-label">Start</label>
                                            <DatePicker value={this.state.checkIn} onChange={(date)=>this.handleChangeDate(date)} selected={this.state.checkIn} />
                                        </Col>
                                        <Col md={6}>
                                            <label className="form-label">End</label>
                                            <DatePicker value={this.state.checkIn} selected={selectedDate}/>
                                        </Col>
                                    </div>
                                    <div className="form-row">
                                        <Col md={3} className="form-group">
                                            <label className="form-label">Adult</label>
                                            <input className="form-control" type="text" placeholder="Adult" />

                                        </Col>
                                        <Col md={3} className="form-group">
                                            <label className="form-label">Children</label>
                                            <input className="form-control" type="text" placeholder="Children" />

                                        </Col>
                                        <Col md={6} className="form-group">
                                            <Button type="button" style={{
                                                marginTop: "30px", width: "100%", background: "green", color: "white", border: "none"
                                                , borderRadius: 0
                                            }} onClick={(e) => this.loadPackages(e)}>Search</Button>
                                        </Col>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Available Package</Card.Title>
                                    {
                                        !this.state.packLoading ? (
                                            <p>No data</p>
                                        ) : (
                                                <div className="package-box">
                                                    <div className="d-flex align-items-start flex-column">
                                                        <div class="mb-auto p-2"><small className="text-left">{this.state.avaliablePacks.packageGroup}</small></div><br />
                                                        <div class="mb-auto p-2"><p><strong>{this.state.avaliablePacks.packageName}</strong></p></div>
                                                    </div>
                                                    <div class="d-flex flex-column">
                                                        <div class="p-2"><small>Start from</small></div>
                                                        <div class="p-2"><span className="text-nowrap"><strong style={{ fontSize: "20px" }}>{this.state.avaliablePacks.price.toLocaleString('id-ID', {
                                                            style: 'currency',
                                                            currency: 'IDR',
                                                        })}</strong></span>
                                                        </div>
                                                        <div class="p-2"><small>Min. {this.state.avaliablePacks.minOrder} person</small></div>
                                                        
                                                    </div>
                                                    <div class="d-flex flex-row-reverse">
                                                            <div class="mr-1"><Button style={{border:"none",background:"red",borderRadius:"0", width:"120px"}} onClick={(e)=>this.gotoConfirm(e)}>Book Now</Button></div>
                                                            <div class="mr-1"><Button style={{border:"none",borderRadius:"0",width:"120px"}}> Details </Button></div>
                                                    </div>
                                                </div>
                                            )
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(BookingPackage);