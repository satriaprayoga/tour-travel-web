import axios from 'axios';
import {AUTH_URL,CUSTOMER_URL,ACCESS_TOKEN} from '../Constants';

const AuthService={

    register:(request)=>{
       return axios.post(`${AUTH_URL}/register`,request);
    },
    getById:(id)=>{
        return axios.get(`${AUTH_URL}/success/${id}`);
    },
    activate:(request)=>{
        return axios.put(`${AUTH_URL}/activate/`,request);
    },
    login:(request)=>{
        return axios.post(`${AUTH_URL}/login`,request);
    },
    checkEmail:(email)=>{
        return axios.get(`${AUTH_URL}/exists?email=${email}`,)
    },
    isLogin:()=>{
        return sessionStorage.getItem(ACCESS_TOKEN) && sessionStorage.getItem(ACCESS_TOKEN).length;
    },
    logout:()=>{
        sessionStorage.clear();
    },
    currentUser:()=>{
        let AuthStr = '';
        if (sessionStorage.getItem(ACCESS_TOKEN)) {
            AuthStr = 'Bearer '.concat(sessionStorage.getItem(ACCESS_TOKEN));
        }
        return axios.get(CUSTOMER_URL + "/me", { headers: { 'Authorization': AuthStr } });
    }
}

export default AuthService;