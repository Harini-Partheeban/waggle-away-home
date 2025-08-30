import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Heart, Clock, Camera, Gamepad2, Stethoscope } from "lucide-react";
import diversePets from "@/assets/diverse-pets.jpg";
import exoticPets from "@/assets/exotic-pets.jpg";
import aquariumCare from "@/assets/aquarium-care.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "In-Home Pet Sitting",
      description: "Your pets stay comfortable in their familiar environment while you're away.",
      features: ["Daily visits", "Overnight stays", "House security"],
      popular: true
    },
    {
      icon: Heart,
      title: "Pet Companionship",
      description: "Loving attention, playtime, and companionship for your furry friends.",
      features: ["Interactive play", "Cuddle time", "Behavioral support"],
      popular: false
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Care that fits your schedule - from quick check-ins to extended stays.",
      features: ["Hourly visits", "Multi-day care", "Emergency availability"],
      popular: false
    },
    {
      icon: Camera,
      title: "Daily Updates",
      description: "Photo and video updates so you can see how your pets are doing.",
      features: ["Photo reports", "Video calls", "Real-time updates"],
      popular: false
    },
    {
      icon: Gamepad2,
      title: "Exercise & Play",
      description: "Keep your pets active and entertained with structured playtime.",
      features: ["Walking services", "Indoor games", "Mental stimulation"],
      popular: false
    },
    {
      icon: Stethoscope,
      title: "Health Monitoring",
      description: "Careful attention to your pet's health and medication schedules.",
      features: ["Medication admin", "Health checks", "Vet coordination"],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-pet-orange-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Pet Care Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care tailored to your pet's unique needs and personality
          </p>
        </div>
        
        {/* Pet Images Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src={diversePets} 
              alt="Diverse pets including birds, small mammals, and traditional pets" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pet-orange/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">All Pet Types</h3>
              <p className="text-sm opacity-90">Dogs, cats, birds & more</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src={exoticPets} 
              alt="Exotic pets care including birds and small mammals" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pet-blue/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Exotic Care</h3>
              <p className="text-sm opacity-90">Specialized exotic pet services</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src={aquariumCare} 
              alt="Aquarium and fish care services" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pet-green/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Aquatic Friends</h3>
              <p className="text-sm opacity-90">Fish & aquarium maintenance</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                {service.popular && (
                  <Badge className="w-fit mx-auto mb-2 bg-pet-orange text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-pet-orange to-pet-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pet-orange"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;