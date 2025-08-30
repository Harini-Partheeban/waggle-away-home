import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import rescueHero from "@/assets/rescue-hero.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, MapPin, Phone, Calendar, DollarSign, Users, Shield } from "lucide-react";

const Rescue = () => {
  const rescueServices = [
    {
      icon: Heart,
      title: "Emergency Rescue",
      description: "24/7 emergency response for animals in immediate danger or distress.",
      features: ["Immediate response", "Medical assessment", "Safe transport"]
    },
    {
      icon: Shield,
      title: "Rehabilitation",
      description: "Comprehensive care to help rescued animals recover and thrive.",
      features: ["Medical treatment", "Behavioral therapy", "Nutrition support"]
    },
    {
      icon: Users,
      title: "Foster Program",
      description: "Temporary homes for rescued animals while they await permanent adoption.",
      features: ["Loving foster families", "Regular health checks", "Adoption preparation"]
    }
  ];

  const rescueStats = [
    { number: "2,500+", label: "Animals Rescued" },
    { number: "95%", label: "Adoption Rate" },
    { number: "200+", label: "Foster Families" },
    { number: "24/7", label: "Emergency Response" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${rescueHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pet-blue/90 via-pet-blue/60 to-pet-orange/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Rescue & Rehabilitation
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Saving Lives
              <span className="block bg-gradient-to-r from-white to-pet-orange-light bg-clip-text text-transparent">
                One Paw at a Time
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join our mission to rescue, rehabilitate, and rehome stray animals. Together, we can give every animal the loving home they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Heart className="w-5 h-5 mr-2" />
                Report a Stray
              </Button>
              <Button variant="soft" size="lg" className="text-lg px-8 py-4">
                <DollarSign className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {rescueStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-gradient-to-br from-pet-orange-light/20 to-pet-blue/10">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-pet-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rescue Services */}
      <section className="py-20 bg-gradient-to-b from-background to-pet-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Rescue Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive rescue operations from emergency response to successful adoption
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rescueServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-pet-blue to-pet-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* How to Help Section */}
      <section className="py-20 bg-gradient-to-b from-pet-orange-light/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How You Can Help
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every action counts in saving and improving the lives of stray animals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <MapPin className="w-12 h-12 text-pet-orange mx-auto mb-4" />
              <h3 className="font-bold mb-2">Report Strays</h3>
              <p className="text-sm text-muted-foreground">
                Help us locate animals in need of rescue and care
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <Heart className="w-12 h-12 text-pet-blue mx-auto mb-4" />
              <h3 className="font-bold mb-2">Foster</h3>
              <p className="text-sm text-muted-foreground">
                Provide temporary loving homes for rescued animals
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <DollarSign className="w-12 h-12 text-pet-green mx-auto mb-4" />
              <h3 className="font-bold mb-2">Donate</h3>
              <p className="text-sm text-muted-foreground">
                Support our rescue operations and medical care
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <Users className="w-12 h-12 text-pet-orange mx-auto mb-4" />
              <h3 className="font-bold mb-2">Volunteer</h3>
              <p className="text-sm text-muted-foreground">
                Join our team of dedicated animal rescue volunteers
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Contact Rescue Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rescue;