"use client";
import { useState, useRef } from "react";

const MC_BASE =
  "https://gmail.us2.list-manage.com/subscribe/post-json?u=e4ca010608b1fadac4152556d&id=ea6aa641a6&f_id=00ca4ce0f0";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    data.forEach((val, key) => params.append(key, val as string));

    const callbackName = `mc_cb_${Date.now()}`;
    const url = `${MC_BASE}&${params.toString()}&c=${callbackName}`;

    (window as Record<string, unknown>)[callbackName] = (res: { result: string; msg: string }) => {
      delete (window as Record<string, unknown>)[callbackName];
      if (res.result === "success") {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setErrorMsg(res.msg.replace(/^\d+ - /, ""));
      }
    };

    const script = document.createElement("script");
    script.src = url;
    script.onerror = () => {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    };
    document.head.appendChild(script);
  };

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

        {status === "success" ? (
          <div className="glass p-8 border border-teal/20 font-body text-teal">
            You&apos;re subscribed! We&apos;ll be in touch when events are announced.
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
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

            {status === "error" && (
              <p className="font-body text-sm text-rose" dangerouslySetInnerHTML={{ __html: errorMsg }} />
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full mt-2 px-8 py-3 rounded-full bg-gold/10 border border-gold/40 text-gold text-sm font-medium hover:bg-gold/20 transition-all btn-glow disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
