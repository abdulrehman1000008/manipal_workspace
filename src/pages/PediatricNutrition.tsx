import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Activity, Hospital, Scale, Dna, Milk, Wheat, Apple, Dumbbell, Users, Info,
  Calculator, UtensilsCrossed , BookOpen, Lightbulb, Droplets, CheckCircle, AlertTriangle
} from "lucide-react";

// --- Data for Recipes ---
const recipes = [
  {
    title: "Rainbow Fruit Skewers",
    description: "A colorful and fun way to eat a variety of fruits.",
    icon: "🍓",
    ingredients: ["Strawberries", "Orange slices", "Pineapple chunks", "Kiwi", "Blueberries", "Grapes"],
    instructions: [
      "Wash and prepare all fruits.",
      "Carefully thread the fruits onto skewers in the order of the rainbow.",
      "Serve immediately as a healthy snack."
    ]
  },
  {
    title: "Spinach & Paneer Pancakes",
    description: "Savory, protein-packed pancakes perfect for toddlers.",
    icon: "🥞",
    ingredients: ["1 cup whole wheat flour", "1/2 cup spinach puree", "50g grated paneer", "1/4 cup yogurt", "A pinch of salt & cumin"],
    instructions: [
      "Mix all ingredients in a bowl to form a smooth batter.",
      "Heat a non-stick pan and lightly grease it.",
      "Pour a small ladleful of batter and spread into a small circle.",
      "Cook on both sides until golden brown. Serve warm."
    ]
  },
  {
    title: "Oats & Banana Smoothie",
    description: "A quick, filling, and nutritious breakfast drink.",
    icon: "🥤",
    ingredients: ["1 ripe banana", "1/4 cup rolled oats", "1 cup milk (or milk alternative)", "1 tsp honey (optional, for kids >1 year)"],
    instructions: [
      "Combine all ingredients in a blender.",
      "Blend until smooth and creamy.",
      "Pour into a glass and serve immediately."
    ]
  }
];

