import axios from "axios";

const WEATHER_API_KEY = '8a22a16e9c88b36888875591e135bd0d';

export function getWeatherData(city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}&q=${city},us&units=imperial`)
    .then(response => {console.log(response.data); return response.data;
  })
}