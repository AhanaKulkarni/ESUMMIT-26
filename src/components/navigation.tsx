import { useState, useEffect } from "react";
import { Menu, Calendar, Users, MapPin, Trophy, Ticket, LogIn, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion, AnimatePresence } from "motion/react";
import { GradientText } from "./magicui/gradient-text";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDark: boolean;
  toggleDark: () => void;
}

export function Navigation({ currentPage, onNavigate, isDark, toggleDark }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: null },
    { id: "events", label: "Events", icon: Trophy },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "speakers", label: "Speakers", icon: Users },
    { id: "venue", label: "Venue", icon: MapPin },
    { id: "sponsors", label: "Sponsors", icon: null },
    { id: "team", label: "Team", icon: null },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <motion.div
          className={`relative overflow-hidden rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-background/80 backdrop-blur-md shadow-lg shadow-primary/5"
              : "bg-background/60 backdrop-blur-sm"
          }`}
          animate={{
            boxShadow: isScrolled
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <div className="relative flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 transition-colors hover:text-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-primary-foreground">E</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent" />
              </motion.div>
              <div className="hidden sm:block">
                <GradientText className="whitespace-nowrap">E-Summit 2025</GradientText>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-4 py-2 rounded-full transition-all ${
                    currentPage === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <AnimatePresence>
                    {currentPage === item.id && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDark}
                  className="hidden sm:inline-flex rounded-full hover:bg-primary/10"
                >
                  <AnimatePresence mode="wait">
                    {isDark ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate("auth")}
                  className="rounded-full hover:bg-primary/10"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <Button
                  size="sm"
                  onClick={() => onNavigate("booking")}
                  className="rounded-full bg-gradient-to-r from-primary to-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
                >
                  <Ticket className="mr-2 h-4 w-4" />
                  Book Pass
                </Button>
              </motion.div>

              {/* Mobile menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col gap-4 py-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <GradientText>E-Summit 2025</GradientText>
                      <Button variant="ghost" size="icon" onClick={toggleDark} className="rounded-full">
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      </Button>
                    </div>

                    <div className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <Button
                          key={item.id}
                          variant={currentPage === item.id ? "default" : "ghost"}
                          className="justify-start rounded-full"
                          onClick={() => {
                            onNavigate(item.id);
                            setIsOpen(false);
                          }}
                        >
                          {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                          {item.label}
                        </Button>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2 border-t pt-4">
                      <Button
                        variant="outline"
                        className="rounded-full"
                        onClick={() => {
                          onNavigate("auth");
                          setIsOpen(false);
                        }}
                      >
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </Button>
                      <Button
                        className="rounded-full bg-gradient-to-r from-primary to-primary/90"
                        onClick={() => {
                          onNavigate("booking");
                          setIsOpen(false);
                        }}
                      >
                        <Ticket className="mr-2 h-4 w-4" />
                        Book Pass
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}