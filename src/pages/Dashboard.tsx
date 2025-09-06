
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Users, 
  User, 
  BookOpen, 
  Trophy, 
  Briefcase, 
  Heart,
  Bell,
  Settings
} from "lucide-react";

const Dashboard = () => {
  const handleGeneralChatClick = () => {
    console.log("Opening General Chat...");
    // This will be implemented with Supabase integration
    alert("General Chat will be available after Supabase integration");
  };

  const handleCollegeChatClick = () => {
    console.log("Opening College Chat...");
    // This will be implemented with Supabase integration
    alert("College Chat will be available after Supabase integration");
  };

  const handlePersonalChatClick = () => {
    console.log("Opening Personal Messages...");
    // This will be implemented with Supabase integration
    alert("Personal Messages will be available after Supabase integration");
  };

  const handleFeatureClick = (feature: string) => {
    console.log(`Opening ${feature}...`);
    alert(`${feature} will be available soon!`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <div>
                <h1 className="font-bold text-xl">CollegeConnect</h1>
                <p className="text-sm text-muted-foreground">IIT Delhi</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Welcome back, Student!</h2>
          <p className="text-muted-foreground">
            Connect, share, and grow with your college community
          </p>
        </div>

        {/* Chat Rooms */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Chat Rooms</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={handleGeneralChatClick}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  General Chat
                  <Badge variant="destructive" className="ml-auto">Live</Badge>
                </CardTitle>
                <CardDescription>
                  Connect with students from all colleges across India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">12,453 members online</span>
                  </div>
                  <Button variant="chat" className="w-full group-hover:scale-105 transition-transform" onClick={(e) => {
                    e.stopPropagation();
                    handleGeneralChatClick();
                  }}>
                    Join General Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={handleCollegeChatClick}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-secondary" />
                  College Chat
                  <Badge variant="secondary" className="ml-auto">IIT Delhi</Badge>
                </CardTitle>
                <CardDescription>
                  Chat with your fellow IIT Delhi students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">2,847 members online</span>
                  </div>
                  <Button variant="chat" className="w-full group-hover:scale-105 transition-transform" onClick={(e) => {
                    e.stopPropagation();
                    handleCollegeChatClick();
                  }}>
                    Join College Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={handlePersonalChatClick}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <User className="w-6 h-6 text-accent" />
                  Personal Chat
                  <Badge variant="outline" className="ml-auto">Direct</Badge>
                </CardTitle>
                <CardDescription>
                  One-on-one conversations with your connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">5 new messages</span>
                  </div>
                  <Button variant="chat" className="w-full group-hover:scale-105 transition-transform" onClick={(e) => {
                    e.stopPropagation();
                    handlePersonalChatClick();
                  }}>
                    Open Messages
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* College Features */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">College Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => handleFeatureClick("Study Materials")}>
              <CardHeader className="text-center">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-2 group-hover:animate-float" />
                <CardTitle>Study Materials</CardTitle>
                <CardDescription>
                  Share and access notes, assignments, and resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Badge variant="secondary">847 files shared</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => handleFeatureClick("Hackathons & Events")}>
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-secondary mx-auto mb-2 group-hover:animate-float" />
                <CardTitle>Hackathons & Events</CardTitle>
                <CardDescription>
                  Discover and participate in competitions and events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Badge variant="secondary">23 upcoming events</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => handleFeatureClick("Placements")}>
              <CardHeader className="text-center">
                <Briefcase className="w-12 h-12 text-accent mx-auto mb-2 group-hover:animate-float" />
                <CardTitle>Placements</CardTitle>
                <CardDescription>
                  Get updates on internships and job opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Badge variant="secondary">156 opportunities</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => handleFeatureClick("Clubs & Societies")}>
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-destructive mx-auto mb-2 group-hover:animate-float" />
                <CardTitle>Clubs & Societies</CardTitle>
                <CardDescription>
                  Join student clubs and societies in your college
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Badge variant="secondary">42 active clubs</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Stats */}
        <section>
          <Card className="bg-card-gradient shadow-xl">
            <CardHeader>
              <CardTitle className="text-center">Community Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Students Connected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">2.5K+</div>
                  <div className="text-sm text-muted-foreground">Study Materials</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">180+</div>
                  <div className="text-sm text-muted-foreground">Colleges</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
