import axios from 'axios';

const getData = axios.create({
    baseURL : "https://api.themoviedb.org/3",
});

export default getData;
