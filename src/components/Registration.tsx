import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail, User, Phone, Building2 } from "lucide-react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    // Add registration logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--neon-blue)/0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Register Now
            </h2>
            <p className="text-xl text-muted-foreground">
              Secure your spot in the ultimate DSA challenge
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-3xl border border-primary/30 bg-glass/40 backdrop-blur-xl animate-slide-in-up"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <Label htmlFor="name" className="text-foreground mb-2 block">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-secondary/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <Label htmlFor="email" className="text-foreground mb-2 block">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-secondary/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="group">
                <Label htmlFor="phone" className="text-foreground mb-2 block">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-secondary/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              {/* College Field */}
              <div className="group">
                <Label htmlFor="college" className="text-foreground mb-2 block">
                  College/University
                </Label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="college"
                    name="college"
                    type="text"
                    required
                    value={formData.college}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-secondary/50 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your institution name"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_hsl(var(--neon-blue)/0.5)] transition-all duration-300"
              >
                Complete Registration
              </Button>
            </div>

            {/* Info Text */}
            <p className="text-sm text-muted-foreground text-center mt-6">
              By registering, you agree to participate in all three rounds and follow the competition guidelines.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
