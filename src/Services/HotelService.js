import {HOTEL_URL} from './../Constants';
import axios from 'axios';

const HotelService={
    hotelByDestinationAndGroup(destination,group){ //contoh=destinatino=Baluran Sabana Park&group=Camper
        return axios.get(`${HOTEL_URL}/?destination=${destination}&group=${group}`);
    },
    hotelByDestination(destination){
        return axios.get(`${HOTEL_URL}/?destination=${destination}`);
    },
    hotelAggregateDestination(destId){
        return axios.get(`${HOTEL_URL}/aggregate?destinationId=${destId}`)
    }
}

export default HotelService;