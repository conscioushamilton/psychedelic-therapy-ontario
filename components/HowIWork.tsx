const substances = [
  "Psilocybin / 4-AcO-DMT",
  "MDMA",
  "5-MeO-DMT (vape pen only)",
  "Ketamine",
];

const sessionSteps = [
  { label: "Screening", duration: "1 hr" },
  { label: "Preparation", duration: "2 hr" },
  { label: "Tripsitting", duration: "6 hr*" },
  { label: "Integration", duration: "2 hr" },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="relative py-28 px-6 bg-cosmic overflow-hidden">
      <div className="orb orb-teal w-80 h-80 top-10 -right-20 opacity-10" />
      <div className="orb orb-rose w-64 h-64 bottom-10 -left-16 opacity-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-4">How I Work</p>
          <h2 className="font-display text-5xl md:text-6xl font-light">
            How I Work <span className="gradient-text-gold italic">with Clients</span>
          </h2>
        </div>

        <div className="space-y-6">
          {/* Legal context */}
          <div className="glass p-8">
            <h3 className="font-display text-2xl text-lavender mb-4">The Legal Landscape</h3>
            <p className="font-body text-mist leading-relaxed mb-4">
              The only legal pathway to &ldquo;psychedelic-assisted therapy&rdquo; in Canada is through
              Section 56 exemption and clinical trials. The process can be cumbersome and costly —
              a legal dose of MDMA, for example, can run a couple thousand dollars. If you are only
              interested in the legal path, please take a look at the amazing work{" "}
              <a
                href="https://therapsil.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-light underline underline-offset-4 transition-colors"
              >
                TheraPsil
              </a>{" "}
              has been doing.
            </p>
            <p className="font-body text-mist leading-relaxed">
              At my clinic, I only provide psychedelic harm reduction — a framework where clients
              bring in the substances they plan to use, and I can legally be present to ensure
              safety and provide professional support.
            </p>
          </div>

          {/* Unique position */}
          <div className="glass-gold p-8">
            <h3 className="font-display text-2xl text-gold mb-4">A Rare Service in Ontario</h3>
            <p className="font-body text-mist leading-relaxed mb-4">
              I&apos;m one of the few places in Ontario — or even Canada — where you can receive
              psychedelic harm reduction (trip sitting) from a licensed therapist. Being among
              the earliest therapists in Ontario to practice this above ground, I had the privilege
              of being invited to CRPO&apos;s psychedelic-assisted therapy working group in 2023–2024.
            </p>
            <p className="font-body text-mist leading-relaxed">
              That said, I deeply acknowledge the many experienced practitioners and pioneers in
              the underground world, and I am profoundly grateful for their work.
            </p>
          </div>

          {/* Substances & session */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-8">
              <h3 className="font-display text-2xl text-rose mb-5">Medicines I Support</h3>
              <ul className="space-y-3">
                {substances.map((s) => (
                  <li key={s} className="flex items-center gap-3 font-body text-sm text-mist">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-body text-xs text-mist/50 leading-relaxed">
                For interest in other medicines, I can refer you to other practitioners.
              </p>
            </div>

            <div className="glass p-8">
              <h3 className="font-display text-2xl text-teal mb-5">Session Structure</h3>
              <div className="space-y-3">
                {sessionSteps.map((s, i) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg text-teal/40">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-body text-sm text-mist">{s.label}</span>
                    </div>
                    <span className="section-label text-mist/50">{s.duration}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-lavender/10 font-body text-xs text-mist/50 leading-relaxed space-y-1">
                <p>* 5-MeO-DMT sessions are 2 hr only.</p>
                <p>I do not provide or sell substances. All clients bring their own lab-tested medicine.</p>
              </div>
            </div>
          </div>

          {/* Associates note */}
          <div className="glass p-6 text-center">
            <p className="font-body text-sm text-mist leading-relaxed">
              If you wish to work with a male-female dyad or a female practitioner,
              please visit the{" "}
              <span className="text-lavender font-medium">Associates</span> section for referrals to my colleagues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
