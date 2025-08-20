import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  MessageCircle, 
  MapPin, 
  AlertTriangle, 
  Stethoscope, 
  Heart,
  Clock,
  Shield,
  Users,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-pediatric.jpg";
import hospitalImage from "@/assets/hospital.jpg";

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Appointment Booking",
      description: "Book appointments with our pediatric specialists quickly and conveniently",
      link: "/appointments",
      color: "primary"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Ambulance",
      description: "24/7 pediatric ambulance service with direct doctor connectivity",
      link: "/emergency",
      color: "emergency"
    },
    {
      icon: MessageCircle,
      title: "Chat with Pediatrician",
      description: "Get instant medical advice from certified pediatric doctors",
      link: "/chat",
      color: "secondary"
    },
    {
      icon: Stethoscope,
      title: "Symptom Checker",
      description: "Child-friendly symptom assessment with parental guidance",
      link: "/symptoms",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Vaccination Reminders",
      description: "Never miss important vaccinations with smart reminders",
      link: "/vaccinations",
      color: "secondary"
    },
    {
      icon: MapPin,
      title: "Find Nearby Hospitals",
      description: "Locate the nearest Manipal Hospital for quick access",
      link: "/locations",
      color: "primary"
    }
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "Children Treated" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Care" },
    { icon: Shield, number: "100%", label: "Child Safety" }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-background leading-tight">
                  Trusted Pediatric
                  <span className="block text-secondary-light">Healthcare</span>
                </h1>
                <p className="text-xl text-background/90 mt-6 max-w-lg">
                  Comprehensive pediatric care with advanced technology, compassionate doctors, and child-friendly facilities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-background text-primary hover:bg-background/90 shadow-medical text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/appointments">Book Appointment</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-background/50 bg-background/10 text-background hover:bg-background hover:text-primary text-lg px-8 py-6 backdrop-blur-sm"
                  asChild
                >
                  <Link to="/emergency">Emergency Care</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Pediatric healthcare" 
                className="rounded-2xl shadow-medical w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-medical">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-secondary p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">24/7 Care Available</p>
                    <p className="text-sm text-muted-foreground">Always here for your child</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-card-medical">
                <CardContent className="pt-6">
                  <div className="bg-gradient-primary p-3 rounded-lg inline-block mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Pediatric Care Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for your child's healthcare journey, from routine checkups to emergency care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = feature.color === 'emergency' ? 'bg-gradient-emergency' : 
                              feature.color === 'secondary' ? 'bg-gradient-secondary' : 'bg-gradient-primary';
            
            return (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                <CardHeader>
                  <div className={`${colorClass} p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    asChild
                  >
                    <Link to={feature.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gradient-card">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={hospitalImage} 
                alt="Manipal Hospital" 
                className="rounded-2xl shadow-medical w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Why Choose Manipal Pediatric Care?
              </h2>
              <div className="space-y-4">
                {[
                  "Expert pediatricians with 25+ years experience",
                  "Child-friendly facilities and environment",
                  "24/7 emergency pediatric care available",
                  "Advanced diagnostic and treatment facilities",
                  "Comprehensive vaccination programs",
                  "Family-centered care approach"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gradient-secondary p-1 rounded-full mt-1">
                      <Heart className="h-4 w-4 text-secondary-foreground" />
                    </div>
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-gradient-primary shadow-medical" asChild>
                <Link to="/appointments">Start Your Child's Care Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;