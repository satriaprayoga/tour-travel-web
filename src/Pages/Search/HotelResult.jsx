import React, { Fragment } from 'react';
import qs from 'qs';
import { Navbar, Nav } from 'react-bootstrap';
import SearchNavbar from '../../Components/Booking/SearchNavbar';
import SearchResultContent from '../../Components/Booking/SearchResultContent';
import defaultImage from '../../assets/Beautifulsea.jpg';
import hotelImage from '../../assets/camper.jpg';
import DestinationService from '../../Services/DestinationService';
import HotelService from '../../Services/HotelService';
import HotelSearchResultContent from '../../Components/Hotel/HotelSearchResultContent';

class HotelResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: {},
            hotels: [],
        }
        this.loadDestination = this.loadDestination.bind(this);
        this.loadHotelsElementsByQuery = this.loadHotelsElementsByQuery.bind(this);
    }

    loadDestination(code) {
        DestinationService.destinationByCode(code).then((resp) => {
            this.setState({
                destination: resp.data
            })

        })
    }


    loadHotelsElementsByQuery(dest, type) {
        HotelService.hotelByDestinationAndGroup(dest,type).then((resp) => {
            console.log(resp.data);
            const dataHotels = resp.data;
            const hotels = [];
            dataHotels.map((h) => (
                hotels.push({
                    capacity: h.capacity,
                    destination: h.destination,
                    destinationId: h.destinationId,
                    hotelGroup: h.hotelGroup,
                    id: h.id,
                    location: h.location,
                    minOrder: h.minOrder,
                    name: h.name,
                    price: h.price,
                    published: h.published,
                    unit: h.unit,
                    imageUrl: hotelImage
                })
            ));
            this.setState({ hotels: hotels })
        });
        
    }

    componentDidMount() {
        const params = qs.parse(this.props.location.search);
        //  console.log(params);
        const destP = params['?dest'];
        const g=params['g'];
        DestinationService.destinationByCode(destP).then((resp) => {
            this.setState({
                destination: resp.data
            });
            this.loadHotelsElementsByQuery(resp.data.destination,params['g']);
            

        })
        
    }

    render() {
        return (
            <Fragment>
                <HotelSearchResultContent imageUrl={defaultImage} data={this.state.destination} hotels={this.state.hotels} />
            </Fragment>
        )
    }


}

export default HotelResult;