import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Emergency from "./pages/Emergency";
import Chat from "./pages/Chat";
import Symptoms from "./pages/Symptoms";
import Vaccinations from "./pages/Vaccinations";
import Locations from "./pages/Locations";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PediatricNutrition from "./pages/PediatricNutrition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/vaccinations" element={<Vaccinations />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pediatric" element={<PediatricNutrition />} ></Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
