import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-forest-dark">PlantGuard Dashboard</h1>
            <p className="text-gray-600">Welcome back, Farmer</p>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="border-forest text-forest hover:bg-forest hover:text-white"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
};