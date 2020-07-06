import React, { Fragment } from 'react';
import './HotelSearchResultContent.css';
import styled from 'styled-components';
import { Table, Card, ListGroup, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import HotelSearchResultElement from './HotelSearchResultElement';

const HotelSearchResultContent = (props) => {
    const queryParam=props.location.search;
    const ResultHeader = styled.section`
    display:flex;
    width: 100vw;
    max-width: 100%;
    max-height:100%
    position: relative;
    background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)),
    url('${props.imageUrl}') no-repeat center center/cover;
    `
  
    return (
        <Fragment>
            <ResultHeader>
                <div className="result-content">
                    <h1 className="result-title">{props.data.destination}</h1>
                    <h3 className="result-subtitle">{props.data.location}</h3>
                    
                </div>
            </ResultHeader>
            <div className="result-package">
                <h1 className="result-package-title">Your Search Results</h1>
                <div className="result-line"></div>
                <div className="result-package-list">
                  {
                      props.hotels.map((t)=>(
                        <HotelSearchResultElement data={t}/>
                      ))
                  }
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(HotelSearchResultContent);