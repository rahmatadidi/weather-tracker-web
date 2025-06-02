import axios from "axios";

export const fetchWeatherData = async (location: string) => {
  const API_KEY = import.meta.env.VITE_WEATHERSTACK_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${encodeURIComponent(
    location
  )}`;

  const response = await axios.get(url);
  return response.data;
};
