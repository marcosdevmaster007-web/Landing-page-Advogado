import { MessageCircle, Instagram, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="label-premium mb-6 inline-block">Contato</span>
            <h2 className="heading-section text-cream mb-6">
              Vamos <span className="text-gold-gradient italic">Conversar</span>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="line-gold" />
            </div>
            <p className="text-elegant text-cream/60 max-w-xl mx-auto">
              Entre em contato para agendar uma consulta ou tirar suas dúvidas.
              Estamos prontos para ajudar.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5511999999999?text=Olá, gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center mb-5 group-hover:border-green-500/50 transition-colors">
                <MessageCircle className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-cream mb-2 group-hover:text-green-400 transition-colors">
                WhatsApp
              </h3>
              <p className="text-cream/50 text-sm mb-4">(11) 99999-9999</p>
              <div className="inline-flex items-center gap-2 text-green-400 text-sm font-medium">
                Enviar mensagem
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/silvaadvocacia"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/30 flex items-center justify-center mb-5 group-hover:border-pink-500/50 transition-colors">
                <Instagram className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-cream mb-2 group-hover:text-pink-400 transition-colors">
                Instagram
              </h3>
              <p className="text-cream/50 text-sm mb-4">@silvaadvocacia</p>
              <div className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium">
                Seguir perfil
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Location */}
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gold/20 to-gold-dark/20 border border-gold/30 flex items-center justify-center mb-5">
                <MapPin className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-cream mb-2">
                Localização
              </h3>
              <p className="text-cream/50 text-sm">São Paulo, SP</p>
              <p className="text-cream/40 text-xs mt-2">Centro - Fácil acesso</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            
            <div className="relative">
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-cream mb-4">
                Pronto para resolver sua
                <br />
                <span className="text-gold-gradient italic">questão jurídica?</span>
              </h3>
              <p className="text-cream/60 mb-10 max-w-lg mx-auto">
                Agende uma consulta sem compromisso e descubra como podemos ajudar
                a proteger seus direitos.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-lg px-12 py-5"
              >
                <MessageCircle className="w-6 h-6" />
                Fale pelo WhatsApp Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
