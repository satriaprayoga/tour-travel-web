import React, { Fragment } from 'react';
import './SearchResultContent.css';
import styled from 'styled-components';
import { Table, Card, ListGroup, Button } from 'react-bootstrap';
import SearchResultElement from './SearchResultElement';

const SearchResultContent = (props) => {
    const ResultHeader = styled.section`
    display:flex;
    width: 100vw;
    max-width: 100%;
    max-height:100%
    position: relative;
    background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)),
    url('${props.imageUrl}') no-repeat center center/cover;
    `
    const pkg={
        imageUrl: "https://picsum.photos/id/13/600/100",
        name:'Paket A',
        group:'Family',
        accomodationIncluded:false,
        destination:'Situbondo, East Java',
        price:1000000,
        day:2,
        night:1,
        minOrder:2,
        unit:"person"
    }
    return (
        <Fragment>
            <ResultHeader>
                <div className="result-content">
                    <h1 className="result-title">Baluran Sabana Park</h1>
                    <h3 className="result-subtitle">Situbondo, East Java</h3>
                    <div className="result-info-container">
                        <div className="result-info">
                            <h1>Fact about Baluran Sabana Park</h1>
                            <Table borderless>
                                <tr>
                                    <td>Provider</td>
                                    <td>PT Baluran Sabana</td>
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                    <td>baluran@mail.com</td>

                                </tr>
                                <tr>
                                    <td>Landmarks</td>
                                    <td>10 landmark</td>

                                </tr>
                            </Table>
                        </div>
                    </div>
                </div>
            </ResultHeader>
            <div className="result-package">
                <h1 className="result-package-title">Your Search Results</h1>
                <div className="result-line"></div>
                <div className="result-package-list">
                    <SearchResultElement data={pkg}/>
                    <SearchResultElement data={pkg}/>
                    <SearchResultElement data={pkg}/>
                
                </div>
            </div>
        </Fragment>
    )
}

export default SearchResultContent;