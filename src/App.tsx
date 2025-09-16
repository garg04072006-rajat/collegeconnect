

import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Settings from "./pages/Settings";
import Account from "./pages/Account";

const queryClient = new QueryClient();

// Simple auth guard using localStorage (client-side only)
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('userCollege');
  if (!isLoggedIn) return <Navigate to="/auth" replace />;
  return children;
};


const App = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/main-menu" element={<ProtectedRoute><MainMenu /></ProtectedRoute>} />
            <Route path="/general-chat" element={<ProtectedRoute><GeneralChat /></ProtectedRoute>} />
            <Route path="/college-selection" element={<ProtectedRoute><CollegeSelection /></ProtectedRoute>} />
            <Route path="/college-chat" element={<ProtectedRoute><CollegeChat /></ProtectedRoute>} />
            <Route path="/college-clubs" element={<ProtectedRoute><CollegeClubs /></ProtectedRoute>} />
            <Route path="/college-events" element={<ProtectedRoute><CollegeEvents /></ProtectedRoute>} />
            <Route path="/college-hackathons" element={<ProtectedRoute><CollegeHackathons /></ProtectedRoute>} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
            <Route path="/inter-college-chat" element={<ProtectedRoute><InterCollegeChat /></ProtectedRoute>} />
            <Route path="/intra-college-chat" element={<ProtectedRoute><IntraCollegeChat /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
