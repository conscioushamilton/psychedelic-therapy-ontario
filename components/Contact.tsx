"use client";
import { useState } from "react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScTNRLd41-WKQxNCGKMkAV2irgDGhAOe019H3cx_HPES8oD2g/formResponse";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const body = new FormData();
    body.append("entry.1887107874", form.name);
    body.append("entry.1038164183", form.phone);
    body.append("entry.1687037947", form.email);
    body.append("entry.1982377298", form.message);
    try {
      await fetch(FORM_URL, { method: "POST", body, mode: "no-cors" });
    } catch {
      // no-cors always throws on redirect — submission still goes through
    }
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-cosmic overflow-hidden">
      <div className="orb orb-purple w-96 h-96 top-0 right-0 opacity-10" />
      <div className="orb orb-rose w-80 h-80 bottom-0 left-0 opacity-10" />

      <div className="max-w-5xl mx-auto">
        {/* Pricing */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">Pricing</p>
          <a
            href="https://docs.google.com/document/d/1sirZ06kymOpvV_mA3RJS80OYa9QYMySdtE-O3eCKzTA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gold/40 text-gold text-sm tracking-wide hover:bg-gold/10 btn-glow transition-all"
          >
            View Pricing Info →
          </a>
        </div>

        <div className="divider-gold mb-16" />

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Get in Touch</p>
          <h2 className="font-display text-5xl md:text-6xl font-light">
            Begin Your <span className="gradient-text-mystical italic">Conversation</span>
          </h2>
          <p className="mt-4 font-body text-mist max-w-lg mx-auto leading-relaxed">
            Reach out to schedule your free 15-minute consultation — a no-pressure
            call to explore whether we&apos;re a good fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div className="glass-gold p-6">
              <h3 className="font-display text-xl text-gold mb-3">Free 15-Minute Consult</h3>
              <p className="font-body text-mist text-sm leading-relaxed">
                A complimentary phone call to discuss your intentions, answer
                questions about the process, and see if we&apos;re a good fit.
                Completely confidential and no obligation.
              </p>
            </div>

<div className="glass p-6">
              <h3 className="font-display text-xl text-teal mb-3">Newsletter</h3>
              <p className="font-body text-mist text-sm leading-relaxed">
                Sign up to receive updates on upcoming medicine circles,
                community events, and transformative retreats.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">✦</div>
                <h3 className="font-display text-2xl text-gold glow-gold mb-2">Message Received</h3>
                <p className="font-body text-mist text-sm">
                  Thank you for reaching out. I&apos;ll be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="section-label block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full bg-white/5 border border-lavender/20 rounded-lg px-4 py-3 text-star text-sm font-body placeholder:text-mist/30 focus:outline-none focus:border-lavender/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(optional)"
                    className="w-full bg-white/5 border border-lavender/20 rounded-lg px-4 py-3 text-star text-sm font-body placeholder:text-mist/30 focus:outline-none focus:border-lavender/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-lavender/20 rounded-lg px-4 py-3 text-star text-sm font-body placeholder:text-mist/30 focus:outline-none focus:border-lavender/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me a little about yourself and what you're hoping to explore..."
                    className="w-full bg-white/5 border border-lavender/20 rounded-lg px-4 py-3 text-star text-sm font-body placeholder:text-mist/30 focus:outline-none focus:border-lavender/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-gold text-void font-medium text-sm tracking-wide btn-glow hover:bg-gold-light transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
                <p className="text-center text-mist/40 text-xs font-body">
                  All conversations are strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
