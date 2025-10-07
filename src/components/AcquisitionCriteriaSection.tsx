import Image from 'next/image';

const RUST = "#B7472A";

const criteria = [
  {
    id: "margins",
    title: "Marges Solides",
    subtitle: "Rentabilité et résilience",
    description: "Entreprises avec des marges saines (EBITDA >15%) démontrant un modèle économique robuste et pérenne.",
    image: "/images/icon-chart.png",
    gradient: "from-[#B7472A]/5 to-[#B7472A]/10"
  },
  {
    id: "advantage",
    title: "Avantage Concurrentiel",
    subtitle: "Position forte sur votre marché",
    description: "Une niche, un savoir-faire unique, une marque reconnue ou des barrières à l'entrée naturelles.",
    image: "/images/icon-mountain.png",
    gradient: "from-[#f59e0b]/5 to-[#f59e0b]/10"
  },
  {
    id: "model",
    title: "Modèle Simple",
    subtitle: "Compréhensible et duplicable",
    description: "Business model clair, pas de complexité excessive. Nous privilégions la clarté à la sophistication.",
    image: "/images/icon-brain.png",
    gradient: "from-[#B7472A]/5 to-[#B7472A]/10"
  },
  {
    id: "profit",
    title: "Chiffre d'Affaires Attractif",
    subtitle: "Entre 2M€ et 20M€",
    description: "Taille idéale pour rejoindre notre groupe et bénéficier immédiatement de nos capacités support.",
    image: "/images/icon-coin.png",
    gradient: "from-[#f59e0b]/5 to-[#f59e0b]/10"
  },
  {
    id: "operations",
    title: "Opérations Réussies",
    subtitle: "Historique de croissance",
    description: "Au moins 3 ans d'activité rentable avec une trajectoire positive et des fondamentaux solides.",
    image: "/images/icon-puzzle.png",
    gradient: "from-[#B7472A]/5 to-[#B7472A]/10"
  },
  {
    id: "team",
    title: "Équipe de Qualité",
    subtitle: "Culture d'entreprise positive",
    description: "Des équipes engagées, compétentes, que vous souhaitez voir grandir dans le groupe Tholex.",
    image: "/images/icon-smiley.png",
    gradient: "from-[#f59e0b]/5 to-[#f59e0b]/10"
  }
];

export function AcquisitionCriteriaSection() {
  return (
    <section id="criteres" className="w-full bg-[#fafafa] py-12 md:py-20 lg:py-[100px] px-5 md:px-10 lg:px-[80px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p 
            className="text-[13px] md:text-[14px] tracking-[0.15em] uppercase mb-4 md:mb-6"
            style={{ color: RUST, fontWeight: 500 }}
          >
            Nos Critères d'Acquisition
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] mb-6 max-w-[900px] mx-auto">
            Les PME que nous recherchons
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#666666] leading-[1.7] max-w-[700px] mx-auto">
            Nous rachetons des PME familiales rentables avec un fort potentiel de croissance, pour les intégrer durablement dans notre groupe.
          </p>
        </div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {criteria.map((criterion, index) => (
            <div
              key={criterion.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#e5e5e5] hover:border-[#B7472A]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#B7472A]/5"
            >
              {/* Background Gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${criterion.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Image/Icon */}
                {criterion.image ? (
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={criterion.image}
                      alt={criterion.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${RUST}15, ${RUST}08)`,
                      border: `1px solid ${RUST}30`
                    }}
                  >
                    <span 
                      className="text-[28px] md:text-[32px] font-mono"
                      style={{ color: RUST, fontWeight: 600 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                )}

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 
                    className="text-[20px] md:text-[22px] tracking-[-0.01em]"
                    style={{ fontWeight: 600 }}
                  >
                    {criterion.title}
                  </h3>
                  <p 
                    className="text-[14px] md:text-[15px] mb-3"
                    style={{ color: RUST, fontWeight: 500 }}
                  >
                    {criterion.subtitle}
                  </p>
                  <p className="text-[15px] md:text-[16px] text-[#666666] leading-[1.7]">
                    {criterion.description}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div 
                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#B7472A]/20 transition-all duration-300 pointer-events-none"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
