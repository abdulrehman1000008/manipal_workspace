import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Clock,
  Ambulance,
  Heart,
  Activity,
  Shield,
  CheckCircle,
  User
} from "lucide-react";

const Emergency = () => {
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [ambulanceStatus, setAmbulanceStatus] = useState("");
  const { toast } = useToast();

  const emergencyTypes = [
    { 
      type: "High Fever", 
      description: "Temperature above 104°F (40°C)",
      severity: "high"
    },
    { 
      type: "Difficulty Breathing", 
      description: "Severe respiratory distress",
      severity: "critical"
    },
    { 
      type: "Severe Injury", 
      description: "Cuts, burns, or trauma",
      severity: "high"
    },
    { 
      type: "Allergic Reaction", 
      description: "Severe allergic symptoms",
      severity: "critical"
    },
    { 
      type: "Seizures", 
      description: "Convulsions or fits",
      severity: "critical"
    },
    { 
      type: "Poisoning", 
      description: "Suspected ingestion of toxic substances",
      severity: "critical"
    }
  ];

  const handleEmergencyCall = () => {
    setEmergencyActive(true);
    setAmbulanceStatus("dispatched");
    
    toast({
      title: "Emergency Alert Sent!",
      description: "Ambulance dispatched. Pediatrician has been notified.",
    });

    // Simulate ambulance tracking updates
    setTimeout(() => setAmbulanceStatus("enroute"), 2000);
    setTimeout(() => setAmbulanceStatus("arriving"), 8000);
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "dispatched": return "text-emergency";
      case "enroute": return "text-primary";
      case "arriving": return "text-secondary";
      default: return "text-muted-foreground";
    }
  };

  const getStatusMessage = (status: string) => {
    switch(status) {
      case "dispatched": return "Ambulance dispatched - ETA 12 minutes";
      case "enroute": return "Ambulance en route - ETA 8 minutes";
      case "arriving": return "Ambulance arriving soon - ETA 2 minutes";
      default: return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Emergency Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <AlertTriangle className="h-8 w-8 text-emergency animate-emergency-blink" />
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Pediatric Emergency</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          24/7 emergency pediatric care with immediate ambulance dispatch
        </p>
      </div>

      {emergencyActive && (
        <Card className="bg-gradient-emergency text-emergency-foreground border-0 shadow-emergency animate-slide-up">
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Ambulance className="h-8 w-8 animate-pulse-medical" />
              <div className="text-center">
                <h2 className="text-2xl font-bold">Emergency Activated</h2>
                <p className={`text-lg ${getStatusColor(ambulanceStatus)}`}>
                  {getStatusMessage(ambulanceStatus)}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <Phone className="h-6 w-6 mx-auto mb-2" />
                <p className="font-semibold">Direct Doctor Line</p>
                <p className="text-sm">+91 1800-EMERGENCY</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <Activity className="h-6 w-6 mx-auto mb-2" />
                <p className="font-semibold">Dr. Sharma Connected</p>
                <p className="text-sm">Live monitoring active</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <MapPin className="h-6 w-6 mx-auto mb-2" />
                <p className="font-semibold">Location Tracked</p>
                <p className="text-sm">Ambulance GPS active</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Emergency Request Form */}
        <Card className="bg-gradient-card border-0 shadow-card-medical">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-emergency">
              <AlertTriangle className="h-5 w-5" />
              <span>Emergency Request</span>
            </CardTitle>
            <CardDescription>
              Fill out this form for immediate pediatric ambulance dispatch
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Select Emergency Type</h3>
              <div className="grid grid-cols-1 gap-3">
                {emergencyTypes.map((emergency, index) => (
                  <Card 
                    key={index}
                    className="cursor-pointer hover:shadow-medical transition-all border"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-foreground">{emergency.type}</h4>
                          <p className="text-sm text-muted-foreground">{emergency.description}</p>
                        </div>
                        <Badge 
                          variant={emergency.severity === 'critical' ? 'destructive' : 'secondary'}
                          className={emergency.severity === 'critical' ? 'bg-gradient-emergency' : ''}
                        >
                          {emergency.severity}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="childName">Child's Name</Label>
                  <Input id="childName" placeholder="Enter child's name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childAge">Age</Label>
                  <Input id="childAge" placeholder="Enter age" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentName">Your Name</Label>
                  <Input id="parentName" placeholder="Parent/Guardian name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Current Location</Label>
                <Input id="location" placeholder="Enter your current address" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="symptoms">Describe Symptoms</Label>
                <Textarea 
                  id="symptoms" 
                  placeholder="Describe the child's current condition and symptoms"
                  rows={3}
                />
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-emergency text-emergency-foreground shadow-emergency text-lg py-6"
              onClick={handleEmergencyCall}
              disabled={emergencyActive}
            >
              {emergencyActive ? (
                <>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Emergency Activated
                </>
              ) : (
                <>
                  <Ambulance className="h-5 w-5 mr-2" />
                  Request Emergency Ambulance
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Information */}
        <div className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>What to Expect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  { 
                    step: "1", 
                    title: "Immediate Response", 
                    description: "Ambulance dispatched within 2 minutes of request" 
                  },
                  { 
                    step: "2", 
                    title: "Doctor Connection", 
                    description: "Pediatrician connected for live guidance during transport" 
                  },
                  { 
                    step: "3", 
                    title: "Hospital Preparation", 
                    description: "Emergency team prepared and waiting at the hospital" 
                  },
                  { 
                    step: "4", 
                    title: "Continuous Care", 
                    description: "Seamless handover to pediatric emergency specialists" 
                  }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-3">
                    <div className="bg-gradient-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary text-secondary-foreground border-0 shadow-medical">
            <CardHeader>
              <CardTitle className="text-secondary-foreground">Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">24/7 Emergency Line</p>
                    <p className="text-secondary-foreground/80">+91 1800-102-EMERGENCY</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Pediatric ICU Direct</p>
                    <p className="text-secondary-foreground/80">+91 1800-PICU-CARE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Nearest Emergency Center</p>
                    <p className="text-secondary-foreground/80">Auto-detected via GPS</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Emergency;