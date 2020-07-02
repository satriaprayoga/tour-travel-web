import React, { Component } from 'react';
import PopularHotel from './Popularhotel';
import SearchDestination from './SearchDestination';

export class SearchStep extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        password: '',
        facebook: '',
        twitter: '',
        github: ''
    };

    nextStepse = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStepse = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    render() {
        const { step } = this.state;
        const { name, email, phone, password, facebook, twitter, github } = this.state;
        const values = { name, email, phone, password, facebook, twitter, github };

        switch (step) {
            case 1:
                return (
                    <SearchDestination
                        nextStepse={this.nextStepse}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PopularHotel
                        prevStepse={this.prevStepse}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
        }
    }
}

export default SearchStep