const PediatricNutrition = () => {
  // --- State for BMI Calculator ---
  const [bmiInputs, setBmiInputs] = useState({ weight: '', height: '', age: '', gender: '' });
  const [bmiResult, setBmiResult] = useState(null);

  const handleBmiChange = (e) => {
    const { name, value } = e.target;
    setBmiInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (value) => {
    setBmiInputs(prev => ({ ...prev, gender: value }));
  };

  const calculateBmi = () => {
    const { weight, height, age } = bmiInputs;
    if (!weight || !height || !age || !bmiInputs.gender) {
      setBmiResult({ error: "Please fill in all fields." });
      return;
    }
    const heightInMeters = Number(height) / 100;
    const bmi = Number(weight) / (heightInMeters * heightInMeters);
    
    // Simplified percentile logic for demonstration
    let category = "Healthy Weight";
    let percentile = "between the 5th and 85th percentile";
    if (bmi < 15) { // This is a vast oversimplification
        category = "Underweight";
        percentile = "below the 5th percentile";
    } else if (bmi >= 20) {
        category = "Overweight";
        percentile = "between the 85th and 95th percentile";
    } else if (bmi >= 23) {
        category = "Obesity";
        percentile = "above the 95th percentile";
    }

    setBmiResult({
      value: bmi.toFixed(2),
      category,
      percentile
    });
  };

  return (
    <div className="container mx-auto px-4 py-10 animate-slide-up">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Pediatric Nutrition & Growth</h1>
        <p className="text-muted-foreground mt-3 max-w-3xl mx-auto text-lg">
          An interactive guide to childhood nutrition. Explore growth monitoring, use our BMI calculator,
          discover healthy recipes, and get practical tips for raising a healthy child.
        </p>
      </div>

      {/* --- Main Tabbed Interface --- */}
      <Tabs defaultValue="growth" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="growth"><Activity className="inline h-4 w-4 mr-2" />Growth & Development</TabsTrigger>
          <TabsTrigger value="calculator"><Calculator className="inline h-4 w-4 mr-2" />Nutrition Calculator</TabsTrigger>
          <TabsTrigger value="parent-hub"><Users className="inline h-4 w-4 mr-2" />Parent Hub</TabsTrigger>
          <TabsTrigger value="special-diets"><Dna className="inline h-4 w-4 mr-2" />Specialized Diets</TabsTrigger>
        </TabsList>

        {/* --- Growth & Development Tab --- */}
        <TabsContent value="growth" className="mt-6">
          <div className="space-y-8">
            <Card className="shadow-card-medical">
              <CardHeader><CardTitle className="flex items-center gap-2"><Activity className="h-6 w-6 text-primary" /> Growth Monitoring</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed space-y-2">
                <p>
                  Tracking <strong>height, weight, and head circumference</strong> using WHO/CDC growth charts
                  is fundamental. These charts use percentiles to compare a child's growth to their peers.
                  A consistent growth curve is more important than a specific percentile.
                </p>
                <p>
                  Sudden jumps or drops in percentiles can signal a potential health or nutrition issue,
                  prompting early intervention.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card-medical">
              <CardHeader><CardTitle className="flex items-center gap-2"><Hospital className="h-6 w-6 text-primary" /> Hospitalized Child Nutrition</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                 <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Critical illness:</strong> Increased metabolic demands require more calories & protein to support immune function and recovery.</li>
                    <li><strong>Enteral nutrition:</strong> A feeding tube delivers nutrients directly to the gut when a child cannot eat safely or enough by mouth.</li>
                    <li><strong>Parenteral nutrition:</strong> IV nutrition is used when the gastrointestinal tract is non-functional, bypassing the gut entirely.</li>
                 </ul>
                 <p className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">⚕️ Managed by a <em>multidisciplinary team</em> — doctors, dietitians, and nurses — to ensure optimal outcomes.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* --- Nutrition Calculator Tab --- */}
        <TabsContent value="calculator" className="mt-6">
            <Card className="shadow-card-medical">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Calculator className="h-6 w-6 text-primary" /> BMI-for-Age Calculator</CardTitle>
                    <p className="text-sm text-muted-foreground pt-1">Estimate your child's nutritional status. For children and teens aged 2-20.</p>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium">Weight (kg)</label>
                                <Input type="number" name="weight" placeholder="e.g., 15.5" value={bmiInputs.weight} onChange={handleBmiChange} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Height (cm)</label>
                                <Input type="number" name="height" placeholder="e.g., 110" value={bmiInputs.height} onChange={handleBmiChange} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Age (years)</label>
                                <Input type="number" name="age" placeholder="e.g., 5" value={bmiInputs.age} onChange={handleBmiChange} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Gender</label>
                                <Select onValueChange={handleGenderChange} name="gender">
                                    <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <Button onClick={calculateBmi} className="w-full md:w-auto"><Calculator className="mr-2 h-4 w-4"/> Calculate BMI</Button>
                            {bmiResult && (
                                <div className="p-4 rounded-lg w-full text-center bg-secondary">
                                    {bmiResult.error ? (
                                        <p className="text-red-500 font-semibold">{bmiResult.error}</p>
                                    ) : (
                                        <>
                                            <p className="text-sm">BMI: <strong className="text-2xl text-primary">{bmiResult.value}</strong></p>
                                            <p className="text-sm mt-2">This is considered <strong className="text-primary">{bmiResult.category}</strong>, likely falling {bmiResult.percentile}.</p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-6 text-xs text-muted-foreground p-3 border border-dashed rounded-lg">
                        <AlertTriangle className="inline h-4 w-4 mr-1 text-amber-500" />
                        <strong>Disclaimer:</strong> This calculator is an educational tool, not a substitute for professional medical advice. BMI in children is interpreted using age-and-gender-specific percentile charts. Always consult a pediatrician for an accurate assessment of your child's health and growth.
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

        {/* --- Parent Hub Tab --- */}
        <TabsContent value="parent-hub" className="mt-6">
          <div className="space-y-8">
            <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><UtensilsCrossed className="h-5 w-5 text-primary" /> Kid-Friendly Recipes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recipes.map((recipe, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <Card className="shadow-card-medical hover:border-primary transition-all cursor-pointer">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3">
                                            <span className="text-2xl">{recipe.icon}</span> {recipe.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-sm text-muted-foreground">{recipe.description}</p></CardContent>
                                </Card>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="text-2xl flex items-center gap-3"><span className="text-3xl">{recipe.icon}</span>{recipe.title}</DialogTitle>
                                </DialogHeader>
                                <div className="mt-4">
                                    <h4 className="font-semibold mb-2">Ingredients:</h4>
                                    <ul className="list-disc ml-5 text-muted-foreground text-sm space-y-1">
                                        {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                    <h4 className="font-semibold mt-4 mb-2">Instructions:</h4>
                                    <ol className="list-decimal ml-5 text-muted-foreground text-sm space-y-2">
                                        {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
                                    </ol>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /> Parent Knowledge Base</h3>
                <Card className="shadow-card-medical">
                    <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="picky">
                            <AccordionTrigger>Dealing with Picky Eaters</AccordionTrigger>
                            <AccordionContent>
                                Maintain a "division of responsibility": You decide *what, when, where* to eat; your child decides *if* and *how much*. Offer new foods alongside familiar favorites without pressure. Involve them in cooking and food prep to spark curiosity.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="labels">
                            <AccordionTrigger>Understanding Food Labels</AccordionTrigger>
                            <AccordionContent>
                                Look at the 'per 100g' column for comparison. Check for hidden sugars (e.g., corn syrup, dextrose). Prioritize foods with short ingredient lists made of whole foods. Be wary of "kid-friendly" marketing claims.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="hydration">
                             <AccordionTrigger><Droplets className="inline mr-2 h-4 w-4"/>Hydration Tips</AccordionTrigger>
                             <AccordionContent>
                                Water is best! Avoid sugary juices and sodas. Milk is also a great hydrating option. For active kids, ensure they drink water before, during, and after play. Fruits and vegetables with high water content (like cucumber and watermelon) also contribute to hydration.
                             </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="myths">
                            <AccordionTrigger><Lightbulb className="inline mr-2 h-4 w-4"/>Common Nutrition Myths</AccordionTrigger>
                            <AccordionContent>
                                <strong>Myth:</strong> Kids need special 'toddler' formulas or milks after age 1. <br/>
                                <strong>Fact:</strong> Whole cow's milk and a balanced diet are sufficient for most children over one year. <br/>
                                <strong>Myth:</strong> "Finishing your plate" teaches good habits. <br/>
                                <strong>Fact:</strong> This can override a child's natural hunger and fullness cues. It's better to let them self-regulate their intake.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    </CardContent>
                </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* --- Specialized Diets Tab --- */}
        <TabsContent value="special-diets" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card className="shadow-card-medical">
                   <CardHeader><CardTitle><Scale className="inline h-5 w-5 mr-2 text-primary" /> Childhood Obesity</CardTitle></CardHeader>
                   <CardContent className="text-sm text-muted-foreground">
                     A complex issue stemming from diet, low activity, genetics, and environment. Increases risk for type 2 diabetes, hypertension, and fatty liver disease. Management involves the whole family adopting healthier eating habits and an active lifestyle.
                   </CardContent>
                 </Card>
                 <Card className="shadow-card-medical">
                   <CardHeader><CardTitle><Dna className="inline h-5 w-5 mr-2 text-primary" /> Inborn Errors of Metabolism</CardTitle></CardHeader>
                   <CardContent className="text-sm text-muted-foreground">
                     Genetic disorders like <strong>Phenylketonuria (PKU)</strong> or <strong>Glycogen Storage Disease (GSD)</strong> require highly restrictive medical diets and specialized formulas to prevent severe health complications and ensure proper growth.
                   </CardContent>
                 </Card>
                 <Card className="shadow-card-medical">
                   <CardHeader><CardTitle><Milk className="inline h-5 w-5 mr-2 text-primary" /><Wheat className="inline h-5 w-5 mr-2 text-primary" /> Intolerances & Allergies</CardTitle></CardHeader>
                   <CardContent className="text-sm text-muted-foreground">
                     Lactose intolerance requires lactose-free or plant-based milks. Celiac disease (an autoimmune response to gluten) necessitates a strict gluten-free diet. Careful label reading is crucial.
                   </CardContent>
                 </Card>
                 <Card className="shadow-card-medical">
                   <CardHeader><CardTitle><Apple className="inline h-5 w-5 mr-2 text-primary" /> Ketogenic Diet</CardTitle></CardHeader>
                   <CardContent className="text-sm text-muted-foreground">
                     A high-fat, adequate-protein, low-carbohydrate diet used therapeutically for <strong>drug-resistant epilepsy</strong> in children. It must be medically supervised by a neurologist and dietitian.
                   </CardContent>
                 </Card>
            </div>
        </TabsContent>
      </Tabs>
      
      {/* Closing Note */}
      <div className="mt-12 text-center text-sm text-muted-foreground border-t pt-6">
        <Info className="inline h-4 w-4 mr-1 text-primary" />
        This information is for educational purposes. Always consult a pediatrician or registered dietitian for personalized nutrition guidance.
      </div>
    </div>
  );
};

export default PediatricNutrition;
