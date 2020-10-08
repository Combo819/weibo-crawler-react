import axios from 'axios';

const BASE_URL = 'http://kanghuang.me:5000';

axios.defaults.baseURL = BASE_URL+'/api';

export {axios,BASE_URL};