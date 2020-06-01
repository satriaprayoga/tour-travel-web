import {DESTINATION_URL,LANDMARK_URL,TOUR_URL} from './../Constants';
import axios from 'axios';

const DestinationService={
    all(){
        return axios.get(DESTINATION_URL);
    },
    destinationByCode(code){
        return axios.get(`${DESTINATION_URL}/code?c=${code}`)
    },
    landmarkByDestCode(destCode){
        return axios.get(`${LANDMARK_URL}?destCode=${destCode}`);
    },
    tourByDestination(dest){
        return axios.get(`${TOUR_URL}/?destination=${dest}`);
    },
    tourByQuery(dest,landmark,group){
        return axios.get(`${TOUR_URL}/?destination=${dest}&landmark=${landmark}&group=${group}`);
    },
    tourById(id){
        return axios.get(`${TOUR_URL}/${id}`)
    },
    checkAvailableTour(packageId,bookDate,max,order){
        return axios.get(`${TOUR_URL}/check?packageId=${packageId}&bookDate=${bookDate}&max=${max}&order=${order}`);
    }
}

export default DestinationService;