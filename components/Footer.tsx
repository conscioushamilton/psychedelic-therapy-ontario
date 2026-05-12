export default function Footer() {
  return (
    <>
    <footer className="relative bg-void border-t border-lavender/10 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="divider-gold mb-10" />

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl text-star mb-3">
              Psychedelic Therapy <span className="text-gold">Ontario</span>
            </h3>
            <p className="font-body text-xs text-mist/50 leading-relaxed">
              Certified psychedelic-assisted harm reduction services in Hamilton,
              Ontario.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="section-label mb-4">Navigation</h4>
            <ul className="space-y-2 font-body text-sm text-mist/60">
              {["#about", "#services", "#approach", "#journey", "#contact"].map((href) => (
                <li key={href}>
                  <a href={href} className="hover:text-star transition-colors capitalize">
                    {href.replace("#", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="section-label mb-4">Legal Notice</h4>
            <p className="font-body text-xs text-mist/50 leading-relaxed">
              Clients supply their own substances. This is not medical advice.
            </p>
          </div>
        </div>

        <div className="divider-gold mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 font-body text-xs text-mist/30">
          <span>© {new Date().getFullYear()} Psychedelic Therapy Ontario. All rights reserved.</span>
          <a
            href="https://www.stonefu.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mist/60 transition-colors"
          >
            stonefu.ca
          </a>
        </div>
      </div>
    </footer>

    {/* Pride & Trans flag stripes */}
    <div className="w-full">
      {/* Rainbow pride */}
      <div className="flex w-full" style={{ height: "6px" }}>
        <div className="flex-1" style={{ background: "#E40303" }} />
        <div className="flex-1" style={{ background: "#FF8C00" }} />
        <div className="flex-1" style={{ background: "#FFED00" }} />
        <div className="flex-1" style={{ background: "#008026" }} />
        <div className="flex-1" style={{ background: "#004DFF" }} />
        <div className="flex-1" style={{ background: "#750787" }} />
      </div>
      {/* Trans pride */}
      <div className="flex w-full" style={{ height: "6px" }}>
        <div className="flex-1" style={{ background: "#55CDFC" }} />
        <div className="flex-1" style={{ background: "#F7A8B8" }} />
        <div className="flex-1" style={{ background: "#FFFFFF" }} />
        <div className="flex-1" style={{ background: "#F7A8B8" }} />
        <div className="flex-1" style={{ background: "#55CDFC" }} />
      </div>
    </div>
  </>
  );
}
