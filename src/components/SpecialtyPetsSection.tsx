import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import birdCare from "@/assets/bird-care.jpg";
import smallPets from "@/assets/small-pets.jpg";
import aquariumCare from "@/assets/aquarium-care.jpg";
import { Feather, Fish, Heart } from "lucide-react";

const SpecialtyPetsSection = () => {
  const specialtyServices = [
    {
      icon: Feather,
      title: "Avian Care",
      description: "Expert care for birds of all sizes - from canaries to macaws.",
      image: birdCare,
      features: ["Daily interaction", "Cage cleaning", "Feeding schedules", "Health monitoring"]
    },
    {
      icon: Fish,
      title: "Aquatic Care",
      description: "Professional aquarium maintenance and fish care services.",
      image: aquariumCare,
      features: ["Water quality testing", "Tank cleaning", "Feeding routines", "Equipment maintenance"]
    },
    {
      icon: Heart,
      title: "Small Mammals",
      description: "Loving care for rabbits, guinea pigs, hamsters, and ferrets.",
      image: smallPets,
      features: ["Habitat cleaning", "Exercise time", "Specialized diets", "Social interaction"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pet-blue/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Specialty Pet Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert care for your feathered, scaled, and small furry friends
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specialtyServices.map((service, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-pet-orange" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pet-blue"></div>
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

export default SpecialtyPetsSection;