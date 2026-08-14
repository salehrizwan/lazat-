import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-cream shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-50">
          <span
            className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
              isScrolled ? "text-brand-red" : "text-white drop-shadow-md"
            }`}
          >
            Lazat <span className="text-brand-gold">Restaurant</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                isScrolled ? "text-gray-800" : "text-white drop-shadow-sm"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-gold text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-yellow-600 transition-colors"
          >
            Reserve a Table
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 p-2 ${
            isScrolled || mobileMenuOpen ? "text-brand-red" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-brand-cream flex flex-col items-center justify-center gap-6 md:hidden z-40"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-brand-red hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-brand-gold text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg"
            >
              Reserve a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
