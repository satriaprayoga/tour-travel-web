import React from 'react';
import searchBg from '../search-bg.png';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { IoIosSearch } from 'react-icons/io';
import './SearchBox.css';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-header">
                <img src={searchBg} />
                <div className="search-title">
                    <h4 className="display-4">It's time to</h4>
                    <h1 className="display-3 bold">Travel</h1>
                    <p>Search Over 100+ Destination Across The Country</p>
                </div>
                <div className="search-box">
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                            <Button variant="outline-secondary"><IoIosSearch /></Button>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Insert the Destinations" />
                    </InputGroup>
                </div>
            </div>
        )
    }
}

export default SearchBox;