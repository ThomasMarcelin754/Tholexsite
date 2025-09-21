import Link from 'next/link';

import { Nav } from './Nav';

const HERO_VIDEO_SRC = '/videos/french_riviera_sunrise_video.mp4';
const HERO_POSTER_SRC = '/images/hero-poster.png';

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER_SRC}
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" aria-hidden />

      <Nav className="absolute top-6 left-1/2 w-full -translate-x-1/2 px-4 sm:top-10 sm:w-[min(92%,960px)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 pb-20 pt-40 text-center sm:px-6 sm:pb-24 sm:pt-48">
        <h1 className="text-pretty text-3xl font-semibold drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl">
          On rachète des entreprises vieillissantes et on les développe.
        </h1>
        <h2 className="text-pretty text-base text-white/85 drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] sm:text-xl md:text-2xl">
          On optimise, développe et pérennise votre entreprise.
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-hover">
            Get in touch
          </button>
          <Link
            href="#vision"
            className="rounded-full border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
          >
            Découvrir notre vision
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
