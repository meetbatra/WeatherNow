import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchTab.css'

export default function SearchTab({getWeather, setWeather}){
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);
    
    let handleCityInput = (evt) => {
        setCity(evt.target.value);
    }
    
    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            setCity('');
            let weather = await getWeather(city);
            setWeather(weather);
            setError(false);
        }catch(err){
            setError(true);
        }
    }

    return(
        <div className='SearchTab'>
            <form onSubmit={handleSubmit}>
                <div className="city-inp">
                    <TextField sx={{width: "100%", backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: "5px"}} id="city" label="City" variant="outlined" value={city} onChange={handleCityInput} required />
                </div>
                <div className="city-btn">
                    <Button variant="contained" type="submit" size="small">Search</Button>
                </div>
                {error && <p style={{color: 'red'}}>No data found!</p>}
            </form>
        </div>
    )
}