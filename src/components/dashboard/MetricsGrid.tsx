import { Card } from "@/components/ui/card";
import { Leaf, Droplets, Thermometer, Wind } from "lucide-react";

export const MetricsGrid = () => {
  const metrics = [
    {
      title: "Plant Health Index",
      value: "87%",
      icon: Leaf,
      trend: "+2.5%",
      color: "text-forest",
    },
    {
      title: "Soil Moisture",
      value: "65%",
      icon: Droplets,
      trend: "-1.2%",
      color: "text-blue-600",
    },
    {
      title: "Temperature",
      value: "24°C",
      icon: Thermometer,
      trend: "+0.8°C",
      color: "text-orange-500",
    },
    {
      title: "Wind Speed",
      value: "12 km/h",
      icon: Wind,
      trend: "Stable",
      color: "text-gray-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{metric.title}</p>
              <h3 className="text-2xl font-bold mt-2">{metric.value}</h3>
              <p className="text-sm text-gray-500 mt-1">{metric.trend}</p>
            </div>
            <metric.icon className={`w-6 h-6 ${metric.color}`} />
          </div>
        </Card>
      ))}
    </div>
  );
};