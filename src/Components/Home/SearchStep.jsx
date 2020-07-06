import React, { Component } from 'react';
import PopularHotel from './Popularhotel';
import SearchDestination from './SearchDestination';
import Camper from './pophotel/Camper';
import Glamcamp from './pophotel/Glamcamp';
import Homestay from './pophotel/Homestay';
import HotelSearchResult from './HotelSearchResult';
import SelectedType from './pophotel/SelectedType';

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

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    nextStepglam = () => {
        const { step } = this.state;
        this.setState({ step: step + 2 });
    };

    prevStepglam = () => {
        const { step } = this.state;
        this.setState({ step: step - 2 });
    };

    nextStephome = () => {
        const { step } = this.state;
        this.setState({ step: step + 3 });
    };

    prevStephome = () => {
        const { step } = this.state;
        this.setState({ step: step - 3 });
    };

    nextStepse = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStepse = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
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
                    <HotelSearchResult
                    nextStep={this.nextStep}
                    nextStepglam={this.nextStepglam}
                    nextStephome={this.nextStephome}
                    inputChange={this.inputChange}
                    values={values}
                    />
                );
            case 3:
                    return (
                        <SelectedType prevStep={this.prevStep}/>
                    );
            case 4:
                    return (
                        <Glamcamp
                            prevStepglam={this.prevStepglam}
                            inputChange={this.inputChange}
                            values={values}
                        />
                    );
            case 5:
                    return (
                        <Homestay
                            prevStephome={this.prevStephome}
                            inputChange={this.inputChange}
                            values={values}
                        />
                    );
        }
    }
}

export default SearchStep