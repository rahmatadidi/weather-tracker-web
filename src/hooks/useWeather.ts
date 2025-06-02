import { fetchWeatherData } from "@/lib/fetchWeather";
import type { WeatherDataTypes } from "@/types/weather";
import { useEffect, useState } from "react";

export function useWeather() {
  const [weatherData, setWeatherData] = useState<WeatherDataTypes | null>(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const fetchWeather = async (location: string, fromUser: boolean = false) => {
    if (!location.trim()) {
      if (fromUser) {
        setError("Please enter a location");
        setWeatherData(null);
      }
      return;
    }

    setLoading(true);
    if (fromUser) setError("");

    try {
      const data = await fetchWeatherData(location);
      setWeatherData({
        ...data,
        location: {
          ...data.location,
          name: data.location.name || location,
        },
      });
    } catch (err) {
      console.error(err);
      if (fromUser) {
        setError("Location not found");
        setWeatherData(null);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const getUserLocationAndFetchWeather = () => {
      if (!navigator.geolocation) {
        return;
      }

      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetchWeather(`${lat},${lon}`);
      });
    };

    getUserLocationAndFetchWeather();
  }, []);

  return {
    weatherData,
    loading,
    error,
    fetchWeather,
    setWeatherData,
  };
}
