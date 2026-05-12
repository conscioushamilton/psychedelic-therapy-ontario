"use client";
import { useState } from "react";

const MAILCHIMP_ACTION =
  "https://gmail.us2.list-manage.com/subscribe/post?u=e4ca010608b1fadac4152556d&id=ea6aa641a6&f_id=00ca4ce0f0";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="newsletter" className="relative py-24 px-6 bg-cosmic-alt overflow-hidden">
      <div className="orb orb-teal w-80 h-80 -top-20 -right-20 opacity-10" />

      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label mb-4">Community</p>
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
          Medicine Circles &amp;{" "}
          <span className="gradient-text-gold italic">Transformative Events</span>
        </h2>
        <p className="font-body text-mist text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          Subscribe to be notified about upcoming group ceremonies, community
          integration circles, and events in the Hamilton area.
        </p>

        {submitted ? (
          <div className="glass p-8 border border-teal/20 text-teal font-body">
            Thank you — check your inbox to confirm your subscription.
          </div>
        ) : (
          <form
            action={MAILCHIMP_ACTION}
            method="post"
            target="_blank"
            onSubmit={() => setSubmitted(true)}
            className="glass p-8 border border-lavender/20 space-y-4 text-left"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="mce-FNAME" className="section-label mb-2 block">
                  First Name
                </label>
                <input
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                  className="w-full bg-white/5 border border-lavender/20 rounded-lg px-4 py-3 font-body text-sm text-star placeholder-mist/30 focus:outline-none focus:border-lavender/50"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="mce-LNAME" className="section-label mb-2 block">
                  Last Name
                </label>
                <input
                  type="text"
                  name="LNAME"
                  id="mce-LNAME"
                  className="w-full bg-white/5 border border-lavender/20 rounded-lg px-4 py-3 font-body text-sm text-star placeholder-mist/30 focus:outline-none focus:border-lavender/50"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mce-EMAIL" className="section-label mb-2 block">
                Email Address <span className="text-rose">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                className="w-full bg-white/5 border border-lavender/20 rounded-lg px-4 py-3 font-body text-sm text-star placeholder-mist/30 focus:outline-none focus:border-lavender/50"
                placeholder="your@email.com"
              />
            </div>

            {/* Mailchimp honeypot — do not remove */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input
                type="text"
                name="b_e4ca010608b1fadac4152556d_ea6aa641a6"
                tabIndex={-1}
                defaultValue=""
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 px-8 py-3 rounded-full bg-gold/10 border border-gold/40 text-gold text-sm font-medium hover:bg-gold/20 transition-all btn-glow"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
