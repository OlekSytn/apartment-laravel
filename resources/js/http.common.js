import axios from 'axios';
axios.defaults.withCredentials = true
export const HTTP = axios.create({
    baseURL: `http://cetsuites.devio/`
});
