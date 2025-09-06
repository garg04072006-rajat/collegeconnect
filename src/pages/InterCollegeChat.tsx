import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, Send, ArrowLeft, Users, Hash, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InterCollegeChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  // Dummy messages for demo
  const messages = [
    {
      id: 1,
      user: "Rahul Sharma",
      college: "IIT Delhi",
      message: "Hey everyone! Anyone working on AI/ML projects this semester?",
      time: "3:45 PM",
      avatar: "RS"
    },
    {
      id: 2,
      user: "Priya Singh",
      college: "NIT Trichy",
      message: "Yes! I'm building a recommendation system for my final year project.",
      time: "3:47 PM",
      avatar: "PS"
    },
    {
      id: 3,
      user: "Arjun Kumar",
      college: "IIIT Hyderabad",
      message: "That sounds interesting! Are you using collaborative filtering or content-based approach?",
      time: "3:50 PM",
      avatar: "AK"
    },
    {
      id: 4,
      user: "Sneha Patel",
      college: "BITS Pilani",
      message: "I'm working on computer vision project. Happy to collaborate if anyone needs help with image processing!",
      time: "3:52 PM",
      avatar: "SP"
    },
    {
      id: 5,
      user: "Vikash Yadav",
      college: "IIT Kanpur",
      message: "@Priya I'm implementing hybrid recommendation system. Can share my approach if you're interested.",
      time: "3:55 PM",
      avatar: "VY"
    }
  ];

  const onlineUsers = [
    { name: "Rahul Sharma", college: "IIT Delhi", avatar: "RS" },
    { name: "Priya Singh", college: "NIT Trichy", avatar: "PS" },
    { name: "Arjun Kumar", college: "IIIT Hyderabad", avatar: "AK" },
    { name: "Sneha Patel", college: "BITS Pilani", avatar: "SP" },
    { name: "Vikash Yadav", college: "IIT Kanpur", avatar: "VY" },
    { name: "Ananya Gupta", college: "NIT Warangal", avatar: "AG" },
    { name: "Karthik Reddy", college: "IIIT Bangalore", avatar: "KR" },
    { name: "Meera Shah", college: "DTU Delhi", avatar: "MS" }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would send the message to Supabase
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Online Users */}
      <div className="w-72 border-r bg-card/50 backdrop-blur-sm">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Inter-College Students</h3>
            <Badge variant="secondary" className="ml-auto">
              {onlineUsers.length}+
            </Badge>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="p-4 space-y-3">
            {onlineUsers.map((user, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 cursor-pointer">
                <div className="relative">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.college}</p>
                </div>
              </div>
            ))}
            <div className="text-center py-2">
              <p className="text-xs text-muted-foreground">+8,421 more students online</p>
            </div>
          </div>
        </ScrollArea>
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
              <MessageCircle className="w-6 h-6 text-primary" />
              <div>
                <h1 className="text-xl font-bold">Inter-College Chat</h1>
                <p className="text-sm text-muted-foreground">Students from all colleges</p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">8,429 students online</span>
              </div>
              <Badge variant="secondary">Cross-College</Badge>
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map((msg) => (
              <div key={msg.id} className="flex gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="" />
                  <AvatarFallback>{msg.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{msg.user}</span>
                    <Badge variant="outline" className="text-xs">
                      {msg.college}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-3 max-w-2xl">
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="border-t p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2">
              <Input
                placeholder="Share your thoughts with students across India..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} variant="hero">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              🌟 Connecting students from IIT, NIT, IIIT, and 500+ colleges across India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterCollegeChat;