import { Cloud, CloudRain, CloudSnow, Sun } from "lucide-react";

export const getWeatherIcon = (description?: string) => {
  if (!description) return <Sun className="w-8 h-8 text-yellow-500" />;
  const desc = description.toLowerCase();
  if (desc.includes("sunny") || desc.includes("clear"))
    return <Sun className="w-8 h-8 text-yellow-500" />;
  if (desc.includes("cloud"))
    return <Cloud className="w-8 h-8 text-gray-500" />;
  if (desc.includes("rain") || desc.includes("drizzle"))
    return <CloudRain className="w-8 h-8 text-blue-500" />;
  if (desc.includes("snow"))
    return <CloudSnow className="w-8 h-8 text-blue-200" />;
  return <Sun className="w-8 h-8 text-yellow-500" />;
};
