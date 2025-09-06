import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Send, ArrowLeft, Users, Hash, Lock, BookOpen, Calendar, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IntraCollegeChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [activeChannel, setActiveChannel] = useState("general");
  
  // This would come from the selected college
  const selectedCollege = "IIT Delhi"; // Example

  // Dummy messages for different channels
  const channelMessages = {
    general: [
      {
        id: 1,
        user: "Raj Patel",
        department: "Computer Science",
        message: "Anyone going to the tech fest organizing meeting tomorrow?",
        time: "4:20 PM",
        avatar: "RP"
      },
      {
        id: 2,
        user: "Meera Shah",
        department: "Electronics",
        message: "Yes! I'm helping with the robotics competition.",
        time: "4:22 PM",
        avatar: "MS"
      },
      {
        id: 3,
        user: "Arjun Singh",
        department: "Mechanical",
        message: "Count me in for the organizing committee!",
        time: "4:25 PM",
        avatar: "AS"
      }
    ],
    academics: [
      {
        id: 1,
        user: "Priya Kumar",
        department: "Computer Science",
        message: "Does anyone have notes for Advanced Algorithms from Prof. Sharma's class?",
        time: "2:15 PM",
        avatar: "PK"
      },
      {
        id: 2,
        user: "Rohit Gupta",
        department: "Computer Science",
        message: "I have them! Will share in the group drive.",
        time: "2:18 PM",
        avatar: "RG"
      }
    ],
    events: [
      {
        id: 1,
        user: "Cultural Secretary",
        department: "Student Council",
        message: "Annual cultural fest dates announced: March 15-17. Registrations open!",
        time: "1:30 PM",
        avatar: "CS"
      }
    ]
  };

  const collegemates = [
    { name: "Raj Patel", department: "Computer Science", avatar: "RP", year: "3rd Year" },
    { name: "Meera Shah", department: "Electronics", avatar: "MS", year: "2nd Year" },
    { name: "Arjun Singh", department: "Mechanical", avatar: "AS", year: "4th Year" },
    { name: "Priya Kumar", department: "Computer Science", avatar: "PK", year: "3rd Year" },
    { name: "Rohit Gupta", department: "Computer Science", avatar: "RG", year: "4th Year" },
    { name: "Sneha Reddy", department: "Chemical", avatar: "SR", year: "2nd Year" }
  ];

  const channels = [
    { id: "general", name: "General", icon: Hash, description: "General discussions" },
    { id: "academics", name: "Academics", icon: BookOpen, description: "Study materials & help" },
    { id: "events", name: "Events", icon: Calendar, description: "Campus events & activities" },
    { id: "clubs", name: "Clubs", icon: Trophy, description: "Club activities & recruitment" }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would send the message to Supabase
      console.log("Sending message to", activeChannel, ":", message);
      setMessage("");
    }
  };

  const currentMessages = channelMessages[activeChannel] || [];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Channels & Users */}
      <div className="w-80 border-r bg-card/50 backdrop-blur-sm flex flex-col">
        {/* College Header */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-lg">{selectedCollege}</h2>
              <p className="text-sm text-muted-foreground">Private College Chat</p>
            </div>
          </div>
        </div>

        <Tabs value={activeChannel} onValueChange={setActiveChannel} className="flex-1 flex flex-col">
          {/* Channel Tabs */}
          <div className="border-b">
            <TabsList className="grid grid-cols-2 w-full rounded-none">
              <TabsTrigger value="channels" className="text-xs">Channels</TabsTrigger>
              <TabsTrigger value="members" className="text-xs">Members</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="channels" className="flex-1 m-0">
            <div className="p-4 space-y-2">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <button
                    key={channel.id}
                    onClick={() => setActiveChannel(channel.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                      activeChannel === channel.id
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-accent/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{channel.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{channel.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="members" className="flex-1 m-0">
            <ScrollArea className="h-full">
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{collegemates.length} Online</span>
                </div>
                {collegemates.map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 cursor-pointer">
                    <div className="relative">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="" />
                        <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user.department} • {user.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur-sm p-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/college-chat")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {(() => {
                  const currentChannel = channels.find(c => c.id === activeChannel);
                  if (currentChannel) {
                    const Icon = currentChannel.icon;
                    return <Icon className="w-5 h-5 text-primary" />;
                  }
                  return null;
                })()}
                <h1 className="text-xl font-bold">
                  #{channels.find(c => c.id === activeChannel)?.name || activeChannel}
                </h1>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
                <Lock className="w-3 h-3 mr-1" />
                Private
              </Badge>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">1,247 members</span>
              </div>
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-4xl mx-auto">
            {currentMessages.map((msg) => (
              <div key={msg.id} className="flex gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="" />
                  <AvatarFallback>{msg.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{msg.user}</span>
                    <Badge variant="outline" className="text-xs">
                      {msg.department}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-3 max-w-2xl">
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
            {currentMessages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const currentChannel = channels.find(c => c.id === activeChannel);
                    if (currentChannel) {
                      const Icon = currentChannel.icon;
                      return <Icon className="w-8 h-8 text-muted-foreground" />;
                    }
                    return null;
                  })()}
                </div>
                <h3 className="font-semibold mb-2">Welcome to #{activeChannel}</h3>
                <p className="text-sm text-muted-foreground">
                  This is the beginning of the #{activeChannel} channel for {selectedCollege}
                </p>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="border-t p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2">
              <Input
                placeholder={`Message #${channels.find(c => c.id === activeChannel)?.name || activeChannel}...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} variant="secondary">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              🔒 Private to {selectedCollege} students only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntraCollegeChat;