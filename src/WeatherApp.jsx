import { useEffect, useState } from 'react'
import SearchTab from './SearchTab'
import WeatherInfo from './WeatherInfo'

export default function WeatherApp(){
    let API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    let key = import.meta.env.VITE_API_KEY;
    let [weather, setWeather] = useState(null);

    let getWeather = async (city) => {
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${key}&units=metric`);
            if(!res.ok){
                throw new Error('No data found!');
            }
            let data = await res.json();
            return data;
        }catch(err){
            throw err;
        }
    }

    useEffect(() => {
        let fetchData = async () => {
            let data = await getWeather('delhi');
            setWeather(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <SearchTab getWeather={getWeather} setWeather={setWeather}/>
            <WeatherInfo weather={weather}/>
        </>
    )
}