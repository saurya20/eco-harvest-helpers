
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const { username } = useUser();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-forest-dark">PlantGuard Dashboard</h1>
            <p className="text-gray-600">Welcome back, {username}</p>
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
