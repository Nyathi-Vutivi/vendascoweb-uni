import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Users, Calendar } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Student Christian
            <span className="block text-primary-light">Organization</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Building a community of faith at the University of Venda. 
            Where students grow in Christ and serve together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
              Join Our Community
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
            >
              Learn More
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-2 text-primary-light" />
              <div className="text-2xl font-bold">150+</div>
              <div className="text-white/80">Active Members</div>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 mb-2 text-primary-light" />
              <div className="text-2xl font-bold">5+</div>
              <div className="text-white/80">Years Serving</div>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-8 w-8 mb-2 text-primary-light" />
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-white/80">Services</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;