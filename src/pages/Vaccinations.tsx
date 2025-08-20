import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart, 
  Calendar as CalendarIcon, 
  Bell, 
  CheckCircle, 
  Clock,
  AlertTriangle,
  Shield,
  Baby,
  User,
  Plus
} from "lucide-react";

interface Vaccine {
  id: string;
  name: string;
  description: string;
  ageGroup: string;
  status: "completed" | "due" | "overdue" | "upcoming";
  dueDate?: string;
  completedDate?: string;
  importance: "routine" | "critical";
}

const Vaccinations = () => {
  const [selectedChild, setSelectedChild] = useState("child1");
  const [showAddChild, setShowAddChild] = useState(false);
  const { toast } = useToast();

  const children = [
    { id: "child1", name: "Emma", age: "2 years", dob: "2022-03-15" },
    { id: "child2", name: "Arjun", age: "6 months", dob: "2024-01-20" }
  ];

  const vaccines: Vaccine[] = [
    {
      id: "1",
      name: "MMR (Measles, Mumps, Rubella)",
      description: "Protects against measles, mumps, and rubella",
      ageGroup: "12-15 months",
      status: "completed",
      completedDate: "2023-04-10",
      importance: "critical"
    },
    {
      id: "2", 
      name: "DTaP (Diphtheria, Tetanus, Pertussis)",
      description: "Fifth dose of DTaP vaccine",
      ageGroup: "4-6 years",
      status: "due",
      dueDate: "2024-08-25",
      importance: "critical"
    },
    {
      id: "3",
      name: "Varicella (Chickenpox)",
      description: "Second dose of chickenpox vaccine",
      ageGroup: "4-6 years", 
      status: "upcoming",
      dueDate: "2024-09-15",
      importance: "routine"
    },
    {
      id: "4",
      name: "Hepatitis A",
      description: "Second dose of Hepatitis A vaccine",
      ageGroup: "18-24 months",
      status: "overdue",
      dueDate: "2024-07-20",
      importance: "routine"
    },
    {
      id: "5",
      name: "Influenza (Flu)",
      description: "Annual flu vaccination",
      ageGroup: "6 months+",
      status: "due", 
      dueDate: "2024-08-30",
      importance: "routine"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "secondary";
      case "due": return "default";
      case "overdue": return "destructive";
      case "upcoming": return "outline";
      default: return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return CheckCircle;
      case "due": return Bell;
      case "overdue": return AlertTriangle;
      case "upcoming": return Clock;
      default: return Clock;
    }
  };

  const scheduleVaccine = (vaccineId: string) => {
    toast({
      title: "Vaccination Scheduled",
      description: "Appointment reminder set. You'll receive notifications before the due date.",
    });
  };

  const completedVaccines = vaccines.filter(v => v.status === "completed").length;
  const totalVaccines = vaccines.length;
  const completionPercentage = (completedVaccines / totalVaccines) * 100;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Vaccination Reminders</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Keep your child's immunizations on track with smart reminders
        </p>
      </div>

      {/* Child Selection */}
      <Card className="bg-gradient-card border-0 shadow-card-medical">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Baby className="h-5 w-5 text-primary" />
              <span>Select Child</span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowAddChild(!showAddChild)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Child
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {children.map((child) => (
              <Card 
                key={child.id}
                className={`cursor-pointer transition-all hover:shadow-medical ${
                  selectedChild === child.id ? 'ring-2 ring-primary bg-primary/5' : ''
                }`}
                onClick={() => setSelectedChild(child.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">👶</div>
                  <h3 className="font-semibold text-foreground">{child.name}</h3>
                  <p className="text-sm text-muted-foreground">{child.age}</p>
                  <p className="text-xs text-muted-foreground">Born: {child.dob}</p>
                </CardContent>
              </Card>
            ))}

            {showAddChild && (
              <Card className="border-2 border-dashed border-primary">
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="childName">Name</Label>
                    <Input id="childName" placeholder="Child's name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childDob">Date of Birth</Label>
                    <Input id="childDob" type="date" />
                  </div>
                  <Button size="sm" className="w-full bg-gradient-primary">
                    Add Child
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Vaccination Progress */}
      <Card className="bg-gradient-card border-0 shadow-card-medical">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-secondary" />
            <span>Vaccination Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {completedVaccines} of {totalVaccines} vaccines completed
              </span>
              <span className="text-sm font-medium text-foreground">
                {completionPercentage.toFixed(0)}%
              </span>
            </div>
            <Progress value={completionPercentage} className="h-3" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "Completed", count: vaccines.filter(v => v.status === "completed").length, color: "text-secondary" },
                { label: "Due Now", count: vaccines.filter(v => v.status === "due").length, color: "text-primary" },
                { label: "Overdue", count: vaccines.filter(v => v.status === "overdue").length, color: "text-destructive" },
                { label: "Upcoming", count: vaccines.filter(v => v.status === "upcoming").length, color: "text-muted-foreground" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vaccination Schedule */}
      <Card className="bg-gradient-card border-0 shadow-card-medical">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary" />
            <span>Vaccination Schedule</span>
          </CardTitle>
          <CardDescription>
            Showing schedule for {children.find(c => c.id === selectedChild)?.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {vaccines.map((vaccine) => {
              const StatusIcon = getStatusIcon(vaccine.status);
              return (
                <Card key={vaccine.id} className="border hover:shadow-medical transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg ${
                          vaccine.status === 'completed' ? 'bg-gradient-secondary' :
                          vaccine.status === 'overdue' ? 'bg-gradient-emergency' :
                          'bg-gradient-primary'
                        }`}>
                          <StatusIcon className="h-5 w-5 text-white" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-foreground">{vaccine.name}</h3>
                            <Badge variant={getStatusColor(vaccine.status)}>
                              {vaccine.status}
                            </Badge>
                            {vaccine.importance === "critical" && (
                              <Badge variant="destructive" className="bg-gradient-emergency">
                                Critical
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{vaccine.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>Age: {vaccine.ageGroup}</span>
                            {vaccine.dueDate && (
                              <span>Due: {new Date(vaccine.dueDate).toLocaleDateString()}</span>
                            )}
                            {vaccine.completedDate && (
                              <span>Completed: {new Date(vaccine.completedDate).toLocaleDateString()}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {vaccine.status !== "completed" && (
                          <>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => scheduleVaccine(vaccine.id)}
                            >
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              Schedule
                            </Button>
                            <Button 
                              size="sm" 
                              className="bg-gradient-primary"
                            >
                              <Bell className="h-4 w-4 mr-2" />
                              Remind Me
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Vaccination Tips */}
      <Card className="bg-gradient-secondary text-secondary-foreground border-0 shadow-medical">
        <CardHeader>
          <CardTitle className="text-secondary-foreground">Vaccination Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Before Vaccination:</h4>
              <ul className="text-sm space-y-1 text-secondary-foreground/80">
                <li>• Ensure child is healthy</li>
                <li>• Bring vaccination records</li>
                <li>• Discuss concerns with doctor</li>
                <li>• Bring comfort items</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">After Vaccination:</h4>
              <ul className="text-sm space-y-1 text-secondary-foreground/80">
                <li>• Monitor for reactions</li>
                <li>• Apply cold compress if soreness</li>
                <li>• Give extra fluids</li>
                <li>• Contact doctor if concerns</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Vaccinations;