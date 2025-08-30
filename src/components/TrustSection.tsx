import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Star, Award, Heart, CheckCircle, Clock } from "lucide-react";

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Fully Insured & Bonded",
      description: "Complete insurance coverage for your peace of mind",
      highlight: "100% Protected"
    },
    {
      icon: Star,
      title: "5-Star Rated Service",
      description: "Thousands of happy pet parents trust us with their furry family",
      highlight: "4.9/5 Rating"
    },
    {
      icon: Award,
      title: "Verified Caregivers",
      description: "Background-checked, trained, and passionate pet lovers",
      highlight: "Certified Pros"
    },
    {
      icon: Heart,
      title: "Pet Safety First",
      description: "GPS tracking, emergency protocols, and 24/7 support",
      highlight: "Always Safe"
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "Money-back guarantee if you're not completely satisfied",
      highlight: "Guaranteed"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for any concerns",
      highlight: "Always Here"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Pets Cared For" },
    { number: "5,000+", label: "Trusted Pet Parents" },
    { number: "500+", label: "Verified Caregivers" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-pet-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-pet-green text-white px-4 py-2">
            Trusted by Pet Parents Everywhere
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Pet Parents Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your pet's safety and happiness are our top priorities. Here's what sets us apart.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pet-orange mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pet-orange to-pet-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs bg-pet-orange-light text-pet-orange">
                        {feature.highlight}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Testimonial Quote */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="bg-gradient-to-r from-pet-orange/10 to-pet-blue/10 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                "We've trusted them with our dogs for over 2 years. They treat our pets like family!"
              </div>
              <div className="text-muted-foreground">
                - Sarah & Mike Johnson, Pet Parents
              </div>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-pet-orange text-pet-orange" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;