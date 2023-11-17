import axios from 'axios';

const API = axios.create({
    baseURL: 'https://swift-states-pick.loca.lt', 
});

export default API;
