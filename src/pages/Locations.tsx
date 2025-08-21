import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Search,
  Star,
  Car,
  Heart,
  Stethoscope,
  Users
} from "lucide-react";

interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  distance: string;
  phone: string;
  hours: string;
  rating: number;
  services: string[];
  specialties: string[];
  emergency: boolean;
  pediatricICU: boolean;
  latitude: number;
  longitude: number;
}

const Locations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);

  const hospitals: Hospital[] = [
        {
      id: "1",
      name: "Manipal Hospital Mysore", 
      address: "85-86, Bangalore-Mysore Ring Road Junction, Bannimantap 'A' Layout",
      city: "Mysore",
      distance: "145 km",
      phone: "+91 821 242 7777",
      hours: "24/7 Emergency",
      rating: 4.7,
      services: ["Emergency Care", "Pediatric ICU", "Neonatal Care", "Vaccination Center", "Child Surgery"],
      specialties: ["General Pediatrics", "Pediatric Cardiology", "Child Neurology", "Pediatric Orthopedics"],
      emergency: true,
      pediatricICU: true,
      latitude: 12.349979193771286,
      longitude: 76.6601800569177
    },
    {
      id: "2", 
      name: "Manipal Hospital HAL Airport Road",
      address: "98, HAL Airport Rd, HAL 2nd Stage, Indiranagar",
      city: "Bangalore",
      distance: "8.2 km",
      phone: "+91 80 2526 4444",
      hours: "24/7 Emergency",
      rating: 4.7,
      services: ["Emergency Care", "Pediatric ICU", "Child Psychology", "Vaccination Center"],
      specialties: ["General Pediatrics", "Pediatric Oncology", "Child Development"],
      emergency: true,
      pediatricICU: true,
      latitude: 12.9716,
      longitude: 77.6412
    },
    {
      id: "3",
      name: "Manipal Hospital Sarjapur Road",
      address: "46/2, Main Outer Ring Rd, Ambalipur, Sarjapura",
      city: "Bangalore", 
      distance: "12.5 km",
      phone: "+91 80 6692 2000",
      hours: "6:00 AM - 10:00 PM",
      rating: 4.6,
      services: ["Outpatient Care", "Vaccination Center", "Child Health Checkups"],
      specialties: ["General Pediatrics", "Pediatric Dermatology"],
      emergency: false,
      pediatricICU: false,
      latitude: 12.9079,
      longitude: 77.6934
    },
    {
      id: "4",
      name: "Manipal Hospital Malleshwaram",
      address: "No. 1648, 4th Main, 5th Cross, Malleshwaram",
      city: "Bangalore",
      distance: "15.3 km", 
      phone: "+91 80 2334 2000",
      hours: "24/7 Emergency",
      rating: 4.9,
      services: ["Emergency Care", "Pediatric ICU", "Neonatal Care", "Child Surgery"],
      specialties: ["Pediatric Cardiology", "Child Neurology", "Pediatric Gastroenterology"],
      emergency: true,
      pediatricICU: true,
      latitude: 12.9833,
      longitude: 77.5667
    },
    {
      id: "5",
      name: "Manipal Hospital Whitefield",
      address: "#143, 212-2015, EPIP Zone, ITPL Rd, Whitefield",
      city: "Bangalore",
      distance: "2.5 km",
      phone: "+91 80 6692 2222",
      hours: "24/7 Emergency",
      rating: 4.8,
      services: ["Emergency Care", "Pediatric ICU", "Neonatal Care", "Vaccination Center"],
      specialties: ["Pediatric Cardiology", "Child Neurology", "Pediatric Surgery"],
      emergency: true,
      pediatricICU: true,
      latitude: 12.9698,
      longitude: 77.7500
    }
    
  ];

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hospital.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hospital.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDirections = (hospital: Hospital) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${hospital.latitude},${hospital.longitude}`;
    window.open(url, '_blank');
  };

  const callHospital = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Find Nearby Hospitals</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Locate the nearest Manipal Hospital for pediatric care
        </p>
      </div>

      {/* Search */}
      <Card className="bg-gradient-card border-0 shadow-card-medical">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by location, hospital name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hospital List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Nearby Locations</h2>
          {filteredHospitals.map((hospital) => (
            <Card 
              key={hospital.id}
              className={`cursor-pointer transition-all hover:shadow-medical ${
                selectedHospital === hospital.id ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
              onClick={() => setSelectedHospital(hospital.id)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-foreground">{hospital.name}</h3>
                        {hospital.emergency && (
                          <Badge variant="destructive" className="bg-gradient-emergency">
                            24/7 Emergency
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-secondary" />
                          <span>{hospital.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Car className="h-4 w-4" />
                          <span>{hospital.distance}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{hospital.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <p className="text-sm text-muted-foreground">{hospital.address}, {hospital.city}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <p className="text-sm text-muted-foreground">{hospital.phone}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Services</h4>
                      <div className="flex flex-wrap gap-1">
                        {hospital.services.map((service, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {hospital.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        getDirections(hospital);
                      }}
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Directions
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        callHospital(hospital.phone);
                      }}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hospital Details & Map */}
        <div className="space-y-6">
          {selectedHospital ? (
            <>
              {(() => {
                const hospital = hospitals.find(h => h.id === selectedHospital);
                if (!hospital) return null;
                
                return (
                  <>
                    <Card className="bg-gradient-card border-0 shadow-card-medical">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Heart className="h-5 w-5 text-primary" />
                          <span>{hospital.name}</span>
                        </CardTitle>
                        <CardDescription>Detailed information and quick actions</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-gradient-primary text-primary-foreground rounded-lg">
                            <Star className="h-6 w-6 mx-auto mb-2" />
                            <div className="text-lg font-bold">{hospital.rating}</div>
                            <div className="text-sm opacity-90">Rating</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-secondary text-secondary-foreground rounded-lg">
                            <Car className="h-6 w-6 mx-auto mb-2" />
                            <div className="text-lg font-bold">{hospital.distance}</div>
                            <div className="text-sm opacity-90">Away</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Stethoscope className="h-5 w-5 text-primary" />
                              <span className="font-medium">Pediatric ICU</span>
                            </div>
                            <Badge variant={hospital.pediatricICU ? "secondary" : "outline"}>
                              {hospital.pediatricICU ? "Available" : "Not Available"}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Users className="h-5 w-5 text-emergency" />
                              <span className="font-medium">24/7 Emergency</span>
                            </div>
                            <Badge variant={hospital.emergency ? "destructive" : "outline"}>
                              {hospital.emergency ? "Available" : "Limited Hours"}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          <Button 
                            className="bg-gradient-primary" 
                            onClick={() => getDirections(hospital)}
                          >
                            <Navigation className="h-4 w-4 mr-2" />
                            Get Directions
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => callHospital(hospital.phone)}
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Call Hospital
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Map Placeholder */}
                    <Card className="bg-gradient-card border-0 shadow-card-medical">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span>Location Map</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <MapPin className="h-12 w-12 text-primary mx-auto" />
                            <div>
                              <p className="font-medium text-foreground">{hospital.name}</p>
                              <p className="text-sm text-muted-foreground">{hospital.address}</p>
                            </div>
                            <Button 
                              className="bg-gradient-primary"
                              onClick={() => getDirections(hospital)}
                            >
                              Open in Maps
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                );
              })()}
            </>
          ) : (
            <Card className="bg-gradient-card border-0 shadow-card-medical">
              <CardContent className="p-12 text-center">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Select a Hospital</h3>
                <p className="text-muted-foreground">
                  Click on any hospital from the list to view detailed information and get directions.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Emergency Contact */}
          <Card className="bg-gradient-emergency text-emergency-foreground border-0 shadow-emergency">
            <CardHeader>
              <CardTitle className="text-emergency-foreground">Emergency Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-emergency-foreground/90">
                  For pediatric emergencies, call our 24/7 helpline:
                </p>
                <Button 
                  className="w-full bg-background text-foreground hover:bg-background/90"
                  onClick={() => callHospital("+91 1800-102-EMERGENCY")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Locations;