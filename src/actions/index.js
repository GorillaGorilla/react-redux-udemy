import axios from 'axios';

const API_KEY = '37149a11c7658c3db9bc88353dc2a281';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    console.log('request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}