import axios from 'axios';

const API_KEY = "AIzaSyBke5BlAfSuXq4ww9-c99zNfi02z_aEiCQ";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});