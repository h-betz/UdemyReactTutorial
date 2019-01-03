import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ae76c99633e8820c54107865c51f055f04c1cc5599b1a75f996340dd921628d0'
    }
})