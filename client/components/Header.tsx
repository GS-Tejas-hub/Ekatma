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
    { label: "Concept Note", href: "/concept-note" },
    { label: "Host Institution", href: "/host-institution" },
    { label: "Knowledge Partners", href: "/knowledge-partners" },
    { label: "Call for Papers", href: "/call-for-papers" },
    { label: "Reception Committee", href: "/reception-committee" },
    { label: "Organising Committee", href: "/organising-committee" },
    { label: "Important Dates", href: "/important-dates" },
    { label: "Registration", href: "/registration" },
    { label: "Speakers", href: "/speakers" },
    { label: "Programme Schedule", href: "/programme-schedule" },
    { label: "Venue & Travel", href: "/venue-travel" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-auto py-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-wrap justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => window.scrollTo(0, 0)}
                className="text-base font-semibold text-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
