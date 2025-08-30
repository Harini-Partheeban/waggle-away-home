import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { PawPrint, MapPin, Phone, Mail } from "lucide-react";

const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
    specialNeeds: "",
    emergencyContact: "",
    agreedToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you within 24 hours to discuss your pet care needs.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pet-orange-light/20 to-background" id="register">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join Our Pet Care Family
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Register today to give your pets the loving care they deserve when you're away
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-pet-orange to-pet-blue flex items-center justify-center mb-4">
                <PawPrint className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Pet Parent Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Owner Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Mail className="w-5 h-5 text-pet-orange" />
                      Your Information
                    </h3>
                    <div>
                      <Label htmlFor="ownerName">Full Name *</Label>
                      <Input
                        id="ownerName"
                        value={formData.ownerName}
                        onChange={(e) => handleInputChange("ownerName", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Home Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Pet Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <PawPrint className="w-5 h-5 text-pet-orange" />
                      Pet Information
                    </h3>
                    <div>
                      <Label htmlFor="petName">Pet Name *</Label>
                      <Input
                        id="petName"
                        value={formData.petName}
                        onChange={(e) => handleInputChange("petName", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="petType">Pet Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("petType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select pet type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dog">Dog</SelectItem>
                          <SelectItem value="cat">Cat</SelectItem>
                          <SelectItem value="bird">Bird</SelectItem>
                          <SelectItem value="rabbit">Rabbit</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="petBreed">Breed</Label>
                      <Input
                        id="petBreed"
                        value={formData.petBreed}
                        onChange={(e) => handleInputChange("petBreed", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="petAge">Age</Label>
                      <Input
                        id="petAge"
                        value={formData.petAge}
                        onChange={(e) => handleInputChange("petAge", e.target.value)}
                        className="mt-1"
                        placeholder="e.g., 3 years"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Phone className="w-5 h-5 text-pet-orange" />
                    Additional Details
                  </h3>
                  <div>
                    <Label htmlFor="specialNeeds">Special Needs or Instructions</Label>
                    <Textarea
                      id="specialNeeds"
                      value={formData.specialNeeds}
                      onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
                      className="mt-1"
                      placeholder="Any medical conditions, dietary requirements, behavioral notes, etc."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      className="mt-1"
                      placeholder="Name and phone number"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-4">
                    <Checkbox
                      id="terms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the terms of service and privacy policy *
                    </Label>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg py-4"
                    disabled={!formData.agreedToTerms}
                  >
                    Complete Registration
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    We'll contact you within 24 hours to discuss your pet care needs
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;