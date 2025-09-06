import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import CollegeSelection from "./pages/CollegeSelection";
import Dashboard from "./pages/Dashboard";
import MainMenu from "./pages/MainMenu";
import GeneralChat from "./pages/GeneralChat";
import CollegeChat from "./pages/CollegeChat";
import InterCollegeChat from "./pages/InterCollegeChat";
import IntraCollegeChat from "./pages/IntraCollegeChat";
import NotFound from "./pages/NotFound";
import CollegeClubs from "./pages/CollegeClubs";
import CollegeEvents from "./pages/CollegeEvents";
import CollegeHackathons from "./pages/CollegeHackathons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/main-menu" element={<MainMenu />} />
          <Route path="/general-chat" element={<GeneralChat />} />
          <Route path="/college-selection" element={<CollegeSelection />} />
          <Route path="/college-chat" element={<CollegeChat />} />
          <Route path="/college-clubs" element={<CollegeClubs />} />
          <Route path="/college-events" element={<CollegeEvents />} />
          <Route path="/college-hackathons" element={<CollegeHackathons />} />
          <Route path="/inter-college-chat" element={<InterCollegeChat />} />
          <Route path="/intra-college-chat" element={<IntraCollegeChat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
