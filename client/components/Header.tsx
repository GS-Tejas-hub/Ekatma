import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <span className="font-bold text-lg text-primary">
                Ekatma Manav
              </span>
              <span className="text-xs text-secondary font-semibold">
                Darshan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => window.scrollTo(0, 0)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/registration"
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
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
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
                onClick={() => setIsMenuOpen(false)}
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
