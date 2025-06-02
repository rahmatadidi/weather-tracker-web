import type { WeatherDataTypes } from "@/types/weather";
import { Droplets, Eye, Gauge, Wind } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface DetailsWeatherProps {
  data: WeatherDataTypes;
}

export default function DetailsWeather({ data }: DetailsWeatherProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">Weather Details</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card Wind */}
        <Card>
          <CardContent className="p-4 text-center">
            <Wind className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{data.current.wind_speed}</div>
            <div className="text-sm text-muted-foreground">
              km/h {data.current.wind_dir}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Wind Velocity
            </div>
          </CardContent>
        </Card>
        {/* Card Humidity */}
        <Card>
          <CardContent className="p-4 text-center">
            <Droplets className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{data.current.humidity}</div>
            <div className="text-sm text-muted-foreground">%</div>
            <div className="text-xs text-muted-foreground mt-1">Humidity</div>
          </CardContent>
        </Card>
        {/* Card Pressure */}
        <Card>
          <CardContent className="p-4 text-center">
            <Gauge className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{data.current.pressure}</div>
            <div className="text-sm text-muted-foreground">mb</div>
            <div className="text-xs text-muted-foreground mt-1">Pressure</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Eye className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{data.current.visibility}</div>
            <div className="text-sm text-muted-foreground">km</div>
            <div className="text-xs text-muted-foreground mt-1">Visibility</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
