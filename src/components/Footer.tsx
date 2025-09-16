import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
  <footer className="w-full border-t bg-card/80 dark:bg-[#10131a] dark:text-white backdrop-blur-sm mt-auto">
  <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-muted-foreground dark:text-white text-sm">
        {/* CollegeConnect Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary dark:text-white" />
            <span className="font-bold text-lg text-primary dark:text-white">CollegeConnect</span>
          </div>
          <p className="max-w-xs">India's largest student networking platform. Connect, share, and grow with students across IITs, NITs, and top colleges.</p>
        </div>
        {/* Quick Links */}
        <div className="space-y-2">
          <div className="font-semibold text-foreground dark:text-white mb-2">Quick Links</div>
          <ul className="space-y-1">
            <li><a href="/auth" className="hover:underline">Login / Signup</a></li>
            <li><a href="/main-menu" className="hover:underline">Dashboard</a></li>
            <li><a href="/settings" className="hover:underline">Settings</a></li>
          </ul>
        </div>
        {/* Categories */}
        <div className="space-y-2">
          <div className="font-semibold text-foreground dark:text-white mb-2">Categories</div>
          <ul className="space-y-1">
            <li><a href="/college-events" className="hover:underline">Events</a></li>
            <li><a href="/college-hackathons" className="hover:underline">Hackathons</a></li>
            <li><a href="/college-clubs" className="hover:underline">Clubs</a></li>
            <li><a href="/general-chat" className="hover:underline">General Chat</a></li>
          </ul>
        </div>
        {/* Support & Language */}
        <div className="space-y-2">
          <div className="font-semibold text-foreground dark:text-white mb-2">Support</div>
          <ul className="space-y-1">
            <li><a href="mailto:support@collegeconnect.in" className="hover:underline">Contact Support</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
          </ul>
          <div className="mt-4">
            <label htmlFor="lang" className="mr-2">Language:</label>
            <select id="lang" className="rounded border px-2 py-1 bg-background">
              <option>English</option>
              <option>हिंदी</option>
            </select>
          </div>
        </div>
      </div>
  <div className="text-center text-xs text-muted-foreground dark:text-white/70 py-4 border-t">&copy; {new Date().getFullYear()} CollegeConnect. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
