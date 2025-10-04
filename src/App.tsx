import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { HomePage } from "./components/homepage";
import { PassBooking } from "./components/pass-booking";
import { EventSchedule } from "./components/event-schedule";
import { EventsListing } from "./components/events-listing";
import { Speakers } from "./components/speakers";
import { Venue } from "./components/venue";
import { Sponsors } from "./components/sponsors";
import { Team } from "./components/team";
import { UserDashboard } from "./components/user-dashboard";
import { AdminPanel } from "./components/admin-panel";
import { AuthModal } from "./components/auth-modal";
import { PrivacyPolicy } from "./components/privacy-policy";
import { TermsOfService } from "./components/terms-of-service";
import { CookiePolicy } from "./components/cookie-policy";
import { Footer } from "./components/footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "booking":
        return <PassBooking />;
      case "schedule":
        return <EventSchedule />;
      case "events":
        return <EventsListing onNavigate={handleNavigate} />;
      case "speakers":
        return <Speakers />;
      case "venue":
        return <Venue />;
      case "sponsors":
        return <Sponsors />;
      case "team":
        return <Team />;
      case "dashboard":
        return <UserDashboard onNavigate={handleNavigate} />;
      case "admin":
        return <AdminPanel onNavigate={handleNavigate} />;
      case "auth":
        return <AuthModal onNavigate={handleNavigate} />;
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "terms-of-service":
        return <TermsOfService />;
      case "cookie-policy":
        return <CookiePolicy />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isDark={isDark}
        toggleDark={toggleDark}
      />
      <main className="pt-24">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}