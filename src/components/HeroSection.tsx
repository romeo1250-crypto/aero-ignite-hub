import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional drone flying over sunset landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Badge */}
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
            <span className="mr-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
            Now shipping across Kenya
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Perspective
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
            Professional drones, cameras, and aviation accessories. From hobby pilots to commercial operators - find everything you need to soar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Button variant="hero" size="lg" className="group">
              Shop Drones
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300">Expert Support</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-white">🚚</div>
              <div className="text-sm text-gray-300">Free Delivery</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-white">✈️</div>
              <div className="text-sm text-gray-300">KCAA Compliant</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-white">🔒</div>
              <div className="text-sm text-gray-300">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;