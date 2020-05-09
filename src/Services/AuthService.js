import axios from 'axios';
import {AUTH_URL,USER_INFO_URL,ACCESS_TOKEN} from '../Constants';

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
    }
}

export default AuthService;