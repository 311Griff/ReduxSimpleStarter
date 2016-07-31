import axios from 'axios';

const API_KEY = '9882d5617ad6a7eabb47f937ee234679';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH WEATHER';

//action creators always have to return an action... an action is an option which ALWAYS HAS TO HAVE a 'type'
export function fetchWeather(city) {
    const url=`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}