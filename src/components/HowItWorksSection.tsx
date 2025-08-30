import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, Calendar, Heart } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account and tell us about your pets",
      details: "Quick registration with pet profiles and care preferences"
    },
    {
      icon: Search,
      title: "Find Caregivers",
      description: "Browse and connect with verified pet care professionals",
      details: "View profiles, reviews, and availability in your area"
    },
    {
      icon: Calendar,
      title: "Book Service",
      description: "Schedule care that fits your travel dates",
      details: "Flexible booking with instant confirmation"
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "Receive updates and enjoy your time away",
      details: "Daily photos, videos, and care reports"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Find trusted pet care in just a few steps.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-pet-orange/20">
                  <CardContent className="p-0">
                    <div className="relative mb-6">
                      <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-pet-orange to-pet-blue flex items-center justify-center mb-4">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-pet-blue text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {step.description}
                    </p>
                    <p className="text-sm text-pet-orange font-medium">
                      {step.details}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-pet-orange to-pet-blue"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="lg" className="text-lg px-12 py-4">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;