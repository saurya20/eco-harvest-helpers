import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export const RecommendationsCard = () => {
  const recommendations = [
    {
      title: "Increase Watering",
      description: "Current soil moisture levels are below optimal.",
      priority: "high",
    },
    {
      title: "Monitor for Leaf Spot",
      description: "Early signs detected in recent uploads.",
      priority: "medium",
    },
    {
      title: "Apply Organic Fertilizer",
      description: "Scheduled maintenance due in 2 days.",
      priority: "low",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-white rounded-lg border"
          >
            <div className="flex-shrink-0">
              <Check className="w-6 h-6 text-forest" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{rec.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(
                    rec.priority
                  )}`}
                >
                  {rec.priority}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};