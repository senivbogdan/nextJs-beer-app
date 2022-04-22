import axios from 'axios';

const api = axios.create({
    baseURL: `https://api.punkapi.com/v2`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export { api };
