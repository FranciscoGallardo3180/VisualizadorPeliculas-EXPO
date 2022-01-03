import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'727f04b14b37f553e6f48ab061e67866',
        language: 'es-ES'
    }
});

export default movieDB;