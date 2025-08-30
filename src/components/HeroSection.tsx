import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-pets.jpg";
import { Heart, Shield, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pet-orange/90 via-pet-orange/60 to-pet-blue/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Pet's
            <span className="block bg-gradient-to-r from-white to-pet-orange-light bg-clip-text text-transparent">
              Home Away From Home
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Professional, loving pet care services when you're away. Your furry family members deserve the best care, and we're here to provide it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Find Pet Care Now
            </Button>
            <Button variant="soft" size="lg" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Pet Lovers</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating cards for visual interest */}
      <div className="absolute bottom-20 left-4 hidden lg:block">
        <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <div className="text-2xl font-bold">500+</div>
          <div className="text-sm opacity-80">Happy Pets</div>
        </Card>
      </div>
      
      <div className="absolute top-32 right-4 hidden lg:block">
        <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <div className="text-2xl font-bold">24/7</div>
          <div className="text-sm opacity-80">Pet Care</div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;