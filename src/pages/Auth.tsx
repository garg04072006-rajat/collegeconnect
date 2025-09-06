import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, MessageCircle, Calendar } from "lucide-react";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [loginCollege, setLoginCollege] = useState("");
  const [signupCollege, setSignupCollege] = useState("");

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      try {
        localStorage.setItem("userCollege", loginCollege.trim());
      } catch {}
      setIsLoading(false);
      window.location.href = "/main-menu";
    }, 800);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      try {
        localStorage.setItem("userCollege", signupCollege.trim());
      } catch {}
      setIsLoading(false);
      window.location.href = "/main-menu";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden lg:block space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                CollegeConnect
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Connect with students across India. Share knowledge, find opportunities, and build your network.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card-gradient">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">Connect with students from IIT, NIT, and more</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card-gradient">
              <MessageCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm">Join college-specific chat rooms</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card-gradient">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-sm">Stay updated with hackathons & events</span>
            </div>
          </div>
        </div>

        {/* Right side - Auth forms */}
        <Card className="w-full max-w-md mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome</CardTitle>
            <CardDescription>
              Join the largest student community in India
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@college.edu"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-college-name">College Name</Label>
                    <Input
                      id="login-college-name"
                      type="text"
                      placeholder="Enter your college name"
                      value={loginCollege}
                      onChange={(e) => setLoginCollege(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword((v) => !v)}
                        className="absolute inset-y-0 right-2 my-auto h-8 px-2 text-xs text-muted-foreground hover:text-foreground rounded"
                        aria-label={showLoginPassword ? "Hide password" : "Show password"}
                      >
                        {showLoginPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="hero"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSignupSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">College Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your.email@college.edu"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="college-name">College Name</Label>
                    <Input
                      id="college-name"
                      type="text"
                      placeholder="Enter your college name"
                      value={signupCollege}
                      onChange={(e) => setSignupCollege(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="college-proof">College ID/Proof</Label>
                    <Input
                      id="college-proof"
                      type="file"
                      accept="image/*,.pdf"
                      required
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    <p className="text-xs text-muted-foreground">Upload your student ID or admission letter</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showSignupPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        required
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignupPassword((v) => !v)}
                        className="absolute inset-y-0 right-2 my-auto h-8 px-2 text-xs text-muted-foreground hover:text-foreground rounded"
                        aria-label={showSignupPassword ? "Hide password" : "Show password"}
                      >
                        {showSignupPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="hero"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;