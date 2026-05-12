const modalities = [
  { name: "Somatic & Experiential", desc: "Body-centered healing that honours what lives in the nervous system.", color: "text-lavender" },
  { name: "Internal Family Systems", desc: "Compassionate work with all the parts of yourself — including those holding pain.", color: "text-rose" },
  { name: "Mindfulness & Polyvagal", desc: "Grounding practices that regulate the nervous system before and after journeys.", color: "text-teal" },
  { name: "Cognitive Behavioural", desc: "Practical tools for reframing and integrating insights into everyday life.", color: "text-gold" },
  { name: "Spiritually Integrated", desc: "Honouring the mystical dimensions of psychedelic experience without dogma.", color: "text-lavender" },
  { name: "Perinatal Trauma Work", desc: "Gently resolving early, pre-verbal layers of trauma that shape present experience.", color: "text-rose" },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-28 px-6 bg-nebula-section overflow-hidden">
      <div className="orb orb-teal w-80 h-80 top-0 right-0 opacity-10" />
      <div className="orb orb-rose w-64 h-64 bottom-0 left-0 opacity-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Therapeutic Approach</p>
          <h2 className="font-display text-5xl md:text-6xl font-light">
            An <span className="gradient-text-mystical italic">Integrative</span> Path
          </h2>
          <p className="mt-4 font-body text-mist max-w-xl mx-auto leading-relaxed">
            My practice weaves together evidence-based modalities with a deep
            respect for the whole person — physical, psychological, relational, and spiritual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {modalities.map((m) => (
            <div key={m.name} className="glass p-6 hover:scale-[1.02] transition-transform">
              <h3 className={`font-display text-xl font-medium mb-2 ${m.color}`}>
                {m.name}
              </h3>
              <p className="font-body text-mist text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-gold p-8 text-center max-w-3xl mx-auto">
          <p className="font-display text-2xl italic text-gold glow-gold leading-relaxed">
            &ldquo;Client-centered, non-directive, and grounded in the belief that each person
            holds their own inner healer.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
