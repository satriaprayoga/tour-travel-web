import React, { Component } from 'react';
import { FaSearch, FaSuitcaseRolling, FaBusinessTime, FaUsers, FaChild} from 'react-icons/fa';

import './SearchBookForm.css';

export class SearchBookForm extends Component {

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="bofbox">
                <div className="bof">
                    <label className="boftitle"><FaSearch className="boficon"/>Destination or Property</label>
                    <input type="text" class="form-control" placeholder="Enter a Destination or Property" />
                    
                    <div class="input-grp">
                    <label className="boftitle"><FaSearch className="boficon"/>Type Property</label>
                    <select class="form-control">
                    <option >Type Property1</option>
                    <option >Type Property2</option>
                    <option >Type Property3</option>
                    <option >Type Property4</option>
                    </select>
                    </div>

                    <div class="input-grp">
                    <label className="boftitledate"><FaBusinessTime className="boficon"/>Date
                    <input type="date" class="form-control select-date" />
                    </label>
                    <label className="boftitledate"><FaBusinessTime className="boficon"/>Date
                    <input type="date" class="form-control select-date" />
                    </label>
                    </div>

                    <div class="input-grp">
                    <label className="boftitledate"><FaUsers className="boficon"/>Adult
                    <input type="number" class="form-control" value="1"/>
                    </label>
                    <label className="boftitledate"><FaChild className="boficon"/>Children
                    <input type="number" class="form-control" value="0"/>
                    </label>
                    </div>

                    <div className="input-grp">
                    <button class="form-control btn btn-primary" href="#">Search</button>
                    </div>
                    
                </div>
            </div>
            )
        }
    }
    
export default SearchBookForm