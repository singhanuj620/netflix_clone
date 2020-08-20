import axios from 'axios'

export const instance = axios.create({
    baseUrl: "https://api.themoviedb.org/3"
});
