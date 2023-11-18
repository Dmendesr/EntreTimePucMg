import axios from 'axios';

export const BASE_URL = 'https://small-webs-cut.loca.lt';

const API = axios.create({
    baseURL: BASE_URL,
});

export default API;
