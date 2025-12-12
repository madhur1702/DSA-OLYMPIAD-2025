import Hero from "@/components/Hero";
import About from "@/components/About";
import EventTimeline from "@/components/EventTimeline";
import Prizes from "@/components/Prizes";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <EventTimeline />
      <Prizes />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
