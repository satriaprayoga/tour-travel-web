import React from 'react';
import './PackageJumbo.css';
import { Jumbotron, Button } from 'react-bootstrap';
import {IoIosCalendar} from 'react-icons/io';
import {FaMoneyBillWaveAlt} from 'react-icons/fa';
import {FaClinicMedical} from 'react-icons/fa';


class PackageJumbo extends React.Component {

    render() {
        return (
            <div className="package-jumbo">
                <div className="mx-auto text-center">
                    <div className="package-header text-center">
                        <h1>Packages</h1>
                    </div>
                </div>
                <Jumbotron>
                    <h1>Make Your</h1><br/>
                    <h1>Trip Easier</h1>
                    <p>
                        <Button variant="primary">See All Package</Button>
                    </p>
                    <div className="container">
                        <div className="row text-center">
                            <h2>Prepare Your Self a Survival Guide</h2>
                        </div>
                        <div className="row text-center">
                            <div className="col">
                                <div className="row">
                                <span style={{color:"#fff",fontSize:"36px"}}><IoIosCalendar/> Best Time To GO</span>
                                </div>
                            </div>
                            <div className="col">
                            <div className="row">
                                <span style={{color:"#fff",fontSize:"36px"}}><FaMoneyBillWaveAlt/> Money And Costs</span>
                                </div>
                            </div>
                            <div className="col">
                            <div className="row">
                                <span style={{color:"#fff",fontSize:"36px"}}><FaClinicMedical/> Health and Safety</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default PackageJumbo;