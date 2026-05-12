import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const books = {
  general: [
    { title: "How to Change Your Mind", author: "Michael Pollan" },
    { title: "Consciousness Medicine", author: "Françoise Bourzat" },
    { title: "The Psychedelic Explorer's Guide", author: "James Fadiman" },
    { title: "The Microdosing Guidebook", author: "Zach Walsh & Maja Kohek" },
    { title: "A Really Good Day", author: "Ayelet Waldman" },
    { title: "Swimming in the Sacred", author: "Rachel Harris" },
    { title: "LSD and the Mind of the Universe", author: "Christopher M. Bache" },
    { title: "Ecstasy: The Complete Guide", author: "Julie Holland (Ed.)" },
    { title: "Ketamine: Dreams and Realities", author: "Karl Jansen" },
    { title: "The Ketamine Breakthrough", author: "Mike Dow & Raquel Bennett" },
  ],
  practitioners: [
    { title: "Manual for Psychedelic Guides", author: "Françoise Bourzat" },
    { title: "Therapy with Substance", author: "Torsten Passie" },
    { title: "LSD Psychotherapy", author: "Stanislav Grof" },
    { title: "The Psychedelic Experience", author: "Leary, Metzner & Alpert" },
    { title: "Secret Chief Revealed", author: "Myron Stolaroff" },
    { title: "The Stormy Search for the Self", author: "Stanislav & Christina Grof" },
    { title: "The Way of the Psychonaut", author: "Stanislav Grof" },
    { title: "Psychedelic Integration", author: "Marc Aixalà" },
  ],
};

const videos = [
  { label: "Psychedelic Somatic Therapy Resources", url: "https://www.psychedelicsomatic.org/resources" },
  { label: "MAPS YouTube Channel", url: "https://www.youtube.com/@mapsmdma/videos" },
  { label: "Horizons Conference Workshops", url: "https://www.youtube.com/watch?v=rmXrUvpxTpA&list=PLMWEqN5FNf4g6CcFKkXfwKSbHRgwlqO67&index=2" },
  { label: "Psilocybin Research Summary", url: "https://www.youtube.com/watch?v=eIxVfln02Ss" },
  { label: "Hamilton's Pharmacopeia (Playlist)", url: "https://www.youtube.com/playlist?list=PL3vbvS1lJmurOnNe9jsEv18t3ResrCrso" },
];

const documentaries = [
  "Hamilton's Pharmacopeia",
  "How to Change Your Mind",
  "Journeys to the Edge of Consciousness",
  "Fantastic Fungi",
  "Neurons to Nirvana",
  "The Way of the Psychonaut",
  "Dosed",
  "Dosed 2",
  "Trip of Compassion",
];

const couples = [
  { label: "MDMA for Couples Therapy — Time Magazine", url: "https://time.com/6262291/psychedelics-mdma-couples-therapy/" },
  { label: "MDMA-Assisted Couples Therapy — NIH / PMC", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8273271/" },
  { label: "Ketamine for Couples Therapy — AK Journals", url: "https://akjournals.com/view/journals/2054/8/2/article-p233.xml" },
];

const parenting = [
  { label: "Mothers of the Mushroom — Safety Research", url: "https://mothersofthemushroom.com/research/" },
  { label: "Moms on Mushrooms — Community Platform", url: "https://www.momsonmushrooms.com/" },
];

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-cosmos pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-4">Library</p>
            <h1 className="font-display text-6xl md:text-7xl font-light">
              <span className="gradient-text-gold">Resources</span>
            </h1>
            <p className="mt-5 font-body text-mist max-w-xl mx-auto leading-relaxed">
              A curated collection of books, videos, research, and communities
              to support your psychedelic journey.
            </p>
          </div>

          <div className="space-y-12">

            {/* Harm Reduction */}
            <div className="glass p-8">
              <h2 className="font-display text-3xl text-lavender mb-2">Community</h2>
              <p className="font-body text-mist/60 text-sm mb-5">Local and community harm reduction resources.</p>
              <a
                href="https://linktr.ee/conscious.hamilton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal text-sm hover:text-teal-light transition-colors underline underline-offset-4"
              >
                Conscious Hamilton — Linktree →
              </a>
            </div>

            {/* Books — General */}
            <div className="glass p-8">
              <h2 className="font-display text-3xl text-lavender mb-1">Books</h2>
              <p className="section-label mb-6 text-mist/50">General Audience</p>
              <ul className="space-y-3">
                {books.general.map((b) => (
                  <li key={b.title} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lavender shrink-0" />
                    <div>
                      <span className="font-body text-sm text-star">{b.title}</span>
                      <span className="font-body text-xs text-mist/50 ml-2">— {b.author}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-lavender/10">
                <a
                  href="https://patternproject.substack.com/p/low-dose-safety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal text-sm hover:text-teal-light transition-colors underline underline-offset-4"
                >
                  Harm Reduction Guide for Low-Dose 5-MeO-DMT Pens →
                </a>
              </div>
            </div>

            {/* Books — Practitioners */}
            <div className="glass p-8">
              <h2 className="font-display text-3xl text-lavender mb-1">Books</h2>
              <p className="section-label mb-6 text-mist/50">For Practitioners</p>
              <ul className="space-y-3">
                {books.practitioners.map((b) => (
                  <li key={b.title} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose shrink-0" />
                    <div>
                      <span className="font-body text-sm text-star">{b.title}</span>
                      <span className="font-body text-xs text-mist/50 ml-2">— {b.author}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-lavender/10 space-y-2">
                <a
                  href="https://www.reddit.com/r/libgen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-mist/50 text-xs hover:text-mist transition-colors"
                >
                  Free e-books available via r/libgen — please support authors if you can.
                </a>
                <a
                  href="https://www.stonefu.ca/resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-teal text-sm hover:text-teal-light transition-colors underline underline-offset-4"
                >
                  More self-development resources at stonefu.ca →
                </a>
              </div>
            </div>

            {/* Couples Therapy */}
            <div className="glass p-8">
              <h2 className="font-display text-3xl text-gold mb-5">Couples Therapy Research</h2>
              <ul className="space-y-3">
                {couples.map((c) => (
                  <li key={c.url} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-teal hover:text-teal-light transition-colors underline underline-offset-4"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Videos */}
            <div className="glass p-8">
              <h2 className="font-display text-3xl text-teal mb-5">Educational Videos</h2>
              <ul className="space-y-3">
                {videos.map((v) => (
                  <li key={v.url} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-teal hover:text-teal-light transition-colors underline underline-offset-4"
                    >
                      {v.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parenting */}
            <div className="glass p-8">
              <h2 className="font-display text-3xl text-rose mb-5">Psychedelics & Parenting</h2>
              <ul className="space-y-3">
                {parenting.map((p) => (
                  <li key={p.url} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose shrink-0" />
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-teal hover:text-teal-light transition-colors underline underline-offset-4"
                    >
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documentaries */}
            <div className="glass p-8">
              <h2 className="font-display text-3xl text-lavender mb-5">Documentaries & Films</h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {documentaries.map((d) => (
                  <div key={d} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-lavender shrink-0" />
                    <span className="font-body text-sm text-mist">{d}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-lavender/10 space-y-2">
                <a
                  href="https://www.imdb.com/list/ls068077110/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-teal text-sm hover:text-teal-light transition-colors underline underline-offset-4"
                >
                  IMDB List — Consciousness & Spirituality Films →
                </a>
                <a
                  href="https://www.imdb.com/list/ls021581861/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-teal text-sm hover:text-teal-light transition-colors underline underline-offset-4"
                >
                  IMDB List — Psychedelics & Mind Films →
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
