import axios from 'axios';

const API = axios.create({
    baseURL: 'https://rich-carrots-cheat.loca.lt', 
});

export default API;
