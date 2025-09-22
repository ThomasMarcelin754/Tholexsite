import Image from 'next/image';
import type { CSSProperties } from 'react';

type Founder = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  imageScale?: number;
  imageTransformOrigin?: string;
};

const founders: Founder[] = [
  {
    name: 'Thomas Marcelin',
    role: 'Co-fondateur',
    imageSrc: '/images/Thomas Marcelin.jpeg',
    imageAlt: 'Portrait de Thomas Marcelin',
    imagePosition: '50% 5%',
    imageScale: 0.84,
    imageTransformOrigin: 'top center',
  },
  {
    name: 'Alexy Bouvet',
    role: 'Co-fondateur',
    imageSrc: '/images/Alexy Bouvet.jpeg',
    imageAlt: 'Portrait d\'Alexy Bouvet',
    imageScale: 0.92,
  },
];

export function FoundersSection() {
  return (
    <section id="founders" className="scroll-mt-24 bg-white py-20 sm:py-24">

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        {/* Header avec fond contrasté */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full border border-primary/20 mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Équipe fondatrice</p>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
            Rencontrez l&apos;équipe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Les fondateurs de Tholex qui accompagnent les dirigeants dans leur transmission ou leur croissance.
          </p>

          {/* Lien vers l'histoire entrepreneuriale */}
          <div className="inline-flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-3">
              Découvrez le parcours unique qui nous a menés à créer ce rollup innovant
            </p>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold rounded-full border border-primary/20 hover:from-primary/20 hover:to-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Découvrez notre aventure entrepreneuriale
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Cards avec contraste élevé */}
        <div className="grid gap-8 sm:grid-cols-2">
          {founders.map((founder, index) => {
            const imageStyle: CSSProperties = {
              objectPosition: founder.imagePosition ?? '50% 50%',
            };

            if (founder.imageScale) {
              imageStyle.transform = `scale(${founder.imageScale})`;
            }

            if (founder.imageTransformOrigin) {
              imageStyle.transformOrigin = founder.imageTransformOrigin;
            }

            return (
              <article
                key={founder.name}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

              {/* Photo avec arrière-plan noir contrasté */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-900 border-4 border-gray-300 group-hover:border-primary/50 transition-colors duration-300">
                <div className="absolute inset-0">
                  <Image
                    src={founder.imageSrc}
                    alt={founder.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                    style={imageStyle}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>

                <div className="absolute inset-2 pointer-events-none border-2 border-gray-700/80 rounded-xl" />
              </div>

              {/* Contenu avec contraste élevé */}
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {founder.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {founder.role}
                  </p>
                </div>

                {/* Badge décoratif */}
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                  Co-fondateur Tholex
                </div>
              </div>

              {/* Effet de hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </article>
            );
          })}
        </div>

        {/* Call-to-action section */}
        <div className="mt-12 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-6 text-center sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Vous souhaitez échanger avec l&apos;équipe ?
          </h3>
          <p className="text-gray-600 mb-6">
            Découvrez comment Tholex peut accompagner votre projet de transmission ou de croissance.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors duration-300 shadow-lg hover:shadow-xl">
            Prendre rendez-vous
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
