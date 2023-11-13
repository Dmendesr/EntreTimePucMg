import axios from 'axios';

const API = axios.create({
    BASE_URL: 'https://cold-berries-fold.loca.lt', 
});

export default API;
