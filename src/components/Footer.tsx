import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gold/[0.02] to-transparent pointer-events-none" />

      <div className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-obsidian">S</span>
              </div>
              <span className="font-heading text-2xl font-semibold text-cream">
                Silva <span className="text-gold-gradient">Advocacia</span>
              </span>
            </div>
            <p className="text-cream/50 leading-relaxed mb-8 max-w-md">
              Advocacia de excelência com atendimento personalizado e ético.
              Defendendo seus direitos com dedicação e profissionalismo há mais
              de 15 anos.
            </p>
            <a
              href="https://instagram.com/silvaadvocacia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 border border-gold/20 text-gold hover:bg-gold hover:text-obsidian transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-6">
              Navegação
            </h4>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-cream/50 hover:text-gold transition-colors text-sm tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cream/50 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-cream/50 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>contato@silvaadvocacia.com.br</span>
              </div>
              <div className="flex items-start gap-3 text-cream/50 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/40">
            <p>© {currentYear} Silva Advocacia. Todos os direitos reservados.</p>
            <p className="text-gold/60">OAB/SP 123.456</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
