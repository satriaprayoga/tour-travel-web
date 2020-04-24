import axios from 'axios';
import {AUTH_URL,USER_INFO_URL,ACCESS_TOKEN} from '../Constants';

const LoginService={
    login(request){
        return axios.post(`${AUTH_URL}/login`,request);
    },
    isLoggedIn() {
        return localStorage.getItem(ACCESS_TOKEN) && localStorage.getItem(ACCESS_TOKEN).length;
    },
    getToken() {
        return localStorage.getItem(ACCESS_TOKEN);
    },
    getAuthHeader() {
        if (localStorage.getItem(ACCESS_TOKEN)) {
            return 'Bearer '.concat(localStorage.getItem(ACCESS_TOKEN));
        }
    },
    getCurrentUser(){
        let AuthStr='';
        if (localStorage.getItem(ACCESS_TOKEN)) {
            AuthStr = 'Bearer '.concat(localStorage.getItem(ACCESS_TOKEN));
        }
        return axios.get(USER_INFO_URL,{ headers: { 'Authorization': AuthStr } });
    }
}

export default LoginService;