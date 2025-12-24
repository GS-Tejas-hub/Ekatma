import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
    <header className={`sticky top-0 z-50 border-b shadow-sm transition-colors duration-200 ${
      isHome ? "bg-white border-border" : "bg-primary text-white border-primary-700"
    }`}>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-auto py-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-wrap justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => window.scrollTo(0, 0)}
                className={`text-base font-semibold transition-colors duration-200 whitespace-nowrap ${
                  isHome
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isHome
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-primary-600"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden pb-6 pt-6 border-t transition-colors duration-200 ${
            isHome
              ? "border-border bg-white"
              : "border-primary-700 bg-primary-600"
          }`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-base font-bold transition-colors ${
                    isHome
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-primary-100"
                  }`}
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
