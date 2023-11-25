import axios from 'axios';

export const BASE_URL = 'https://entre-time-json.vercel.app';

const API = axios.create({
    baseURL: BASE_URL,
});

export default API;
