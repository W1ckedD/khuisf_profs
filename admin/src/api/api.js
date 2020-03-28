import axios from 'axios';

const token = localStorage.getItem('token');

export default axios.create({baseURL: '/', headers: {
    Authorization: 'Bearer ' + token
}});