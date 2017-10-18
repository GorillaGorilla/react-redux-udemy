import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `www.hello.com/${API_KEY}`;


export const FETCHWEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    

    return {
        type: FETCHWEATHER,
        payload: request
    }
}