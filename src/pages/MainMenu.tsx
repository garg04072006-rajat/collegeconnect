import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, GraduationCap, Settings, Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();

  const handleGeneralChat = () => {
    navigate("/general-chat");
  };

  const handleCollegeSelection = () => {
    navigate("/college-selection");
  };

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                CollegeConnect
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Welcome to CollegeConnect</h2>
            <p className="text-lg text-muted-foreground">
              Choose how you want to connect with students across India
            </p>
          </div>

          {/* Main Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* General Chat */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={handleGeneralChat}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">General Chat</CardTitle>
                    <CardDescription>Chat with students from all colleges</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Join the main discussion where students from IIT, NIT, IIIT, and other colleges 
                  share knowledge, discuss opportunities, and help each other.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">12,847 active members</span>
                  </div>
                  <Badge variant="secondary">Open to All</Badge>
                </div>
                <Button className="w-full" variant="chat">
                  Join General Chat
                </Button>
              </CardContent>
            </Card>

            {/* College Selection */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={handleCollegeSelection}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">College Chat Rooms</CardTitle>
                    <CardDescription>Connect with your college community</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Select your college to access dedicated chat rooms. Chat with students from 
                  other colleges or join your college-specific private discussions.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">500+ colleges available</span>
                  </div>
                  <Badge variant="outline">Choose College</Badge>
                </div>
                <Button className="w-full" variant="secondary">
                  Select College
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Real-time Chat</h3>
                <p className="text-sm text-muted-foreground">Instant messaging with students nationwide</p>
              </div>
            </Card>
            
            <Card className="text-center p-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold">Verified Students</h3>
                <p className="text-sm text-muted-foreground">All members verified with college credentials</p>
              </div>
            </Card>
            
            <Card className="text-center p-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">College Networks</h3>
                <p className="text-sm text-muted-foreground">Connect within and across college communities</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainMenu;