import Header from "@/components/portal/Header";
import HeroSection from "@/components/portal/HeroSection";
import DashboardGrid from "@/components/portal/DashboardGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DashboardGrid />
    </div>
  );
};

export default Index;
