import { Building2, Users, TrendingUp, Shield } from 'lucide-react';

const RUST = "#B7472A";

export function DifferenceSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-[100px] px-5 md:px-10 lg:px-[80px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Vision Content */}
          <div className="space-y-8 md:space-y-10">
            {/* Header */}
            <div>
              <p 
                className="text-[13px] md:text-[14px] tracking-[0.15em] uppercase mb-4"
                style={{ color: RUST, fontWeight: 500 }}
              >
                Notre Vision
              </p>
              <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] mb-6">
                Tholex, votre hub central de croissance
              </h2>
              <p className="text-[17px] md:text-[19px] text-[#666666] leading-[1.7]">
                Nous centralisons toutes les fonctions support pour que vous puissiez vous concentrer sur ce que vous faites de mieux : développer votre cœur de métier.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="flex gap-5">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${RUST}15, ${RUST}08)`,
                    border: `1px solid ${RUST}30`
                  }}
                >
                  <Building2 className="w-6 h-6" style={{ color: RUST, strokeWidth: 1.5 }} />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] mb-2" style={{ fontWeight: 600 }}>
                    Hub Central
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-[#666666] leading-[1.7]">
                    Finance, juridique, RH, IT, achats, marketing : toutes vos fonctions support centralisées et professionnalisées.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${RUST}15, ${RUST}08)`,
                    border: `1px solid ${RUST}30`
                  }}
                >
                  <Users className="w-6 h-6" style={{ color: RUST, strokeWidth: 1.5 }} />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] mb-2" style={{ fontWeight: 600 }}>
                    Focus Opérationnel
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-[#666666] leading-[1.7]">
                    Vous gardez 100% de votre autonomie opérationnelle. Concentrez-vous sur vos clients et votre production.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${RUST}15, ${RUST}08)`,
                    border: `1px solid ${RUST}30`
                  }}
                >
                  <TrendingUp className="w-6 h-6" style={{ color: RUST, strokeWidth: 1.5 }} />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] mb-2" style={{ fontWeight: 600 }}>
                    Croissance Accélérée
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-[#666666] leading-[1.7]">
                    Outils digitaux, automatisation, synergies groupe : tout pour libérer votre potentiel de croissance.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${RUST}15, ${RUST}08)`,
                    border: `1px solid ${RUST}30`
                  }}
                >
                  <Shield className="w-6 h-6" style={{ color: RUST, strokeWidth: 1.5 }} />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] mb-2" style={{ fontWeight: 600 }}>
                    Partenaire Long Terme
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-[#666666] leading-[1.7]">
                    Nous construisons un groupe industriel pérenne. Pas de revente rapide, mais un projet commun sur la durée.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Highlight */}
            <div 
              className="rounded-xl p-6 md:p-8 border-2"
              style={{
                background: `linear-gradient(135deg, ${RUST}05, ${RUST}02)`,
                borderColor: `${RUST}30`
              }}
            >
              <p className="text-[15px] md:text-[17px] leading-[1.7]" style={{ color: RUST, fontWeight: 500 }}>
                &ldquo;Nous ne sommes pas un fonds d&apos;investissement classique. Nous sommes des opérationnels qui rachètent, opèrent et font grandir des PME familiales.&rdquo;
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Visual Diagram */}
          <div className="relative">
            {/* Hub Diagram */}
            <div className="relative aspect-square max-w-[600px] mx-auto">
              {/* Central Hub */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-2xl flex flex-col items-center justify-center z-10 shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${RUST}, ${RUST}dd)`,
                }}
              >
                <Building2 className="w-12 h-12 md:w-16 md:h-16 text-white mb-2" strokeWidth={1.5} />
                <p className="text-white text-[14px] md:text-[16px]" style={{ fontWeight: 600 }}>THOLEX</p>
                <p className="text-white/80 text-[11px] md:text-[12px]">Hub Central</p>
              </div>

              {/* Orbiting PMEs */}
              {[
                { angle: 0, label: "PME 1", industry: "Industrie" },
                { angle: 72, label: "PME 2", industry: "Services" },
                { angle: 144, label: "PME 3", industry: "Tech" },
                { angle: 216, label: "PME 4", industry: "Distribution" },
                { angle: 288, label: "PME 5", industry: "Conseil" }
              ].map((pme, idx) => {
                const radius = 180; // Adjust radius
                const x = Math.cos((pme.angle * Math.PI) / 180) * radius;
                const y = Math.sin((pme.angle * Math.PI) / 180) * radius;
                
                return (
                  <div key={idx}>
                    {/* Connection Line */}
                    <svg 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
                      style={{ zIndex: 1 }}
                    >
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke={RUST}
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        opacity="0.3"
                      />
                    </svg>

                    {/* PME Node */}
                    <div
                      className="absolute top-1/2 left-1/2 w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-xl bg-white border-2 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        borderColor: `${RUST}40`,
                        zIndex: 5
                      }}
                    >
                      <Users className="w-7 h-7 md:w-8 md:h-8 mb-2" style={{ color: RUST }} strokeWidth={1.5} />
                      <p className="text-[12px] md:text-[13px]" style={{ fontWeight: 600 }}>{pme.label}</p>
                      <p className="text-[10px] md:text-[11px] text-[#999999]">{pme.industry}</p>
                    </div>
                  </div>
                );
              })}

              {/* Support Functions Labels */}
              <div className="absolute -bottom-8 left-0 right-0 flex flex-wrap justify-center gap-2 md:gap-3">
                {["Finance", "Juridique", "RH", "IT", "Achats", "Marketing"].map((func, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] md:text-[12px] px-3 py-1.5 rounded-full border"
                    style={{
                      background: `${RUST}08`,
                      borderColor: `${RUST}30`,
                      color: RUST,
                      fontWeight: 500
                    }}
                  >
                    {func}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
