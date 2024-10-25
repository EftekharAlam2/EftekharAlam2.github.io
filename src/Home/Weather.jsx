import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FaCloudSun, FaCloud, FaSun, FaSmog, FaSnowflake, FaCloudRain, FaCloudShowersHeavy, FaTemperatureHigh, FaWind 
} from 'react-icons/fa';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Rajshahi');

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = import.meta.env.VITE_YOUR_WEATHER_KEY;
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherIcon = (description) => {
    switch (description) {
      case 'clear sky':
        return <FaSun size={50} className="text-yellow-400" />;
      case 'few clouds':
        return <FaCloudSun size={50} className="text-yellow-400" />;
      case 'scattered clouds':
      case 'broken clouds':
      case 'overcast clouds':
        return <FaCloud size={50} className="text-gray-500" />;
      case 'rain':
      case 'light rain':
        return <FaCloudRain size={50} className="text-blue-400" />;
      case 'shower rain':
        return <FaCloudShowersHeavy size={50} className="text-blue-600" />;
      case 'snow':
        return <FaSnowflake size={50} className="text-blue-200" />;
      case 'mist':
      case 'smoke':
      case 'haze':
      case 'fog':
        return <FaSmog size={50} className="text-gray-400" />;
      default:
        return <FaCloud size={50} className="text-gray-400" />;
    }
  };

  if (!weatherData) return <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
                                <span className="loading loading-bars loading-lg"></span>
                            </div>;

  return (
    <div className="flex flex-col items-center bg-blue-200 p-6 rounded-lg shadow-md max-w-lg md:max-w-3xl mx-auto md:mt-10 mb-5 mt-5">
      <h2 className="text-4xl font-bold mb-4">{weatherData.name}</h2>

      <div className="flex justify-between items-center w-full">
        {getWeatherIcon(weatherData.weather[0].description)}
        <div className="text-center">
          <p className="text-xl font-semibold uppercase">
            {weatherData.weather[0].description}
          </p>
          <p className="text-5xl font-bold">
            {weatherData.main.temp}°C
          </p>
        </div>
      </div>

      <div className="flex justify-between w-full mt-4">
        <div className="flex items-center">
          <FaTemperatureHigh className="mr-2" />
          <span>Feels like: {weatherData.main.feels_like}°C</span>
        </div>
        <div className="flex items-center">
          <FaWind className="mr-2" />
          <span>Wind: {weatherData.wind.speed} m/s</span>
        </div>
      </div>

      <div className="mt-6 w-full">
        <label className="block text-lg font-medium mb-2">Input the City Name</label>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
          className="p-2 rounded border w-full"
        />
      </div>
    </div>
  );
};

export default Weather;
