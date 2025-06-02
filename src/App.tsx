import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Sun, Thermometer } from "lucide-react";
import { useState } from "react";
import DetailsWeather from "./components/DetailsWeather";
import { Header } from "./components/Header";
import { useWeather } from "./hooks/useWeather";
import { formatTime } from "./utils/formatTime";
import { getWeatherIcon } from "./utils/getWeatherIcon";
import { handleSearch } from "./utils/handleSearch";

export default function App() {
  const { weatherData, loading, error, fetchWeather } = useWeather();
  const [query, setQuery] = useState("");
  console.log("weatherData", weatherData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <Header />
        {/* Search */}
        <Card className="max-w-md mx-auto mb-8">
          <CardContent className="p-4">
            <form onSubmit={handleSearch(fetchWeather)} className="flex gap-2">
              <Input
                name="query"
                type="text"
                placeholder="Enter a location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
              </Button>
            </form>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </CardContent>
        </Card>
        {loading && <h1 className="text-white text-center">Loading . . . .</h1>}

        {weatherData && weatherData.location && (
          <div className="max-w-4xl mx-auto">
            {/* Main Weather Card */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {weatherData.location.name}, {weatherData.location.region},{" "}
                    {weatherData.location.country}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatTime(weatherData.location.localtime)}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getWeatherIcon(
                      weatherData.current.weather_descriptions[0]
                    )}
                    <div>
                      <div className="text-5xl font-bold">
                        {weatherData.current.temperature}°C
                      </div>
                      <div className="text-lg text-muted-foreground">
                        feels like {weatherData.current.feelslike}°C
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {weatherData.current.weather_descriptions[0]}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Weather Details Grid */}
            <DetailsWeather data={weatherData} />
            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5" />
                    Temperature Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Current Temperature:</span>
                      <span className="font-semibold">
                        {weatherData.current.temperature}°C
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Feels Like:</span>
                      <span className="font-semibold">
                        {weatherData.current.feelslike}°C
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="w-5 h-5" />
                    UV Index & Rainfall
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>UV Index:</span>
                      <span className="font-semibold">
                        {weatherData.current.uv_index}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rainfall:</span>
                      <span className="font-semibold">
                        {weatherData.current.precip} mm
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
