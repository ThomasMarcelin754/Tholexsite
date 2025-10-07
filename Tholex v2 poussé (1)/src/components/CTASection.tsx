const RUST = "#B7472A";

export function CTASection() {
  return (
    <section id="contact" className="w-full bg-white py-12 md:py-20 lg:py-[100px] px-5 md:px-10 lg:px-[80px]">
      <div className="max-w-[900px] mx-auto">
        <div 
          className="rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center border"
          style={{
            background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
            borderColor: 'rgba(0, 0, 0, 0.06)'
          }}
        >
          {/* Title */}
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] mb-6 md:mb-8" style={{ fontWeight: 600 }}>
            Votre entreprise correspond ?
          </h2>

          {/* Description */}
          <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#666666] leading-[1.7] mb-8 md:mb-10 max-w-[650px] mx-auto">
            Nous serions ravis d'échanger avec vous sur votre projet de cession et sur la manière dont Tholex pourrait vous accompagner.
          </p>

          {/* CTA Button */}
          <button
            className="px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: RUST,
              color: 'white',
              fontWeight: 500,
              fontSize: '16px'
            }}
          >
            Planifier un échange confidentiel
          </button>
        </div>
      </div>
    </section>
  );
}
