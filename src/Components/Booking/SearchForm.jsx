import React from 'react';
import { withRouter } from 'react-router-dom';
import DestinationService from '../../Services/DestinationService';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            destination:"",
            landmark:"",
            group:"",
            destinations:[],
            landmarks:[],
            enable:false
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.loadDestinations=this.loadDestinations.bind(this);
    }

    componentDidMount(){
        this.loadDestinations();
    }

    loadDestinations(){
        DestinationService.all().then((resp)=>{
            this.setState({
                destinations:resp.data
            })
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]:[event.target.value]
        });
        switch(event.target.name){
            case "destination":
                console.log(event.target.value);
                DestinationService.landmarkByDestCode(event.target.value).then((resp)=>{
                   this.setState({
                       landmarks:resp.data,
                       enable:true
                   })
                })
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
      const dest=destination===''?'':'dest='+destination;
      const l=landmark===''?'':'&l='+landmark;
      const g=group===''?'':'&g='+group;
      const queryString=`${dest}${l}${g}`;
     // console.log(queryString);
      this.props.history.push(`/searchResult?${queryString}`);
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
                                        {
                                            this.state.destinations.map((d)=>(
                                                <option value={d.code} >{d.destination}</option>
                                               
                                            ))
                                        }
                                    </select>
                                   
                                </div>
                                <div className="find_item">
                                    <div>Landmark</div>
                                    <select className="find_select" name="landmark" onChange={this.handleChange} value={this.state.landmark}>
                                        <option value="" selected>Select Landmark</option>
                                        {
                                            this.state.landmarks.map((l)=>(
                                                <option value={l.landmark}>{l.landmark}</option>
                                            ))
                                        }
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
                                
                                <button className="find_button" onClick={this.handleClick} disabled={!this.state.enable}>Find</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(SearchForm);