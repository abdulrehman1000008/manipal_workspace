import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Heart,
  Baby,
  Settings,
  Bell,
  Shield,
  Edit,
  Save,
  Plus,
  Clock,
  CheckCircle
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showAddChild, setShowAddChild] = useState(false);
  const { toast } = useToast();

  const [profile, setProfile] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    address: "123 HSR Layout, Bangalore, Karnataka",
    emergencyContact: "+91 98765 43211"
  });

  const children = [
    {
      id: "1",
      name: "Emma Sharma",
      age: "2 years",
      dob: "2022-03-15",
      bloodGroup: "A+",
      allergies: ["Peanuts", "Dust"],
      lastCheckup: "2024-07-15",
      doctor: "Dr. Priya Sharma"
    },
    {
      id: "2", 
      name: "Arjun Sharma",
      age: "6 months",
      dob: "2024-01-20",
      bloodGroup: "O+",
      allergies: [],
      lastCheckup: "2024-07-20",
      doctor: "Dr. Rajesh Kumar"
    }
  ];

  const recentActivity = [
    {
      type: "appointment",
      description: "Appointment with Dr. Priya Sharma",
      date: "2024-07-20",
      status: "completed"
    },
    {
      type: "vaccination",
      description: "Hepatitis B vaccination for Emma",
      date: "2024-07-15", 
      status: "completed"
    },
    {
      type: "chat",
      description: "Chat consultation about fever",
      date: "2024-07-10",
      status: "completed"
    },
    {
      type: "emergency",
      description: "Emergency call - resolved",
      date: "2024-06-28",
      status: "completed"
    }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "appointment": return Calendar;
      case "vaccination": return Heart;
      case "chat": return Mail;
      case "emergency": return Phone;
      default: return CheckCircle;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "appointment": return "primary";
      case "vaccination": return "secondary";
      case "chat": return "outline";
      case "emergency": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">My Profile</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Manage your family's healthcare information and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="children">Children</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl text-foreground">{profile.name}</CardTitle>
                    <CardDescription>Parent/Guardian Account</CardDescription>
                  </div>
                </div>
                <Button
                  variant={isEditing ? "default" : "outline"}
                  onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  className={isEditing ? "bg-gradient-primary" : ""}
                >
                  {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-3" />
                      <Textarea
                        id="address"
                        value={profile.address}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                        disabled={!isEditing}
                        rows={3}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emergency">Emergency Contact</Label>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <Input
                        id="emergency"
                        value={profile.emergencyContact}
                        onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Children Tab */}
        <TabsContent value="children" className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Baby className="h-5 w-5 text-primary" />
                  <span>Children's Profiles</span>
                </CardTitle>
                <Button 
                  variant="outline"
                  onClick={() => setShowAddChild(!showAddChild)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Child
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {children.map((child) => (
                <Card key={child.id} className="border hover:shadow-medical transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">👶</div>
                        <div className="space-y-3">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{child.name}</h3>
                            <p className="text-sm text-muted-foreground">Age: {child.age}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-foreground">Date of Birth:</span>
                              <p className="text-muted-foreground">{child.dob}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Blood Group:</span>
                              <p className="text-muted-foreground">{child.bloodGroup}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Last Checkup:</span>
                              <p className="text-muted-foreground">{child.lastCheckup}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Primary Doctor:</span>
                              <p className="text-muted-foreground">{child.doctor}</p>
                            </div>
                          </div>
                          
                          <div>
                            <span className="font-medium text-foreground text-sm">Allergies:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {child.allergies.length > 0 ? (
                                child.allergies.map((allergy, index) => (
                                  <Badge key={index} variant="destructive" className="text-xs">
                                    {allergy}
                                  </Badge>
                                ))
                              ) : (
                                <Badge variant="secondary" className="text-xs">
                                  No known allergies
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {showAddChild && (
                <Card className="border-2 border-dashed border-primary">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-foreground">Add New Child</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="childName">Full Name</Label>
                        <Input id="childName" placeholder="Child's full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="childDob">Date of Birth</Label>
                        <Input id="childDob" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup">Blood Group</Label>
                        <Input id="bloodGroup" placeholder="e.g., A+, O-, B+" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="allergies">Known Allergies</Label>
                        <Input id="allergies" placeholder="e.g., Peanuts, Dust (comma separated)" />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="bg-gradient-primary">
                        <Save className="h-4 w-4 mr-2" />
                        Save Child
                      </Button>
                      <Button variant="outline" onClick={() => setShowAddChild(false)}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>Your healthcare interactions and appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = getActivityIcon(activity.type);
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-accent rounded-lg">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <Icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium text-foreground">{activity.description}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                      <Badge variant={getActivityColor(activity.type) as any}>
                        {activity.status}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-primary" />
                <span>Account Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Bell className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Appointment Reminders</p>
                      <p className="text-sm text-muted-foreground">Get notified about upcoming appointments</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Enabled
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-medium text-foreground">Vaccination Reminders</p>
                      <p className="text-sm text-muted-foreground">Never miss important vaccinations</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Enabled
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Enabled
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Emergency Alerts</p>
                      <p className="text-sm text-muted-foreground">Critical health alerts and updates</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Enabled
                  </Button>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Account Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Download My Data
                  </Button>
                  <Button variant="destructive" className="w-full justify-start">
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;