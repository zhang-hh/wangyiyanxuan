import axios from "axios";
import {BASE_URL} from '@/config';

const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 4000,
	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

instance.interceptors.request.use((config) =>{
    return config
})
instance.interceptors.response.use( (response) =>{
	return response.data;
}, function (error) {
	return Promise.reject(error);
});
export default instance;