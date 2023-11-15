import axios from 'axios';

const API = axios.create({
    baseURL: 'https://cold-berries-fold.loca.lt', 
});

export default API;
