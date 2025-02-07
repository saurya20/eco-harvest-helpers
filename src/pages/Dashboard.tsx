
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { UploadSection } from "@/components/dashboard/UploadSection";
import { BasicRecommendationsCard } from "@/components/dashboard/BasicRecommendationsCard";
import { HealthTrendsChart } from "@/components/charts/HealthTrendsChart";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <MetricsGrid />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <UploadSection />
          <BasicRecommendationsCard />
        </div>
        <div className="mt-6">
          <HealthTrendsChart />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
