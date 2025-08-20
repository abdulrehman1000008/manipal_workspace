import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  MapPin,
  Star,
  Award,
  CheckCircle
} from "lucide-react";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const { toast } = useToast();

  const doctors = [
    {
      id: "1",
      name: "Dr. Priya Sharma",
      speciality: "Pediatric Cardiology",
      experience: "15 years",
      rating: 4.9,
      image: "👩‍⚕️",
      nextAvailable: "Today 2:30 PM"
    },
    {
      id: "2", 
      name: "Dr. Rajesh Kumar",
      speciality: "General Pediatrics",
      experience: "12 years",
      rating: 4.8,
      image: "👨‍⚕️",
      nextAvailable: "Today 4:00 PM"
    },
    {
      id: "3",
      name: "Dr. Anita Mehta", 
      speciality: "Pediatric Neurology",
      experience: "18 years",
      rating: 4.9,
      image: "👩‍⚕️",
      nextAvailable: "Tomorrow 10:00 AM"
    }
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedDoctor) {
      toast({
        title: "Missing Information",
        description: "Please select a doctor, date, and time slot.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Appointment Booked Successfully!",
      description: "You will receive a confirmation SMS and email shortly.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Book Appointment</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Schedule a consultation with our expert pediatricians
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Doctor Selection */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <span>Select a Pediatrician</span>
              </CardTitle>
              <CardDescription>Choose from our experienced pediatric specialists</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {doctors.map((doctor) => (
                <Card 
                  key={doctor.id}
                  className={`cursor-pointer transition-all hover:shadow-medical ${
                    selectedDoctor === doctor.id ? 'ring-2 ring-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setSelectedDoctor(doctor.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{doctor.image}</div>
                      <div className="flex-grow space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                            <p className="text-sm text-primary font-medium">{doctor.speciality}</p>
                          </div>
                          <Badge variant="secondary" className="bg-gradient-secondary text-secondary-foreground">
                            <Star className="h-3 w-3 mr-1" />
                            {doctor.rating}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4" />
                            <span>{doctor.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{doctor.nextAvailable}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          {/* Patient Information */}
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="childName">Child's Name</Label>
                  <Input id="childName" placeholder="Enter child's full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childAge">Age</Label>
                  <Input id="childAge" placeholder="Enter age" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name</Label>
                  <Input id="parentName" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit</Label>
                <Textarea id="reason" placeholder="Briefly describe the reason for consultation" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Date & Time Selection */}
        <div className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                <span>Select Date</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Select Time</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    className={selectedTime === time ? "bg-gradient-primary" : ""}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Booking Summary */}
          {selectedDoctor && selectedDate && selectedTime && (
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-medical">
              <CardHeader>
                <CardTitle className="text-primary-foreground">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{doctors.find(d => d.id === selectedDoctor)?.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="text-sm">{selectedDate?.toDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{selectedTime}</span>
                </div>
                <Button 
                  className="w-full bg-background text-primary hover:bg-background/90"
                  onClick={handleBooking}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Confirm Booking
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;