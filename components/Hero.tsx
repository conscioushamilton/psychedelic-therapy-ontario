import Stars from "./Stars";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-cosmic"
    >
      {/* Stars */}
      <Stars count={80} />

      {/* Floating orbs */}
      <div className="orb orb-purple w-96 h-96 top-10 -left-32" />
      <div className="orb orb-teal w-80 h-80 bottom-20 -right-24" />
      <div className="orb orb-rose w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.1 }} />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="section-label animate-fade-up delay-100">
          Hamilton, Ontario · Licensed Therapist
        </p>

        <h1 className="font-display text-6xl md:text-8xl font-light leading-none mt-6 mb-2 animate-fade-up delay-200">
          <span className="gradient-text-gold">Psychedelic</span>
        </h1>
        <h1 className="font-display text-5xl md:text-7xl font-light italic leading-none mb-8 animate-fade-up delay-300">
          <span className="text-star">Harm Reduction</span>
        </h1>

        <p className="font-body text-mist text-lg md:text-xl leading-relaxed max-w-xl mx-auto animate-fade-up delay-400">
          A safe, sacred space for psychedelic preparation, journeying, and
          integration — guided by one of the few certified therapists in Canada.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-500">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-gold text-void font-medium text-sm tracking-wide btn-glow hover:bg-gold-light transition-colors"
          >
            Book a Free Consultation
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full border border-lavender/40 text-lavender text-sm tracking-wide hover:bg-lavender/10 btn-teal-glow transition-all"
          >
            Explore Services
          </a>
        </div>

        <p className="mt-8 text-mist/60 text-xs tracking-widest animate-fade-up delay-700">
          PSILOCYBIN · MDMA
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-700">
        <span className="text-mist/40 text-xs tracking-widest">SCROLL</span>
        <span className="w-px h-12 bg-gradient-to-b from-lavender/40 to-transparent" />
      </div>
    </section>
  );
}
