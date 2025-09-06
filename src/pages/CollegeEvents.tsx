import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CalendarDays, MapPin, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CollegeEvents = () => {
  const navigate = useNavigate();
  const [selectedCollege, setSelectedCollege] = useState<string>("");
  const [userCollege, setUserCollege] = useState<string>("");
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("college");
    const fromStorage = localStorage.getItem("selectedCollege") || "";
    setSelectedCollege(fromQuery || fromStorage || "Your College");
    setUserCollege(localStorage.getItem("userCollege") || "");

    const allowAllParam = params.get("allowAll");
    if (allowAllParam === "1" || allowAllParam === "true") {
      localStorage.setItem("allowAll", "true");
    } else if (allowAllParam === "0" || allowAllParam === "false") {
      localStorage.removeItem("allowAll");
    }
  }, []);

  useEffect(() => {
    const allowAll = localStorage.getItem("allowAll") === "true";
    setCanEdit(!!userCollege && (userCollege === selectedCollege || allowAll));
  }, [userCollege, selectedCollege]);

  const events = [
    { title: "Tech Talk: AI in 2025", date: "Sep 15", venue: "Auditorium", tag: "Seminar" },
    { title: "Cultural Night", date: "Sep 20", venue: "Main Ground", tag: "Cultural" },
    { title: "Startup Pitch Day", date: "Oct 5", venue: "Innovation Lab", tag: "E-Cell" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Events at {selectedCollege}</h1>
                <p className="text-sm text-muted-foreground">Upcoming activities and gatherings</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {userCollege && selectedCollege && userCollege !== selectedCollege && (
          <div className="mb-4 p-3 border rounded-md bg-muted/30 flex items-center justify-between">
            <p className="text-sm">Logged in as <b>{userCollege}</b>. Switch to your college to create or manage events.</p>
            <Button size="sm" onClick={() => navigate(`/college-events?college=${encodeURIComponent(userCollege)}`)}>Go to my college</Button>
          </div>
        )}
        <div className="flex justify-end mb-4">
          <Button variant="hero" disabled={!canEdit} title={!userCollege ? "Login to create" : !canEdit ? `Only ${selectedCollege} students can create` : undefined}>
            Create Event
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => (
            <Card key={ev.title} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{ev.title}</span>
                  <Badge variant="secondary">{ev.tag}</Badge>
                </CardTitle>
                <CardDescription className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />{ev.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{ev.venue}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <Button variant="default" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CollegeEvents;
