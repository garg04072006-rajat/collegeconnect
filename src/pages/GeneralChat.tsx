import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, Send, ArrowLeft, Users, Hash, Smile, Mic } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const GeneralChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const onlineUsers = [
    { name: "Rahul Sharma", college: "IIT Delhi", avatar: "RS" },
    { name: "Priya Singh", college: "NIT Trichy", avatar: "PS" },
    { name: "Arjun Kumar", college: "IIIT Hyderabad", avatar: "AK" },
    { name: "Sneha Patel", college: "BITS Pilani", avatar: "SP" },
    { name: "Vikash Yadav", college: "IIT Kanpur", avatar: "VY" },
    { name: "Ananya Gupta", college: "NIT Warangal", avatar: "AG" }
  ];

  const handleSendMessage = async () => {
    if (message.trim()) {
      const msgToSend = message;
      setMessage(""); // Clear input immediately for better UX
      const userName = localStorage.getItem("userName") || "You";
      const userCollege = localStorage.getItem("userCollege") || "Your College";
      const initials = userName.split(" ").map(w => w[0]).join("").toUpperCase().slice(0,2) || "U";
      try {
        await addDoc(collection(db, "generalMessages"), {
          user: userName,
          college: userCollege,
          message: msgToSend,
          avatar: initials,
          createdAt: serverTimestamp(),
        });
      } catch (e) {
        alert("Failed to send message");
        setMessage(msgToSend); // Restore input if failed
      }
    }
  };

  useEffect(() => {
    const q = query(collection(db, "generalMessages"), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            user: data.user,
            college: data.college,
            message: data.message,
            avatar: data.avatar,
            time: data.createdAt && data.createdAt.toDate ? data.createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "--:--"
          };
        })
      );
    });
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Online Users */}
      <div className="w-64 border-r bg-card/50 backdrop-blur-sm">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Online Users</h3>
            <Badge variant="secondary" className="ml-auto">
              {onlineUsers.length}
            </Badge>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="p-4 space-y-3">
            {onlineUsers.map((user, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50">
                <div className="relative">
                  <Avatar className="w-8 h-8">
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
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur-sm p-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/main-menu")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Hash className="w-6 h-6 text-primary" />
              <div>
                <h1 className="text-xl font-bold">General Chat</h1>
                <p className="text-sm text-muted-foreground">All colleges discussion</p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">12,847 members</span>
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map((msg) => (
              <div key={msg.id} className="flex gap-3">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>{msg.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{msg.user}</span>
                    <Badge variant="outline" className="text-xs">
                      {msg.college}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-3">
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
            <div className="flex gap-2 items-center">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button type="button" variant="ghost" size="icon" aria-label="Emoji">
                <Smile className="w-5 h-5" />
              </Button>
              <Button type="button" variant="ghost" size="icon" aria-label="Voice">
                <Mic className="w-5 h-5" />
              </Button>
              <Button onClick={handleSendMessage} variant="hero">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Be respectful and follow community guidelines. Messages are moderated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralChat;