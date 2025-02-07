import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const HealthTrendsChart = () => {
  const data = [
    { date: "Mon", health: 85, moisture: 60, temperature: 22 },
    { date: "Tue", health: 82, moisture: 58, temperature: 24 },
    { date: "Wed", health: 84, moisture: 62, temperature: 23 },
    { date: "Thu", health: 87, moisture: 65, temperature: 21 },
    { date: "Fri", health: 86, moisture: 63, temperature: 22 },
    { date: "Sat", health: 89, moisture: 67, temperature: 23 },
    { date: "Sun", health: 90, moisture: 65, temperature: 24 },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Weekly Health Trends</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="health"
              stroke="#2D5A27"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="moisture"
              stroke="#3B7A36"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#8B4513"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};