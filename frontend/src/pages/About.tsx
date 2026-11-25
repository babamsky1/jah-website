import crowdImg from "../assets/crowd.jpg";
import workshopImg from "../assets/workshop.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

/* ---------- Assets & Links ---------- */
const CONTACT = "mailto:REPLACE_ME@example.com";
const PORTRAIT_SRC = crowdImg;
const ACTION_SRC = workshopImg;

/* ---------- Data ---------- */
const CREDENTIALS = [
  "[Degree / Exercise Science background]",
  "[Certifications, e.g. strength & conditioning, personal training]",
  "[Years of coaching experience]",
  "[Teams, athletes or organizations coached]",
  "[Speaking, podcast or publication highlights]",
];

const FOCUS_AREAS = [
  "Strength training & physical conditioning",
  "Muscle development, longevity & health",
  "Real-world nutrition strategies",
  "Evidence-based program design",
  "Corporate fitness & coaching competency",
];

const BELIEFS = [
  {
    accent: "bg-brand/10 text-brand",
    border: "border-brand/25",
    title: "Evidence first",
    body: "Good coaching starts with what the research actually shows, not what's trending.",
  },
  {
    accent: "bg-gold/15 text-gold",
    border: "border-gold/30",
    title: "Practical always",
    body: "If it can't be used in real life, it's just information. I turn science into simple actions.",
  },
  {
    accent: "bg-danger/10 text-danger",
    border: "border-danger/25",
    title: "Built for real life",
    body: "Programs should fit your schedule, your body, and your goals, not the other way around.",
  },
];

const PATHS = [
  {
    title: "Train with me",
    body: "Courses and programs for body transformation, trainers, and performance.",
    href: "/programs",
    cta: "See programs",
    color: "text-brand",
    badge: "bg-brand/10 text-brand",
    icon: "dumbbell",
  },
  {
    title: "Book me to speak",
    body: "Talks, webinars, and workshops for conferences, schools, and organizations.",
    href: "/beyond",
    cta: "See engagements",
    color: "text-gold",
    badge: "bg-gold/15 text-gold",
    icon: "mic",
  },
  {
    title: "Let's talk",
    body: "Not sure where to start? Send a message and we'll figure it out together.",
    href: CONTACT,
    cta: "Get in touch",
    color: "text-danger",
    badge: "bg-danger/10 text-danger",
    icon: "chat",
  },
] as const;

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

function PathIcon({ name }: { name: "dumbbell" | "mic" | "chat" }) {
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
      <path d="M4 4h16v12H9l-5 4V4z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ---------- Page ---------- */
export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header active="About" />

      <main className="flex-1">
        {/* Hero */}
        <section className="site-wrap pb-12 pt-14 md:pt-20">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="mb-5 text-[clamp(2.375rem,5.5vw,3.75rem)] font-bold leading-[1.06] tracking-tight">
                Hi, I&apos;m Coach Jah.
              </h1>
              <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
                I help people understand their bodies, train smarter, and make
                fitness decisions they can actually stick with.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  className="inline-block rounded-[10px] bg-brand px-[22px] py-3 text-base font-semibold text-white hover:brightness-90"
                  to="/booking"
                >
                  Book a Session
                </Link>
                <Link
                  className="inline-block rounded-[10px] border border-ink/15 bg-white px-[22px] py-3 text-base font-semibold text-ink hover:border-ink/30"
                  to="/programs"
                >
                  Explore Programs
                </Link>
              </div>
            </div>

            {/* Portrait / Crowd Image Slot */}
            <div className="mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-2xl border border-ink/15 bg-white">
              {PORTRAIT_SRC ? (
                <img
                  src={PORTRAIT_SRC}
                  alt="Coach Jah audience and crowd session"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-ink/40">
                  Coach Jah Portrait (4:5)
                </div>
              )}
            </div>
          </div>
        </section>

        {/* My Story */}
        <section className="site-wrap mt-10">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Workshop / Action Image Slot */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/15 bg-white">
              {ACTION_SRC ? (
                <img
                  src={ACTION_SRC}
                  alt="Coach Jah leading a workshop"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-ink/40">
                  Training / Coaching Photo (4:3)
                </div>
              )}
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted">
              <h2 className="text-2xl font-bold text-ink md:text-3xl">
                My Story
              </h2>
              <p>
                [Short origin story: how Coach Jah got into Exercise Science,
                strength training, and coaching.]
              </p>
              <p>
                Along the way I learned that{" "}
                <strong className="font-semibold text-ink">
                  more information doesn&apos;t automatically mean better
                  results.
                </strong>{" "}
                What people need is a clear way to think about training,
                nutrition, and recovery.
              </p>
              <p>
                [One line on what drives Coach Jah today: the people, athletes
                and organizations he works with.]
              </p>
            </div>
          </div>
        </section>

        {/* What I Believe */}
        <section className="site-wrap mt-20">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">What I Believe</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {BELIEFS.map((b, i) => (
              <div
                key={b.title}
                className={`rounded-2xl border ${b.border} bg-white p-6`}
              >
                <span
                  className={`mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${b.accent}`}
                >
                  0{i + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-ink">{b.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Background & Focus Areas */}
        <section className="site-wrap mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-ink/15 bg-white p-7">
              <h2 className="mb-5 text-xl font-bold">My Background</h2>
              <ul className="space-y-3.5 text-sm leading-relaxed text-muted">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink/15 bg-white p-7">
              <h2 className="mb-5 text-xl font-bold">What I Work On</h2>
              <ul className="space-y-3.5 text-sm leading-relaxed text-muted">
                {FOCUS_AREAS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Ways to Work Together */}
        <section className="site-wrap mt-20">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ways to Work Together
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PATHS.map((p) => {
              const classes =
                "group flex flex-col justify-between rounded-2xl border border-ink/15 bg-white p-6 transition hover:border-ink/35";
              const content = (
                <>
                  <div>
                    <div
                      className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${p.badge}`}
                    >
                      <PathIcon name={p.icon} />
                    </div>
                    <h3 className="mb-1.5 text-lg font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                  <span
                    className={`mt-5 inline-flex items-center gap-1 text-sm font-bold ${p.color} group-hover:underline`}
                  >
                    {p.cta} →
                  </span>
                </>
              );

              return /^(https?:|mailto:)/.test(p.href) ? (
                <a key={p.title} href={p.href} className={classes}>
                  {content}
                </a>
              ) : (
                <Link key={p.title} to={p.href} className={classes}>
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="site-wrap mb-20 mt-20">
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-ink/15 bg-white p-8 md:grid-cols-2 md:p-12">
            <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight">
              Ready to train smarter?
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>Tell me about your goals and where you are right now.</p>
              <p className="font-semibold text-ink">
                Let&apos;s build a plan that actually fits your life.
              </p>
              <div className="pt-1">
                <a
                  className="inline-block rounded-[10px] bg-brand px-[22px] py-3 text-base font-semibold text-white hover:brightness-90"
                  href={CONTACT}
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
