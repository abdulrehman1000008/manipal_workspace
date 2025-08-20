import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Menu, 
  X, 
  Phone, 
  Calendar,
  MessageCircle,
  MapPin,
  AlertTriangle,
  Stethoscope,
  User,
  Baby
} from "lucide-react";
import manipalLogo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Heart },
    { path: "/appointments", label: "Book Appointment", icon: Calendar },
    { path: "/emergency", label: "Emergency", icon: AlertTriangle },
    { path: "/chat", label: "Chat", icon: MessageCircle },
    { path: "/pediatric", label: "Pediatric Nutrition", icon: Baby },
    { path: "/symptoms", label: "Symptom Checker", icon: Stethoscope },
    { path: "/vaccinations", label: "Vaccinations", icon: Heart },
    { path: "/locations", label: "Locations", icon: MapPin },
    { path: "/profile", label: "Profile", icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card border-b border-border shadow-card-medical sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src={manipalLogo} 
              alt="Manipal Hospitals" 
              className="h-12 w-auto"
            />
            <div>
              <span className="text-sm text-muted-foreground"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isEmergency = item.path === "/emergency";
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center space-x-2 transition-all ${
                      isEmergency
                        ? "bg-red-600 text-white hover:bg-red-700 shadow-emergency"
                        : isActive(item.path)
                          ? "bg-gradient-primary text-primary-foreground shadow-medical"
                          : "hover:bg-accent"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden xl:inline">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Emergency Button & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Mobile Emergency Button */}
            <Button
              size="sm"
              className="bg-red-600 text-white shadow-emergency animate-pulse-medical lg:hidden hover:bg-red-700"
              asChild
            >
              <Link to="/emergency" className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Emergency</span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isEmergency = item.path === "/emergency";
                return (
                  <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-full flex items-center justify-start space-x-2 transition-all ${
                        isEmergency
                          ? "bg-red-600 text-white hover:bg-red-700 shadow-emergency"
                          : isActive(item.path)
                            ? "bg-gradient-primary text-primary-foreground shadow-medical"
                            : "hover:bg-accent"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
