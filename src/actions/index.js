import axios from 'axios';

const API_KEY ='96ceeb840628323adbfcbf43ff6d3db8';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER'; 

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},IT`;
    //$.get(url); --> axios
    const request = axios.get(url); // return Promise

    return(
        {
            type : FETCH_WEATHER,
            payload: request
        }
    );
}