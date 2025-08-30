import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Heart, Home, Phone } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/rescue", label: "Rescue Strays", icon: Heart },
    { href: "#contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-pet-orange">
            <Heart className="w-6 h-6" />
            PetCare Home
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-pet-orange text-white"
                      : "text-foreground hover:text-pet-orange hover:bg-pet-orange-light/20"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="sm" className="hidden sm:flex">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;