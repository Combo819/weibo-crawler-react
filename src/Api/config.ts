import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

axios.defaults.baseURL = BASE_URL;

export {axios};