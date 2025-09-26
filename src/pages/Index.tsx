import Header from "@/components/portal/Header";
import HeroSection from "@/components/portal/HeroSection";
import NewsSection from "@/components/portal/NewsSection";
import DashboardGrid from "@/components/portal/DashboardGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <NewsSection />
      <DashboardGrid />
    </div>
  );
};

export default Index;
