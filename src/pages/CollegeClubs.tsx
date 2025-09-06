import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Sparkles, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const CollegeClubs = () => {
  const navigate = useNavigate();
  const [selectedCollege, setSelectedCollege] = useState<string>("");
  const [userCollege, setUserCollege] = useState<string>("");
  const [canEdit, setCanEdit] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [clubName, setClubName] = useState("");
  const [clubTag, setClubTag] = useState("");

  type Club = { name: string; members: number; tag: string };
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("college");
    const fromStorage = localStorage.getItem("selectedCollege") || "";
    setSelectedCollege(fromQuery || fromStorage || "Your College");
  setUserCollege(localStorage.getItem("userCollege") || "");

    // Optional override via URL: ?allowAll=1 to allow editing anywhere (stores in localStorage)
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

  // Load clubs for this college (from localStorage), seed with some defaults
  useEffect(() => {
    if (!selectedCollege) return;
    const key = `clubs:${selectedCollege}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        setClubs(JSON.parse(stored));
        return;
      } catch {}
    }
    // defaults if nothing stored
    setClubs([
      { name: "Coding Club", members: 180, tag: "Tech" },
      { name: "Robotics Society", members: 120, tag: "Engineering" },
      { name: "Entrepreneurship Cell", members: 240, tag: "Business" },
    ]);
  }, [selectedCollege]);

  // Persist when clubs change
  useEffect(() => {
    if (!selectedCollege) return;
    const key = `clubs:${selectedCollege}`;
    try {
      localStorage.setItem(key, JSON.stringify(clubs));
    } catch {}
  }, [clubs, selectedCollege]);

  const createClub = () => {
    const name = clubName.trim();
    const tag = clubTag.trim() || "General";
    if (!name) return;
    // prevent duplicates by name
    if (clubs.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
      setIsCreateOpen(false);
      setClubName("");
      setClubTag("");
      return;
    }
    setClubs((prev) => [{ name, tag, members: 1 }, ...prev]);
    setIsCreateOpen(false);
    setClubName("");
    setClubTag("");
  };

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
                <h1 className="text-2xl font-bold">Clubs at {selectedCollege}</h1>
                <p className="text-sm text-muted-foreground">Discover student communities and join activities</p>
              </div>
            </div>
    <div className="ml-auto">
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                <DialogTrigger asChild>
          <Button variant="hero" disabled={!canEdit} title={!userCollege ? "Login to create" : !canEdit ? `Only ${selectedCollege} students can create` : undefined}>Create Club</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create a new club</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="club-name">Club name</label>
                      <Input id="club-name" value={clubName} onChange={(e) => setClubName(e.target.value)} placeholder="e.g., AI Club" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="club-tag">Tag</label>
                      <Input id="club-tag" value={clubTag} onChange={(e) => setClubTag(e.target.value)} placeholder="e.g., Tech" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="secondary" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
                    <Button onClick={createClub} disabled={!clubName.trim() || !canEdit}>Create</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {userCollege && selectedCollege && userCollege !== selectedCollege && (
          <div className="mb-4 p-3 border rounded-md bg-muted/30 flex items-center justify-between">
            <p className="text-sm">Logged in as <b>{userCollege}</b>. Switch to your college to create or manage clubs.</p>
            <Button size="sm" onClick={() => navigate(`/college-clubs?college=${encodeURIComponent(userCollege)}`)}>Go to my college</Button>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Card key={club.name} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{club.name}</span>
                  <Badge variant="secondary">{club.tag}</Badge>
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  {club.members} members
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <Button variant="default" className="w-full">View Club</Button>
              </CardContent>
            </Card>
          ))}
          <Card className="border-dashed">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Can’t find your club? Start one and invite members.</p>
              <Button variant="outline" onClick={() => setIsCreateOpen(true)} disabled={!canEdit} title={!userCollege ? "Login to create" : !canEdit ? `Only ${selectedCollege} students can create` : undefined}>Create Club</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CollegeClubs;
