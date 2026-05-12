const steps = [
  {
    num: "01",
    title: "Screening",
    duration: "1 hour",
    color: "border-lavender text-lavender",
    dot: "bg-lavender",
    desc: "We meet to assess fit, discuss your history, intentions, and any contraindications. This is a safe, confidential conversation with no pressure.",
  },
  {
    num: "02",
    title: "Preparation",
    duration: "2 hours",
    color: "border-teal text-teal",
    dot: "bg-teal",
    desc: "Deep preparatory work — setting intentions, learning practices to support your journey, and building the therapeutic relationship.",
  },
  {
    num: "03",
    title: "The Medicine Session",
    duration: "6 hours",
    color: "border-gold text-gold",
    dot: "bg-gold",
    desc: "You bring your substance; I provide the professional container. Music, comfort, and my full presence guide you through the experience.",
  },
  {
    num: "04",
    title: "Integration",
    duration: "2 hours",
    color: "border-rose text-rose",
    dot: "bg-rose",
    desc: "Making meaning of what arose. Translating the experience into lasting change through ongoing therapeutic support and embodied practice.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 px-6 bg-cosmic overflow-hidden">
      <div className="orb orb-purple w-64 h-64 top-10 right-10 opacity-15" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">The Process</p>
          <h2 className="font-display text-5xl md:text-6xl font-light">
            The <span className="gradient-text-gold italic">11-Hour</span> Journey
          </h2>
          <p className="mt-4 font-body text-mist max-w-xl mx-auto leading-relaxed">
            Every individual session follows a complete arc — from first contact
            to embodied integration. Nothing is rushed.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-lavender/40 via-gold/40 to-rose/30 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className={`glass border ${s.color.split(" ")[0]} p-7 md:w-5/12`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`font-display text-4xl font-light ${s.color.split(" ")[1]} opacity-40`}>
                      {s.num}
                    </span>
                    <div>
                      <h3 className={`font-display text-xl font-medium ${s.color.split(" ")[1]}`}>
                        {s.title}
                      </h3>
                      <span className="section-label text-mist/60">{s.duration}</span>
                    </div>
                  </div>
                  <p className="font-body text-mist text-sm leading-relaxed">{s.desc}</p>
                </div>

                {/* Center dot */}
                <div className={`hidden md:flex w-2/12 justify-center`}>
                  <div className={`w-4 h-4 rounded-full ${s.dot} ring-4 ring-void shadow-lg`} style={{ boxShadow: `0 0 16px currentColor` }} />
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
