
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, GraduationCap, MapPin, Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const collegeCategories = [
  {
    category: "IIT",
    colleges: [
      "IIT Delhi", "IIT Bombay", "IIT Madras", "IIT Kanpur", "IIT Kharagpur",
      "IIT Roorkee", "IIT Guwahati", "IIT Hyderabad", "IIT Indore", "IIT Mandi",
      "IIT BHU Varanasi", "IIT Patna", "IIT Gandhinagar", "IIT Jodhpur", "IIT Bhubaneswar",
      "IIT Ropar", "IIT ISM Dhanbad", "IIT Palakkad", "IIT Tirupati", "IIT Dharwad",
      "IIT Bhilai", "IIT Goa", "IIT Jammu"
    ],
    color: "bg-primary"
  },
  {
    category: "IIIT",
    colleges: [
      "IIIT Hyderabad", "IIIT Allahabad", "IIIT Gwalior", "IIIT Jabalpur", "IIIT Kota",
      "IIIT Sri City", "IIIT Vadodara", "IIIT Nagpur", "IIIT Pune", "IIIT Kurnool",
      "IIIT Sonepat", "IIIT Kalyani", "IIIT Lucknow", "IIIT Dharwad", "IIIT Kottayam",
      "IIIT Ranchi", "IIIT Una", "IIIT Surat", "IIIT Bhopal", "IIIT Agartala"
    ],
    color: "bg-purple-500"
  },
  {
    category: "NIT",
    colleges: [
      "NIT Trichy", "NIT Warangal", "NIT Surathkal", "NIT Calicut", "NIT Rourkela",
      "NIT Allahabad", "NIT Bhopal", "NIT Nagpur", "NIT Durgapur", "NIT Silchar", "MNIT Jaipur",
      "NIT Kurukshetra", "NIT Jamshedpur", "NIT Hamirpur", "NIT Jalandhar", "NIT Patna",
      "NIT Raipur", "NIT Agartala", "NIT Arunachal Pradesh", "NIT Delhi", "NIT Goa",
      "NIT Manipur", "NIT Meghalaya", "NIT Mizoram", "NIT Puducherry", "NIT Sikkim",
      "NIT Srinagar", "NIT Uttarakhand", "NIT Andhra Pradesh", "MANIT Bhopal", "VNIT Nagpur"
    ],
    color: "bg-secondary"
  },
  {
    category: "Government Colleges",
    colleges: [
      "DTU Delhi", "NSIT Delhi", "ICT Mumbai", "COEP Pune", "VJTI Mumbai",
      "PSG Coimbatore", "Anna University", "M.B.M. University Jodhpur", "Jadavpur University",
      "Calcutta University", "BIT Mesra", "Thapar University", "Jamia Millia Islamia",
      "Aligarh Muslim University", "Banaras Hindu University", "University of Delhi",
      "Punjab University", "Osmania University", "Andhra University", "Cochin University"
    ],
    color: "bg-muted"
  },
  {
    category: "Private Engineering",
    colleges: [
      "BITS Pilani", "VIT Vellore", "SRM Chennai", "Manipal University", "KIIT Bhubaneswar",
      "Lovely Professional University", "Amity University", "Bennett University", "Shiv Nadar University",
      "JIIT Noida", "Galgotias University", "Graphic Era University", "Kalinga University",
      "Chandigarh University", "Chitkara University", "Nirma University", "Pandit Deendayal University",
      "Symbiosis Institute", "UPES Dehradun", "MIT Manipal", "RV College Bangalore"
    ],
    color: "bg-accent"
  }
];

const CollegeSelection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredColleges = collegeCategories
    .map((category) => ({
      ...category,
      colleges: category.colleges.filter((college) =>
        college.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.colleges.length > 0);

  const handleCollegeClick = (college: string) => {
    try {
      localStorage.setItem("selectedCollege", college);
    } catch {}
    window.location.href = `/college-chat?college=${encodeURIComponent(college)}`;
  };

  return (
    <div className="min-h-screen bg-background p-4 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-4"
        onClick={() => navigate('/main-menu')}
        aria-label="Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Choose Your College
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your college to connect with fellow students and access college-specific features
          </p>
        </div>

        {/* Search */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search for your college..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* College Categories */}
        <div className="space-y-6">
          {filteredColleges.map((category) => (
            <Card key={category.category} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  {category.category}
                  <Badge variant="secondary" className="ml-auto">
                    {category.colleges.length} colleges
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Select from top {category.category} institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.colleges.map((college) => (
                    <Card
                      key={college}
                      className={"cursor-pointer transition-all duration-200 hover:shadow-md hover:bg-muted/50"}
                      onClick={() => handleCollegeClick(college)}
                    >
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <h3 className="font-medium">{college}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              India
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {Math.floor(Math.random() * 5000) + 1000}+ students
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeSelection;
