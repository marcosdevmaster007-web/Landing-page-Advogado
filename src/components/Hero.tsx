import heroImage from "@/assets/hero-lawyer.jpg";
import { MessageCircle, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-glow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-[100px] animate-glow delay-500 pointer-events-none" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsla(38, 72%, 50%, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsla(38, 72%, 50%, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="label-premium">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                Advocacia de Excelência
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-hero text-cream mt-8 mb-8 animate-fade-up delay-100">
              Atuação Jurídica{" "}
              <span className="text-gold-gradient italic">Estratégica</span>
              <br />
              <span className="text-cream/60">& Personalizada</span>
            </h1>

            {/* Subheadline */}
            <p className="text-elegant text-cream/60 mb-10 max-w-xl animate-fade-up delay-200">
              Há mais de 15 anos defendendo os direitos dos nossos clientes com
              ética, dedicação e resultados comprovados.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <a
                href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
              >
                <MessageCircle className="w-5 h-5" />
                Fale pelo WhatsApp
              </a>
              <a
                href="#areas"
                className="btn-outline-premium"
              >
                Conheça nossas áreas
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-16 animate-fade-up delay-400">
              <div className="text-center sm:text-left">
                <span className="block font-heading text-4xl md:text-5xl font-semibold text-gold-gradient">+500</span>
                <span className="text-sm text-cream/50 tracking-wide">Causas Ganhas</span>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              <div className="text-center sm:text-left">
                <span className="block font-heading text-4xl md:text-5xl font-semibold text-gold-gradient">15+</span>
                <span className="text-sm text-cream/50 tracking-wide">Anos Experiência</span>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              <div className="text-center sm:text-left">
                <span className="block font-heading text-4xl md:text-5xl font-semibold text-gold-gradient">98%</span>
                <span className="text-sm text-cream/50 tracking-wide">Satisfação</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative animate-fade-up delay-200">
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-gold/10 blur-sm" />
            <div className="absolute inset-0 rounded-2xl border border-gold/20" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Advogado profissional em escritório jurídico"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-5 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center">
                  <span className="font-heading text-lg font-bold text-obsidian">⚖</span>
                </div>
                <div>
                  <span className="block font-heading text-lg font-semibold text-cream">OAB/SP</span>
                  <span className="text-sm text-cream/50">123.456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="flex flex-col items-center gap-2 text-cream/40 hover:text-gold transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
