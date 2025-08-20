import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Stethoscope, 
  Thermometer, 
  Heart,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

interface SymptomQuestion {
  id: string;
  question: string;
  type: "single" | "multiple" | "scale";
  options?: string[];
  icon?: any;
}

const Symptoms = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [childAge, setChildAge] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const questions: SymptomQuestion[] = [
    {
      id: "temperature",
      question: "Does your child have a fever?",
      type: "single",
      options: ["No fever", "Mild fever (99-101°F)", "High fever (101-103°F)", "Very high fever (103°F+)"],
      icon: Thermometer
    },
    {
      id: "symptoms",
      question: "Which symptoms is your child experiencing?",
      type: "multiple",
      options: [
        "Cough", "Runny nose", "Sore throat", "Headache", 
        "Stomach pain", "Nausea/Vomiting", "Diarrhea", "Rash",
        "Difficulty breathing", "Loss of appetite", "Fatigue", "Irritability"
      ]
    },
    {
      id: "duration",
      question: "How long has your child been experiencing these symptoms?",
      type: "single",
      options: ["Less than 24 hours", "1-2 days", "3-5 days", "More than a week"]
    },
    {
      id: "severity",
      question: "How would you rate the severity of symptoms?",
      type: "scale",
      options: ["1", "2", "3", "4", "5"]
    },
    {
      id: "behavior",
      question: "How is your child's behavior?",
      type: "single",
      options: [
        "Normal and playful",
        "Slightly less active",
        "Very tired and cranky", 
        "Extremely lethargic"
      ]
    }
  ];

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateResults = () => {
    setShowResults(true);
    toast({
      title: "Assessment Complete",
      description: "Based on your responses, here are our recommendations.",
    });
  };

  const getRecommendation = () => {
    const fever = answers.temperature;
    const symptoms = answers.symptoms || [];
    const severity = parseInt(answers.severity) || 1;
    const behavior = answers.behavior;

    if (fever === "Very high fever (103°F+)" || behavior === "Extremely lethargic" || severity >= 4) {
      return {
        level: "urgent",
        title: "Seek Immediate Medical Attention",
        description: "Your child's symptoms require urgent medical evaluation.",
        color: "emergency",
        action: "Visit Emergency Room or Call Ambulance"
      };
    } else if (fever === "High fever (101-103°F)" || severity >= 3 || symptoms.includes("Difficulty breathing")) {
      return {
        level: "moderate",
        title: "Schedule Doctor Appointment",
        description: "Your child should see a pediatrician within 24 hours.",
        color: "primary",
        action: "Book Appointment Today"
      };
    } else {
      return {
        level: "mild",
        title: "Monitor at Home",
        description: "Continue monitoring symptoms and provide comfort care.",
        color: "secondary",
        action: "Home Care Recommended"
      };
    }
  };

  const getCurrentQuestion = () => questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    const recommendation = getRecommendation();
    
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader className="text-center">
              <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
              <CardTitle className="text-2xl text-foreground">Assessment Complete</CardTitle>
              <CardDescription>Based on your child's symptoms, here's our recommendation</CardDescription>
            </CardHeader>
          </Card>

          <Card className={`border-0 shadow-medical ${
            recommendation.color === 'emergency' ? 'bg-gradient-emergency text-emergency-foreground' :
            recommendation.color === 'primary' ? 'bg-gradient-primary text-primary-foreground' :
            'bg-gradient-secondary text-secondary-foreground'
          }`}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                {recommendation.level === 'urgent' && <AlertTriangle className="h-16 w-16 mx-auto animate-emergency-blink" />}
                {recommendation.level === 'moderate' && <Clock className="h-16 w-16 mx-auto" />}
                {recommendation.level === 'mild' && <Heart className="h-16 w-16 mx-auto" />}
              </div>
              <h2 className="text-2xl font-bold mb-4">{recommendation.title}</h2>
              <p className="text-lg mb-6">{recommendation.description}</p>
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => {
                  if (recommendation.level === 'urgent') {
                    window.location.href = '/emergency';
                  } else if (recommendation.level === 'moderate') {
                    window.location.href = '/appointments';
                  }
                }}
              >
                {recommendation.action}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle>General Care Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ensure your child gets plenty of rest</li>
                <li>• Keep them well-hydrated with water or clear fluids</li>
                <li>• Monitor temperature regularly</li>
                <li>• Contact your pediatrician if symptoms worsen</li>
                <li>• Keep a symptom diary for medical appointments</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => {
                setShowResults(false);
                setCurrentStep(0);
                setAnswers({});
                setChildAge("");
              }}
            >
              Start New Assessment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-card border-0 shadow-card-medical">
          <CardHeader className="text-center">
            <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl text-foreground">Child-Friendly Symptom Checker</CardTitle>
            <CardDescription>
              Help us understand your child's symptoms for personalized recommendations
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Progress */}
        <Card className="bg-card border-0 shadow-card-medical">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm text-muted-foreground">{currentStep + 1} of {questions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Child Age Input (First Step) */}
        {currentStep === 0 && !childAge && (
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <span>Tell us about your child</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="age">Child's Age</Label>
                <Input 
                  id="age" 
                  placeholder="Enter age (e.g., 5 years, 18 months)"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                />
              </div>
              <Button 
                className="w-full bg-gradient-primary" 
                onClick={() => childAge && setCurrentStep(0)}
                disabled={!childAge}
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Questions */}
        {childAge && (
          <Card className="bg-gradient-card border-0 shadow-card-medical">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {getCurrentQuestion().icon && React.createElement(getCurrentQuestion().icon, { className: "h-5 w-5 text-primary" })}
                <span>Question {currentStep + 1}</span>
              </CardTitle>
              <CardDescription className="text-lg font-medium text-foreground">
                {getCurrentQuestion().question}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {getCurrentQuestion().type === "single" && (
                <RadioGroup 
                  value={answers[getCurrentQuestion().id] || ""} 
                  onValueChange={(value) => handleAnswer(getCurrentQuestion().id, value)}
                >
                  {getCurrentQuestion().options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {getCurrentQuestion().type === "multiple" && (
                <div className="grid grid-cols-2 gap-3">
                  {getCurrentQuestion().options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent">
                      <Checkbox 
                        id={`option-${index}`}
                        checked={(answers[getCurrentQuestion().id] || []).includes(option)}
                        onCheckedChange={(checked) => {
                          const current = answers[getCurrentQuestion().id] || [];
                          if (checked) {
                            handleAnswer(getCurrentQuestion().id, [...current, option]);
                          } else {
                            handleAnswer(getCurrentQuestion().id, current.filter((item: string) => item !== option));
                          }
                        }}
                      />
                      <Label htmlFor={`option-${index}`} className="text-sm cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              )}

              {getCurrentQuestion().type === "scale" && (
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">Rate from 1 (mild) to 5 (severe)</p>
                    <div className="flex justify-center space-x-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <Button
                          key={num}
                          variant={answers[getCurrentQuestion().id] === num.toString() ? "default" : "outline"}
                          size="lg"
                          className={`w-12 h-12 rounded-full ${
                            answers[getCurrentQuestion().id] === num.toString() ? 'bg-gradient-primary' : ''
                          }`}
                          onClick={() => handleAnswer(getCurrentQuestion().id, num.toString())}
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <Button 
                  className="bg-gradient-primary"
                  onClick={handleNext}
                  disabled={!answers[getCurrentQuestion().id]}
                >
                  {currentStep === questions.length - 1 ? "Get Results" : "Next"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Symptoms;