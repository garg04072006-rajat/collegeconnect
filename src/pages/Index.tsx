// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MessageCircle, Users, Trophy, BookOpen, ArrowRight, Settings, SunMoon } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    try {
      const existing = localStorage.getItem('userCollege');
      if (existing && existing.trim()) {
        // Already logged in -> go directly to main menu
        window.location.replace('/main-menu');
      }
    } catch {}
  }, []);

  // Theme state: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="w-full border-b bg-card/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight bg-hero-gradient bg-clip-text text-transparent select-none">CollegeConnect</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Theme" onClick={toggleTheme}>
              <SunMoon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>
  {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-12 h-12 text-primary animate-float" />
                  <h1 className="text-5xl lg:text-6xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                    CollegeConnect
                  </h1>
                </div>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  India's largest student networking platform. Connect, share, and grow with students across IITs, NITs, and top colleges.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg px-8 py-6"
                  onClick={() => window.location.href = "/auth"}
                >
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students collaborating and networking in college"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-xl animate-glow">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm">Students Connected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose CollegeConnect?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to connect with your college community and beyond
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <MessageCircle className="w-16 h-16 text-primary mx-auto group-hover:animate-float" />
                <h3 className="text-xl font-semibold">Smart Chat Rooms</h3>
                <p className="text-muted-foreground">
                  Join general discussions or college-specific chat rooms. Connect instantly with like-minded students.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <Users className="w-16 h-16 text-secondary mx-auto group-hover:animate-float" />
                <h3 className="text-xl font-semibold">College Communities</h3>
                <p className="text-muted-foreground">
                  Access exclusive content and discussions specific to your college. Share experiences and build networks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <BookOpen className="w-16 h-16 text-accent mx-auto group-hover:animate-float" />
                <h3 className="text-xl font-semibold">Study Resources</h3>
                <p className="text-muted-foreground">
                  Share and access study materials, notes, and resources. Collaborate on projects and assignments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <Trophy className="w-16 h-16 text-primary mx-auto group-hover:animate-float" />
                <h3 className="text-xl font-semibold">Events & Hackathons</h3>
                <p className="text-muted-foreground">
                  Stay updated with the latest hackathons, competitions, and events happening across colleges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <GraduationCap className="w-16 h-16 text-secondary mx-auto group-hover:animate-float" />
                <h3 className="text-xl font-semibold">Career Opportunities</h3>
                <p className="text-muted-foreground">
                  Get placement updates, internship opportunities, and career guidance from seniors and alumni.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <Users className="w-16 h-16 text-accent mx-auto group-hover:animate-float" />
                <h3 className="text-xl font-semibold">Clubs & Societies</h3>
                <p className="text-muted-foreground">
                  Discover and join student clubs, societies, and interest groups in your college and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer (Green Section) */}
      <footer className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-base">
            {/* CollegeConnect Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-white" />
                <span className="font-bold text-lg">CollegeConnect</span>
              </div>
              <p className="max-w-xs">India's largest student networking platform. Connect, share, and grow with students across IITs, NITs, and top colleges.</p>
            </div>
            {/* Quick Links */}
            <div className="space-y-2">
              <div className="font-semibold mb-2 text-xl">Quick Links</div>
              <ul className="space-y-1">
                <li><a href="/auth" className="hover:underline">Login / Signup</a></li>
                <li><a href="/main-menu" className="hover:underline">Dashboard</a></li>
                <li><a href="/settings" className="hover:underline">Settings</a></li>
              </ul>
            </div>
            {/* Categories */}
            <div className="space-y-2">
              <div className="font-semibold mb-2 text-xl">Categories</div>
              <ul className="space-y-1">
                <li><a href="/college-events" className="hover:underline">Events</a></li>
                <li><a href="/college-hackathons" className="hover:underline">Hackathons</a></li>
                <li><a href="/college-clubs" className="hover:underline">Clubs</a></li>
                <li><a href="/general-chat" className="hover:underline">General Chat</a></li>
              </ul>
            </div>
            {/* Support & Language */}
            <div className="space-y-2">
              <div className="font-semibold mb-2 text-xl">Support</div>
              <ul className="space-y-1">
                <li><a href="mailto:support@collegeconnect.in" className="hover:underline">Contact Support</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
              </ul>
              <div className="mt-4">
                <label htmlFor="lang" className="mr-2">Language:</label>
                <select id="lang" className="rounded border px-2 py-1 bg-white text-black">
                  <option>English</option>
                  <option>हिंदी</option>
                </select>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-white/80 py-4 mt-8">&copy; {new Date().getFullYear()} CollegeConnect. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
