import React, { Fragment } from 'react';
import qs from 'qs';
import { Navbar, Nav } from 'react-bootstrap';
import SearchNavbar from '../../Components/Booking/SearchNavbar';
import SearchResultContent from '../../Components/Booking/SearchResultContent';
import defaultImage from '../../assets/Beautifulsea.jpg';
import DestinationService from '../../Services/DestinationService';

class SearchResult extends React.Component{
    constructor(props){
        super(props);
        this.state={
            destination:{},
            tours:[],
        }
        this.loadDestination=this.loadDestination.bind(this);
        this.loadTourElementsByDestination=this.loadTourElementsByDestination.bind(this);
        this.loadTourElementsByQuery=this.loadTourElementsByQuery.bind(this);
    }

    loadDestination(code){
        DestinationService.destinationByCode(code).then((resp)=>{
            this.setState({
                destination:resp.data
            })
           
        })
    }

    loadTourElementsByDestination(dest){
        DestinationService.tourByDestination(dest).then((resp)=>{
            const dataTours=resp.data;
            const tours=[];
            dataTours.map((t)=>(
                tours.push({
                    id:t.id,
                    imageUrl: "https://picsum.photos/id/13/600/100",
                    name: t.name,
                    group: t.group,
                    accomodationIncluded: t.accomodationIncluded,
                    destination: t.location,
                    price: t.price,
                    day: t.day,
                    night: t.night,
                    minOrder: t.minOrder,
                    unit: t.unit
                })
            ));
            this.setState({tours:tours})
            console.log(this.state.tours);
        })
    }

    loadTourElementsByQuery(dest,landmark,group){
        DestinationService.tourByQuery(dest,landmark,group).then((resp)=>{
            const dataTours=resp.data;
            const tours=[];
            dataTours.map((t)=>(
                tours.push({
                    id:t.id,
                    imageUrl: "https://picsum.photos/id/13/600/100",
                    name: t.name,
                    group: t.group,
                    accomodationIncluded: t.accomodationIncluded,
                    destination: t.location,
                    price: t.price,
                    day: t.day,
                    night: t.night,
                    minOrder: t.minOrder,
                    unit: t.unit
                })
            ));
            this.setState({tours:tours})
            console.log(this.state.tours);
        })
    }

    componentDidMount(){
        const params=qs.parse(this.props.location.search);
      //  console.log(params);
        const destP=params['?dest'];
        DestinationService.destinationByCode(destP).then((resp)=>{
            this.setState({
                destination:resp.data
            });
            if(params['l'] && params['g']){
                this.loadTourElementsByQuery(resp.data.code,params['l'],params['g']);
            }else{
               this.loadTourElementsByDestination(resp.data.destination);
                
            }
           
        })
        const destination=this.state.destination;
       // console.log(destination.id)
       
        
    }

    render(){
        return(
           <Fragment>
                <SearchNavbar/>
                <SearchResultContent imageUrl={defaultImage} data={this.state.destination} tours={this.state.tours}/>
           </Fragment>
        )
    }


}

export default SearchResult;