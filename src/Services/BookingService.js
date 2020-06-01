import {BOOKING_URL,CUSTOMER_BOOKING_URL,ACCESS_TOKEN} from '../Constants';
import axios from 'axios';

const BookingService={
    setStatus(stat){
        localStorage.setItem('ittbook',stat);
    },
    getStatus(){
       return localStorage.getItem('ittbook');
    },
    clearStatus(){
        localStorage.clear();
    },
    checkAvailable(date){
        
    },
    initBook(request){
        let AuthStr = '';
        if (sessionStorage.getItem(ACCESS_TOKEN)) {
            AuthStr = 'Bearer '.concat(sessionStorage.getItem(ACCESS_TOKEN));
        }
        return axios.post(`${BOOKING_URL}`,request,{ headers: { 'Authorization': AuthStr } });
    },
    updatePayment(request){
        let AuthStr = '';
        if (sessionStorage.getItem(ACCESS_TOKEN)) {
            AuthStr = 'Bearer '.concat(sessionStorage.getItem(ACCESS_TOKEN));
        }
        return axios.put(`${BOOKING_URL}/payment`,request,{ headers: { 'Authorization': AuthStr } });
    },
    loadBookingByCode(code){
        return axios.get(`${CUSTOMER_BOOKING_URL}/${code}`);
    },
    loadBookingByCustomer(id){
        let AuthStr = '';
        if (sessionStorage.getItem(ACCESS_TOKEN)) {
            AuthStr = 'Bearer '.concat(sessionStorage.getItem(ACCESS_TOKEN));
        }
        return axios.get(`${BOOKING_URL}/customer/${id}`,{headers:{'Authorization':AuthStr}});
    }
}

export default BookingService;