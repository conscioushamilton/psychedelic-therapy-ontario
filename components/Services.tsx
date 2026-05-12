const services = [
  {
    icon: "✦",
    color: "text-lavender",
    border: "border-lavender/20",
    title: "Individual Harm Reduction",
    substances: "",
    description:
      "A complete 11-hour support package tailored to your intention. Whether exploring healing, growth, or spiritual deepening — you will not be alone.",
    details: [
      "1 hr screening & intake",
      "2 hr preparation session",
      "6 hr medicine journey (2 hr for 5-MeO-DMT)",
      "2 hr integration session",
    ],
  },
  {
    icon: "◈",
    color: "text-rose",
    border: "border-rose/20",
    title: "Couples Therapy",
    substances: "MDMA",
    description:
      "Drawing on 5 years of couples therapy experience, I support partners in shared journeys that open new depths of connection, communication, and healing.",
    details: [
      "Individual journeys completed first",
      "Joint preparation sessions",
      "Supported shared medicine experience",
      "Couples integration work",
    ],
  },
  {
    icon: "⊹",
    color: "text-teal",
    border: "border-teal/20",
    title: "Group & Community Circles",
    substances: "Community Integration",
    description:
      "Medicine circles and community integration events bringing together those on the path of psychedelic healing. Sign up for the newsletter to be notified.",
    details: [
      "Community integration circles",
      "Group ceremony support",
      "Peer connection & sharing",
      "Newsletter for upcoming events",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 bg-cosmic-alt overflow-hidden">
      <div className="orb orb-purple w-96 h-96 -bottom-20 -left-20 opacity-15" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Services</p>
          <h2 className="font-display text-5xl md:text-6xl font-light">
            Your <span className="gradient-text-gold italic">Journey</span> Begins Here
          </h2>
          <p className="mt-4 font-body text-mist max-w-xl mx-auto leading-relaxed">
            Clients bring their own substances; I provide the professional container,
            preparation, and integration support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className={`glass p-8 border ${s.border} hover:scale-[1.01] transition-transform`}>
              <div className={`text-3xl mb-4 ${s.color}`}>{s.icon}</div>
              <h3 className={`font-display text-2xl font-medium mb-1 ${s.color}`}>
                {s.title}
              </h3>
              <p className="section-label mb-4">{s.substances}</p>
              <p className="font-body text-mist text-sm leading-relaxed mb-5">
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-star/70 font-body">
                    <span className={`w-1 h-1 rounded-full ${s.color} bg-current`} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
