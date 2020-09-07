import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

axios.defaults.baseURL = BASE_URL;

export {axios};