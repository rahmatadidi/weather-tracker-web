export interface WeatherDataTypes {
  location: {
    name: string;
    country: string;
    region: string;
    localtime: string;
  };
  current: {
    temperature: number;
    weather_descriptions: string[];
    weather_icons: string[];
    wind_speed: number;
    wind_dir: string;
    pressure: number;
    precip: number;
    humidity: number;
    visibility: number;
    uv_index: number;
    feelslike: number;
  };
}
