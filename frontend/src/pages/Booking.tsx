import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

/* ---------- Design Tokens ---------- */
const inputBase =
  "mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-ink/40 transition focus:border-brand";
const labelBase = "block text-sm font-medium text-ink";

/* ---------- Data ---------- */
const SERVICES = [
  {
    id: "coaching",
    title: "Coaching & Programs",
    body: "Body transformation, trainer crash course, or performance training.",
    accent: "bg-brand/10 text-brand",
    borderActive: "border-brand ring-2 ring-brand/20",
    icon: "dumbbell",
  },
  {
    id: "speaking",
    title: "Speaking & Workshops",
    body: "Conferences, webinars, workshops, and guest appearances.",
    accent: "bg-gold/15 text-gold",
    borderActive: "border-gold ring-2 ring-gold/20",
    icon: "mic",
  },
  {
    id: "strategy",
    title: "Strategy Session",
    body: "A one-on-one chat to map out your goals and the best next step.",
    accent: "bg-danger/10 text-danger",
    borderActive: "border-danger ring-2 ring-danger/20",
    icon: "target",
  },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

const NEXT_STEPS = [
  {
    title: "Send your request",
    desc: "Tell me what you need and your preferred date.",
  },
  {
    title: "Quick call or chat",
    desc: "We'll talk through your goals and the best fit.",
  },
  {
    title: "Confirm and start",
    desc: "We finalize the schedule and details together.",
  },
];

const FAQ = [
  {
    q: "How soon will I hear back?",
    a: "[Add typical reply time, e.g. within 1 to 2 business days.]",
  },
  {
    q: "Do you take online clients?",
    a: "Yes for coaching and webinars. For workshops, I prefer onsite so sessions stay interactive.",
  },
  {
    q: "Can I reschedule?",
    a: "[Add reschedule / cancellation policy.]",
  },
  {
    q: "How do I pay?",
    a: "[Add payment methods and when payment is due.]",
  },
];

/* ---------- Icons ---------- */
const iconProps = {
  className: "h-6 w-6",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function ServiceIcon({ name }: { name: "dumbbell" | "mic" | "target" }) {
  if (name === "dumbbell")
    return (
      <svg {...iconProps}>
        <path d="M6 7v10M3 9.5v5M18 7v10M21 9.5v5M6 12h12" />
      </svg>
    );
  if (name === "mic")
    return (
      <svg {...iconProps}>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
      </svg>
    );
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ---------- Page ---------- */
export default function Book() {
  const [service, setService] = useState<ServiceId>("coaching");
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to your email service / backend here.
    setSent(true);
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header active="Book a Session" />

      <main className="flex-1">
        {/* Hero */}
        <section className="site-wrap pb-8 pt-14 md:pt-20">
          <div className="max-w-xl">
            <h1 className="mb-4 text-[clamp(2.25rem,5.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight">
              Book a Session
            </h1>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Pick what you need, tell me a little about yourself, and I&apos;ll
              get back to you to set things up.
            </p>
          </div>
        </section>

        {/* Step 1: Choose a service */}
        <section
          aria-labelledby="step-1-heading"
          className="site-wrap mt-6"
        >
          <div className="mb-5 flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
              1
            </span>
            <h2 id="step-1-heading" className="text-xl font-semibold">
              What are you looking for?
            </h2>
          </div>

          <div
            role="radiogroup"
            aria-labelledby="step-1-heading"
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {SERVICES.map((s) => {
              const active = service === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setService(s.id)}
                  className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-6 text-left transition-all ${
                    active
                      ? `${s.borderActive} shadow-sm`
                      : "border-ink/15 hover:border-ink/30"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.accent}`}
                      >
                        <ServiceIcon name={s.icon} />
                      </span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
                          active
                            ? "border-brand bg-brand text-white"
                            : "border-ink/20 bg-white text-transparent group-hover:border-ink/40"
                        }`}
                      >
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <div className="mb-1.5 text-lg font-bold text-ink">
                      {s.title}
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2: Form & Process */}
        <section
          aria-labelledby="step-2-heading"
          className="site-wrap mt-16"
        >
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <div className="mb-6 flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                  2
                </span>
                <h2 id="step-2-heading" className="text-xl font-semibold">
                  Tell me about you
                </h2>
              </div>

              {sent ? (
                <div
                  role="status"
                  className="rounded-2xl border border-brand/25 bg-white p-8 text-center"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Request Received!</h3>
                  <p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-muted">
                    Thanks for reaching out. I&apos;ve got your details and will
                    reply soon to set up your session.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-sm font-semibold text-brand underline-offset-4 hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <input type="hidden" name="service" value={service} />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="book-name" className={labelBase}>
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="book-name"
                        className={inputBase}
                        name="name"
                        placeholder="Alex Rivera"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="book-email" className={labelBase}>
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        id="book-email"
                        className={inputBase}
                        type="email"
                        name="email"
                        placeholder="alex@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="book-phone" className={labelBase}>
                        Phone / Messenger{" "}
                        <span className="font-normal text-muted">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="book-phone"
                        className={inputBase}
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="book-date" className={labelBase}>
                        Preferred Date{" "}
                        <span className="font-normal text-muted">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="book-date"
                        className={inputBase}
                        type="date"
                        name="date"
                      />
                    </div>
                  </div>

                  {service === "speaking" && (
                    <div>
                      <label htmlFor="book-event" className={labelBase}>
                        Event Name &amp; Location
                      </label>
                      <input
                        id="book-event"
                        className={inputBase}
                        name="event"
                        placeholder="e.g. Annual Fitness Summit, Manila"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="book-message" className={labelBase}>
                      {service === "speaking"
                        ? "Audience, topic, and format"
                        : "Your goals and anything I should know"}
                    </label>
                    <textarea
                      id="book-message"
                      className={`${inputBase} min-h-[130px] resize-y`}
                      name="message"
                      placeholder={
                        service === "speaking"
                          ? "Tell me about your audience size, event theme, and whether it's online or in-person..."
                          : "Share what you're currently working on and what you'd like to achieve..."
                      }
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full rounded-[10px] bg-brand px-[22px] py-3 text-base font-semibold text-white hover:brightness-90 sm:w-auto"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar: What happens next */}
            <aside className="rounded-2xl border border-ink/15 bg-white p-6 md:p-7 lg:mt-11">
              <h3 className="mb-5 text-base font-bold uppercase tracking-wider text-muted">
                What happens next
              </h3>
              <ol className="relative space-y-6 before:absolute before:bottom-3 before:left-[13px] before:top-3 before:w-px before:bg-ink/15">
                {NEXT_STEPS.map((step, i) => (
                  <li key={step.title} className="relative flex gap-4">
                    <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white ring-4 ring-white">
                      {i + 1}
                    </span>
                    <div className="pt-0.5">
                      <div className="font-semibold text-ink">{step.title}</div>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="site-wrap mb-20 mt-20 max-w-3xl"
        >
          <div className="mb-8 text-center">
            <h2 id="faq-heading" className="text-2xl font-bold md:text-3xl">
              Quick Questions
            </h2>
            <p className="mt-2 text-sm text-muted">
              Everything you need to know before booking.
            </p>
          </div>

          <div className="divide-y divide-ink/10 rounded-2xl border border-ink/15 bg-white">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold transition hover:text-brand"
                  >
                    <span>{item.q}</span>
                    <ChevronDown open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-0.5 text-sm leading-relaxed text-muted">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
