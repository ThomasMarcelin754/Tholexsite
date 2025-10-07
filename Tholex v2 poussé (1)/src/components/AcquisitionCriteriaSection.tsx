import { ImageWithFallback } from "./figma/ImageWithFallback";

const RUST = "#B7472A";

const criteria = [
  {
    id: "margins",
    title: "Marges Solides",
    subtitle: "Rentabilité et résilience",
    description: "Entreprises avec des marges saines (EBITDA >15%) démontrant un modèle économique robuste et pérenne.",
    image: "https://images.unsplash.com/photo-1711898387312-a96ef47b9484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJjZW50JTIwc3ltYm9sJTIwaWNvbnxlbnwxfHx8fDE3NTk2OTYxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#B7472A]/5 to-[#B7472A]/10"
  },
  {
    id: "advantage",
    title: "Avantage Concurrentiel",
    subtitle: "Position forte sur votre marché",
    description: "Une niche, un savoir-faire unique, une marque reconnue ou des barrières à l'entrée naturelles.",
    image: "https://images.unsplash.com/photo-1638206337203-df1b1160b34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGZsYWclMjBzdWNjZXNzfGVufDF8fHx8MTc1OTY5NjEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#f59e0b]/5 to-[#f59e0b]/10"
  },
  {
    id: "model",
    title: "Modèle Simple",
    subtitle: "Compréhensible et duplicable",
    description: "Business model clair, pas de complexité excessive. Nous privilégions la clarté à la sophistication.",
    image: "https://images.unsplash.com/photo-1542666371-924aa4bb029c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwZ3Jvd3RoJTIwbmF0dXJlfGVufDF8fHx8MTc1OTY5NjEzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#B7472A]/5 to-[#B7472A]/10"
  },
  {
    id: "profit",
    title: "Chiffre d'Affaires Attractif",
    subtitle: "Entre 2M€ et 20M€",
    description: "Taille idéale pour rejoindre notre groupe et bénéficier immédiatement de nos capacités support.",
    image: "https://images.unsplash.com/photo-1620202304821-1f4f58199274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xsYXIlMjBtb25leSUyMGZpbmFuY2V8ZW58MXx8fHwxNzU5Njk2MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#f59e0b]/5 to-[#f59e0b]/10"
  },
  {
    id: "operations",
    title: "Opérations Réussies",
    subtitle: "Historique de croissance",
    description: "Au moins 3 ans d'activité rentable avec une trajectoire positive et des fondamentaux solides.",
    image: "https://images.unsplash.com/photo-1684773585761-fde68b4ece42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXp6bGUlMjBwaWVjZXMlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NTk2OTYxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#B7472A]/5 to-[#B7472A]/10"
  },
  {
    id: "team",
    title: "Équipe de Qualité",
    subtitle: "Culture d'entreprise positive",
    description: "Des équipes engagées, compétentes, que vous souhaitez voir grandir dans le groupe Tholex.",
    image: "https://images.unsplash.com/photo-1706693134355-fd87932d4e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNtaWxleSUyMGZhY2V8ZW58MXx8fHwxNzU5Njk2MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-6 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                    <ImageWithFallback 
                      src={criterion.image} 
                      alt={criterion.title}
                      className="w-full h-full object-cover"
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

        {/* Bottom CTA */}
        <div 
          className="mt-12 md:mt-16 lg:mt-20 rounded-2xl p-8 md:p-12 text-center border-2"
          style={{
            background: `linear-gradient(135deg, ${RUST}08, ${RUST}03)`,
            borderColor: `${RUST}30`
          }}
        >
          <h3 className="text-[22px] md:text-[26px] lg:text-[30px] mb-4" style={{ fontWeight: 600 }}>
            Votre entreprise correspond ?
          </h3>
          <p className="text-[16px] md:text-[18px] text-[#666666] leading-[1.7] max-w-[600px] mx-auto mb-8">
            Nous serions ravis d'échanger avec vous sur votre projet de cession et sur la manière dont Tholex pourrait vous accompagner.
          </p>
          <button
            className="px-8 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            style={{
              background: RUST,
              color: 'white',
              fontWeight: 500
            }}
          >
            Planifier un échange confidentiel
          </button>
        </div>
      </div>
    </section>
  );
}
