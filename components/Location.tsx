const regions = [
  "Hamilton (home base)",
  "Toronto",
  "Kitchener-Waterloo",
  "Niagara Region",
  "London",
  "Burlington & Oakville",
];

export default function Location() {
  return (
    <section className="relative py-20 px-6 bg-nebula-section overflow-hidden">
      <div className="orb orb-gold w-72 h-72 bottom-0 left-1/3 opacity-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label mb-4">Location</p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-5">
            Hamilton & <span className="gradient-text-gold italic">Beyond</span>
          </h2>
          <p className="font-body text-mist leading-relaxed">
            My therapy space is based in Hamilton, Ontario. I also travel within a
            one-hour radius to meet clients in their preferred location — whether that&apos;s
            a private home, retreat space, or nature setting.
          </p>
        </div>

        <div className="glass p-8">
          <h3 className="font-display text-xl text-teal mb-5 glow-teal">Service Areas</h3>
          <div className="grid grid-cols-2 gap-3">
            {regions.map((r) => (
              <div key={r} className="flex items-center gap-2 font-body text-sm text-mist">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                {r}
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-lavender/10 font-body text-xs text-mist/50 leading-relaxed">
            Travel available within ~1 hour of Hamilton. Contact me to confirm
            availability in your area.
          </div>
        </div>
      </div>
    </section>
  );
}
