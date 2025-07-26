import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceTimes from "@/components/ServiceTimes";
import Mission from "@/components/Mission";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      <Hero />
      <About />
      <ServiceTimes />
      <Mission />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
