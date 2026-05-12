const credentials = [
  "Certified Psychedelic-Assisted Therapist — Integrative Psychiatry Institute (US)",
  "150-hour curriculum with experiential training",
  "1000+ hours of harm reduction experience",
  "150+ clients supported with Psilocybin & MDMA",
  "5 years of couples therapy background",
  "First Aid & CPR / AED certified",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-nebula-section overflow-hidden">
      {/* Orb decoration */}
      <div className="orb orb-gold w-72 h-72 top-0 right-0 opacity-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="section-label mb-4">About</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
            Where <span className="gradient-text-mystical italic">Science</span>{" "}
            meets the Sacred
          </h2>
          <p className="font-body text-mist leading-relaxed mb-4">
            I am one of the few certified psychedelic-assisted therapists in Ontario —
            offering harm reduction services grounded in both clinical training and deep
            respect for the transformative potential of altered states.
          </p>
          <p className="font-body text-mist leading-relaxed mb-4">
            Based in Hamilton, I work with individuals, couples, and groups — holding
            space for journeys with psilocybin and MDMA.
          </p>
          <p className="font-body text-mist leading-relaxed">
            My approach is integrative, somatic, non-directive, and spiritually informed
            — meeting each person exactly where they are.
          </p>
          <a
            href="https://www.stonefu.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-teal text-sm hover:text-teal-light transition-colors underline underline-offset-4"
          >
            Visit my main website →
          </a>
        </div>

        {/* Credentials card */}
        <div className="glass p-8 space-y-4">
          <h3 className="font-display text-2xl font-light text-gold mb-6 glow-gold">
            Credentials & Training
          </h3>
          <ul className="space-y-3">
            {credentials.map((c, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-sm text-mist leading-relaxed">
                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-lavender" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
