import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/jbk-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between py-5">
        <a
          href="tel:07774015129"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-accent font-body font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10">
          <div className="container py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-primary-foreground/80 hover:text-accent font-body font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:07774015129"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-body font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
