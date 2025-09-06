import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MessageCircle, Users, ArrowLeft, Lock, CalendarDays, Sparkles, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CollegeChat = () => {
  const navigate = useNavigate();
  const [selectedChatType, setSelectedChatType] = useState("");
  const [selectedCollege, setSelectedCollege] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("college");
    const fromStorage = localStorage.getItem("selectedCollege") || "";
    const finalVal = fromQuery || fromStorage || "Your College";
    setSelectedCollege(finalVal);
  }, []);

  const handleInterCollegeChat = () => {
    navigate("/inter-college-chat");
  };

  const handleIntraCollegeChat = () => {
    navigate("/intra-college-chat");
  };

  const goTo = (path: string) => {
    const suffix = selectedCollege ? `?college=${encodeURIComponent(selectedCollege)}` : "";
    navigate(`${path}${suffix}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/college-selection")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                  College Chat Rooms
                </h1>
                <p className="text-sm text-muted-foreground">{selectedCollege}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Choose Your Chat Experience</h2>
            <p className="text-lg text-muted-foreground">
              Connect with students from your college or explore conversations across different institutions
            </p>
          </div>

          {/* Chat Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Inter-College Chat */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={handleInterCollegeChat}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Inter-College Chat</CardTitle>
                    <CardDescription>Chat with students from all colleges</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Join discussions with students from IIT, NIT, IIIT, and other colleges. 
                  Share knowledge, collaborate on projects, and build your network across institutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">8,429 active students</span>
                    </div>
                    <Badge variant="secondary">Open</Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Popular Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Hackathons</Badge>
                      <Badge variant="outline" className="text-xs">Placements</Badge>
                      <Badge variant="outline" className="text-xs">Research</Badge>
                      <Badge variant="outline" className="text-xs">Projects</Badge>
                    </div>
                  </div>
                </div>
                <Button className="w-full" variant="default">
                  Join Inter-College Chat
                </Button>
              </CardContent>
            </Card>

            {/* Intra-College Chat */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={handleIntraCollegeChat}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Lock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Intra-College Chat</CardTitle>
                    <CardDescription>Private chat for {selectedCollege} only</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Connect exclusively with your college mates. Discuss campus events, 
                  course materials, local opportunities, and build stronger bonds within your institution.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">1,247 college mates</span>
                    </div>
                    <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
                      <Lock className="w-3 h-3 mr-1" />
                      Private
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">College Channels:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">General</Badge>
                      <Badge variant="outline" className="text-xs">Academics</Badge>
                      <Badge variant="outline" className="text-xs">Events</Badge>
                      <Badge variant="outline" className="text-xs">Clubs</Badge>
                    </div>
                  </div>
                </div>
                <Button className="w-full" variant="secondary">
                  Join {selectedCollege} Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Explore: Clubs, Events, Hackathons */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => goTo("/college-clubs")}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Clubs</CardTitle>
                    <CardDescription>Student groups at {selectedCollege}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => goTo("/college-events")}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <CalendarDays className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Events</CardTitle>
                    <CardDescription>What’s happening at {selectedCollege}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => goTo("/college-hackathons")}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Timer className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Hackathons</CardTitle>
                    <CardDescription>Compete and build at {selectedCollege}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Real-time Communication</h3>
                <p className="text-sm text-muted-foreground">Instant messaging with read receipts and typing indicators</p>
              </div>
            </Card>
            
            <Card className="text-center p-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold">Verified Community</h3>
                <p className="text-sm text-muted-foreground">All members verified with college credentials</p>
              </div>
            </Card>
            
            <Card className="text-center p-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Privacy Control</h3>
                <p className="text-sm text-muted-foreground">Choose between open discussions and private college chats</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollegeChat;