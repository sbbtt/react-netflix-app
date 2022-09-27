import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: process.env.ENHANCED_MOVIE_DB_APIKEY,
        language: 'ko-KR'
    },
}
)

export default instance;