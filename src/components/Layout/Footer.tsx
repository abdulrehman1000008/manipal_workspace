import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";
import manipalLogo from "@/assets/logo.jpg";


const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className=" p-2 max-w-[100px] rounded-lg">
                <img src={manipalLogo} alt="" />
              </div>
              <div>
                <span className="text-xl font-bold text-primary">Manipal</span>
                <span className="text-sm text-muted-foreground block -mt-1">Pediatric Care</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Trusted pediatric healthcare with compassionate care for your child's health and well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/appointments" className="text-muted-foreground hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link to="/emergency" className="text-muted-foreground hover:text-primary transition-colors">Emergency Services</Link></li>
              <li><Link to="/chat" className="text-muted-foreground hover:text-primary transition-colors">Chat with Doctor</Link></li>
              <li><Link to="/symptoms" className="text-muted-foreground hover:text-primary transition-colors">Symptom Checker</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/vaccinations" className="text-muted-foreground hover:text-primary transition-colors">Vaccination Reminders</Link></li>
              <li><Link to="/locations" className="text-muted-foreground hover:text-primary transition-colors">Find Locations</Link></li>
              <li><Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">Manage Profile</Link></li>
              <li><span className="text-muted-foreground">24/7 Support</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 1800-102-5555</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>pediatric@manipalhospitals.com</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Multiple locations across India</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>24/7 Emergency Care</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Manipal Hospitals. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;