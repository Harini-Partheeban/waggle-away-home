import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PawPrint, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Our Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Register", href: "#register" },
    { label: "Contact Us", href: "#contact" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Insurance Info", href: "#" },
    { label: "Safety Guidelines", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-pet-orange-light/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pet-orange to-pet-blue flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">PetCare Home</h3>
                <p className="text-sm text-muted-foreground">Loving care when you're not there</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professional pet care services that give you peace of mind while you're away. 
              Your pets deserve the best care, and we're here to provide it.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-pet-orange hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-pet-orange hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-pet-orange hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-pet-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-pet-orange" />
                <span>(555) 123-PETS</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-pet-orange" />
                <span>hello@petcarehome.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-pet-orange" />
                <span>Serving Your Local Area</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium text-foreground mb-2">Emergency Hotline</h5>
              <p className="text-pet-orange font-semibold">(555) 911-PETS</p>
              <p className="text-sm text-muted-foreground">Available 24/7</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 PetCare Home. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-sm text-muted-foreground hover:text-pet-orange transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;