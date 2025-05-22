import InfoCard from "./InfoCard";
import Temperature from "./Temperature";
import Typography from '@mui/material/Typography';
import './WeatherInfo.css'

export default function WeatherInfo({weather}){
    return(
        <>
            {weather !== null && <div>
                <div className="title">
                    <Typography>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} style={{height:'8rem',width:'8rem'}}></img>
                    </Typography>
                    <Typography variant="h3" component="div">
                    {weather.name}
                    </Typography>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
                    {weather.weather[0].description}
                    </Typography>
                </div>
                <Temperature temp={weather.main.temp} max={weather.main.temp_max} min={weather.main.temp_min} />
                <div className="field">
                    <InfoCard heading='Feels like' value={`${weather.main.feels_like}°C`}/>
                    <InfoCard heading='Humidity' value={`${weather.main.humidity}%`}/>
                    <InfoCard heading='Clouds' value={`${weather.clouds.all}%`}/>
                    <InfoCard heading='Wind' value={`${weather.wind.speed} m/s`}/>
                    <InfoCard heading='Sea Level Pressure' value={`${weather.main.sea_level} hPa`}/>
                    <InfoCard heading='Ground Level Pressure' value={`${weather.main.grnd_level} hPa`}/>
                </div>
            </div>}
        </>
    )
}