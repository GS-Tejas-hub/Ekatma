import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface TimeRemaining {
  days: number;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({ days: 0 });

  useEffect(() => {
    const calculateDays = () => {
      const conferenceDate = new Date(2026, 2, 25).getTime();
      const now = new Date().getTime();
      const difference = conferenceDate - now;

      if (difference <= 0) {
        setTimeRemaining({ days: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      setTimeRemaining({ days });
    };

    calculateDays();
    const timer = setInterval(calculateDays, 1000 * 60 * 60); // Update every hour
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Call for Papers", href: "/call-for-papers" },
    { label: "Important Dates", href: "/important-dates" },
    { label: "Registration", href: "/registration" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Branding */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-primary">
                Ekatma Manav
              </span>
              <span className="font-bold text-2xl text-secondary">
                Darshan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => window.scrollTo(0, 0)}
                className="text-base font-bold text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Days Countdown */}
            <div className="flex flex-col items-center gap-0 px-4 py-2 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-xs font-bold text-primary">Days left for</p>
              <p className="text-xs font-bold text-primary">conference</p>
              <p className="text-2xl font-bold text-primary mt-1">{timeRemaining.days}</p>
            </div>

            <Link
              to="/registration"
              onClick={() => window.scrollTo(0, 0)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-border pt-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-base font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/registration"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-primary-700 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Register Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
