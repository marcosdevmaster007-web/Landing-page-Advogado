import { MapPin, Clock, Video, Shield, MessageCircle } from "lucide-react";

const serviceFeatures = [
  {
    icon: MapPin,
    title: "Atendimento Presencial",
    description: "Escritório em região central com fácil acesso",
  },
  {
    icon: Video,
    title: "Atendimento Online",
    description: "Consultas por videoconferência para sua comodidade",
  },
  {
    icon: Clock,
    title: "Resposta em 24h",
    description: "Retorno ágil para todas as demandas",
  },
  {
    icon: Shield,
    title: "Sigilo Total",
    description: "Confidencialidade em todas as tratativas",
  },
];

export function Service() {
  return (
    <section id="atendimento" className="section-padding relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <span className="label-premium mb-6 inline-block">Atendimento</span>
            
            <h2 className="heading-section text-cream mb-8">
              Seu <span className="text-gold-gradient italic">Direito</span>
              <br />é Nossa Prioridade
            </h2>

            <div className="line-gold mb-8" />

            <div className="space-y-6 text-elegant text-cream/60 mb-10">
              <p>
                Entendemos que cada situação jurídica é única e requer atenção
                especializada. Por isso, oferecemos atendimento personalizado
                tanto presencial quanto online.
              </p>
              <p>
                Nosso compromisso é garantir que você se sinta acolhido e bem
                informado em cada etapa do processo, com total transparência
                sobre prazos, custos e expectativas.
              </p>
            </div>

            <a
              href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Consulta
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="icon-premium mb-5 group-hover:bg-gold/20 group-hover:border-gold/30">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-cream/50">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
