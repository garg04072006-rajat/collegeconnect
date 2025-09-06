import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Timer, Globe, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CollegeHackathons = () => {
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

    const params2 = new URLSearchParams(window.location.search);
    const allowAllParam = params2.get("allowAll");
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

  const hacks = [
    { name: "Hack the Campus", time: "48 hrs", scope: "Onsite" },
    { name: "AI Sprint", time: "36 hrs", scope: "Online" },
    { name: "GreenTech Challenge", time: "24 hrs", scope: "Onsite" },
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
                <h1 className="text-2xl font-bold">Hackathons at {selectedCollege}</h1>
                <p className="text-sm text-muted-foreground">Build fast, learn faster</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {userCollege && selectedCollege && userCollege !== selectedCollege && (
          <div className="mb-4 p-3 border rounded-md bg-muted/30 flex items-center justify-between">
            <p className="text-sm">Logged in as <b>{userCollege}</b>. Switch to your college to create or manage hackathons.</p>
            <Button size="sm" onClick={() => navigate(`/college-hackathons?college=${encodeURIComponent(userCollege)}`)}>Go to my college</Button>
          </div>
        )}
        <div className="flex justify-end mb-4">
          <Button variant="hero" disabled={!canEdit} title={!userCollege ? "Login to create" : !canEdit ? `Only ${selectedCollege} students can create` : undefined}>
            Create Hackathon
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hacks.map((h) => (
            <Card key={h.name} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{h.name}</span>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{h.scope}</Badge>
                    <Badge variant="outline" className="flex items-center gap-1"><Timer className="w-3 h-3" />{h.time}</Badge>
                  </div>
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-muted-foreground" /> Open to all students
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

export default CollegeHackathons;
