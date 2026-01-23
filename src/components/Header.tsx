import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-obsidian/80 backdrop-blur-xl border-b border-gold/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center">
              <span className="font-heading text-lg font-bold text-obsidian">S</span>
            </div>
            <span className="font-heading text-xl md:text-2xl font-semibold text-cream tracking-wide">
              Silva <span className="text-gold-gradient">Advocacia</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-cream/70 hover:text-gold transition-colors duration-300 tracking-wide group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gold-light to-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium text-sm px-6 py-3"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-cream hover:text-gold transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-obsidian/90 backdrop-blur-sm z-50 lg:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 lg:hidden transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "linear-gradient(180deg, hsl(20, 14%, 6%) 0%, hsl(20, 10%, 4%) 100%)",
        }}
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
        
        <div className="flex flex-col h-full relative">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gold/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center">
                <span className="font-heading text-lg font-bold text-obsidian">S</span>
              </div>
              <span className="font-heading text-xl font-semibold text-cream">
                Silva
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-cream/70 hover:text-gold transition-colors rounded-full hover:bg-gold/5"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-8 px-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block px-6 py-5 text-lg font-medium text-cream/80 hover:text-gold hover:bg-gold/5 rounded-xl transition-all duration-300 border-b border-gold/5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Footer with Instagram */}
          <div className="p-6 border-t border-gold/10">
            <a
              href="https://instagram.com/silvaadvocacia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 hover:border-pink-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block font-medium text-cream group-hover:text-pink-400 transition-colors">Instagram</span>
                <span className="text-sm text-cream/50">@silvaadvocacia</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
