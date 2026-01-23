import { Scale, Award, Users, Shield } from "lucide-react";

const highlights = [
  {
    icon: Scale,
    title: "Ética Profissional",
    description: "Compromisso absoluto com os princípios éticos da advocacia",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "Mais de 15 anos de atuação em diversas áreas do Direito",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Cada cliente é único e merece atenção personalizada",
  },
  {
    icon: Shield,
    title: "Sigilo Absoluto",
    description: "Suas informações tratadas com total confidencialidade",
  },
];

export function About() {
  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <span className="label-premium mb-6 inline-block">Sobre o Advogado</span>
            
            <h2 className="heading-section text-cream mb-8">
              Compromisso com a{" "}
              <span className="text-gold-gradient italic">Justiça</span>
              <br />e seus Direitos
            </h2>

            <div className="line-gold mb-8" />

            <div className="space-y-6 text-elegant text-cream/60">
              <p>
                Dr. Ricardo Silva é advogado inscrito na OAB/SP, graduado em
                Direito pela Universidade de São Paulo (USP), com especialização
                em Direito Civil e Processual Civil pela PUC-SP.
              </p>
              <p>
                Com mais de 15 anos de experiência, atua de forma generalista,
                oferecendo assessoria jurídica completa para pessoas físicas e
                jurídicas. Sua prática é pautada pela ética, transparência e
                busca incansável pelos melhores resultados.
              </p>
              <p>
                Acredita que cada caso merece atenção individualizada e
                estratégias personalizadas, garantindo que seus clientes
                compreendam cada etapa do processo.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-obsidian">RS</span>
              </div>
              <div>
                <span className="block font-heading text-xl font-semibold text-cream">Dr. Ricardo Silva</span>
                <span className="text-sm text-gold">Advogado | OAB/SP 123.456</span>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="icon-premium mb-5 group-hover:bg-gold/20 group-hover:border-gold/30">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-cream mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
