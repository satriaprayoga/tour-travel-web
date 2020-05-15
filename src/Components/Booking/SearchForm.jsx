import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            destination:"",
            landmark:"",
            group:""
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:[event.target.value]
        });
        switch(event.target.name){
            case "destination":
                console.log('destination');
                
                break;
            case "landmark":
                console.log('landmark');
                break;
            case 'group':
                console.log('group');
            default:
                break;
        }

    }

    handleClick(){
      const {destination,landmark,group}=this.state;
      const dest=destination===''?'':'?dest='+destination;
      const l=landmark===''?'':'&l='+landmark;
      const g=group===''?'':'&g='+group;
      const queryString=`${dest}${l}${g}`;
      console.log(queryString);
      this.props.history.push(`/searchResult/${queryString}`);
                           //this.props.history.push(`/searchResult?dest=${this.state.destination}&l=${this.state.landmark}&g=${this.state.group}`)
    }

    render(){
        return (
            <div className="searchpackage-search">
            <div className="search-container">
                <div className="search-container-form">
                    <div className="searchpackage-form-container">
                        <div className="find_form">
                                <div className="find_item">
                                    <div>Destination</div>
                                    <select className="find_select" name="destination" onChange={this.handleChange} value={this.state.destination}>
                                        <option value="" selected>Select destination</option>
                                        <option value="BLRN" >Baluran Sabana Park</option>
                                        <option value="PNCK" >Puncak Cibodas Nirwana</option>
                                    </select>
                                   
                                </div>
                                <div className="find_item">
                                    <div>Landmark</div>
                                    <select className="find_select" name="landmark" onChange={this.handleChange} value={this.state.landmark}>
                                        <option value="" selected>Select Landmark</option>
                                        <option value="Gua Jepang" >Gua Jepang</option>
                                        <option value="Pantai B" >Pantai B</option>
                                    </select>
                                   
                                </div>
                                <div className="find_item">
                                    <div>Package</div>
                                    <select className="find_select" name="group" onChange={this.handleChange} value={this.state.group}>
                                        <option value="" selected>Select Group</option>
                                        <option value="Paket Hemat" >Paket Hemat</option>
                                        <option value="Paket Family" >Paket Family</option>
                                    </select>
                                   
                                </div>
                                
                                <button className="find_button" onClick={this.handleClick}>Find</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(SearchForm);