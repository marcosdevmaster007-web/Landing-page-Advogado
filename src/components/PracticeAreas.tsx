import {
  Users,
  Briefcase,
  Heart,
  ShoppingCart,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const practiceAreas = [
  {
    icon: FileText,
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, direitos reais, obrigações e ações de cobrança.",
    number: "01",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description:
      "Defesa de trabalhadores e empregadores em reclamações trabalhistas e questões previdenciárias.",
    number: "02",
  },
  {
    icon: Heart,
    title: "Direito de Família",
    description:
      "Divórcio, guarda, pensão alimentícia, inventário e partilha de bens.",
    number: "03",
  },
  {
    icon: ShoppingCart,
    title: "Direito do Consumidor",
    description:
      "Proteção nas relações de consumo, cobranças indevidas e vícios de produtos.",
    number: "04",
  },
  {
    icon: Users,
    title: "Consultoria Jurídica",
    description:
      "Assessoria preventiva para pessoas físicas e jurídicas em diversas demandas legais.",
    number: "05",
  },
];

export function PracticeAreas() {
  return (
    <section id="areas" className="section-padding relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="label-premium mb-6 inline-block">Áreas de Atuação</span>
          <h2 className="heading-section text-cream mb-6">
            Expertise Jurídica{" "}
            <span className="text-gold-gradient italic">Completa</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="line-gold" />
          </div>
          <p className="text-elegant text-cream/60 max-w-2xl mx-auto">
            Atuação generalista com profundo conhecimento em diversas áreas do
            Direito, oferecendo soluções jurídicas eficientes e personalizadas.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <a
              key={area.title}
              href={`https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre ${area.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-heading text-5xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors">
                {area.number}
              </span>

              {/* Icon */}
              <div className="icon-premium mb-6 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all">
                <area.icon className="w-6 h-6 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-semibold text-cream mb-4 group-hover:text-gold transition-colors">
                {area.title}
              </h3>
              <p className="text-cream/50 mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-4 transition-all">
                Saiba mais
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
