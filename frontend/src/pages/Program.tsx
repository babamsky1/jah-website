import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import action from "../assets/action.jpeg";
import meetPhoto from "../assets/meet.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

/* ---------- Assets & links ---------- */
const IMG = {
  strategyHero: action,
  strategyA: meetPhoto,
  strategyB: meetPhoto,
};

// YouTube embed URLs (use the /embed/ID form)
const VIDEO = {
  bodyTransformation: "https://www.youtube.com/embed/kEd97STL8dY",
  trainerCourse: "https://www.youtube.com/embed/n5BM2d-4kq8",
};
const CALENDLY = "https://calendly.com/REPLACE_ME";

/* ---------- SVG icons ---------- */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function CheckCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      {...stroke}
      className={`h-5 w-5 shrink-0 ${className}`}
      viewBox="0 0 24 24"
      strokeWidth="1.8"
    >
      <path d="M21.5 12a9.5 9.5 0 1 1-4.2-7.9" />
      <path d="M8 11.5l4 4 9-9.5" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      {...stroke}
      className={`mx-auto h-8 w-8 ${className}`}
      viewBox="0 0 24 24"
      strokeWidth="1.6"
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      {...stroke}
      className={`mx-auto h-8 w-8 ${className}`}
      viewBox="0 0 24 24"
      strokeWidth="1.6"
    >
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4M8 14h2M14 14h2" />
    </svg>
  );
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      {...stroke}
      className={`mx-auto h-8 w-8 ${className}`}
      viewBox="0 0 24 24"
      strokeWidth="1.6"
    >
      <path d="M4 4h16v12H9l-5 4V4z" />
    </svg>
  );
}

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      {...stroke}
      className="h-6 w-6 shrink-0"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d={open ? "M7.5 12h9" : "M7.5 12h9M12 7.5v9"} />
    </svg>
  );
}

/* ---------- Shared pieces ---------- */
function CourseTab(props: {
  title: string;
  heading: string;
  paragraphs: ReactNode[];
  video: string;
  videoTitle: string;
}) {
  return (
    <section className="site-wrap pt-10">
      <h1 className="mb-8 text-[clamp(2.125rem,5vw,3rem)] font-semibold">
        {props.title}
      </h1>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-[1.375rem] font-semibold leading-[1.3]">
            {props.heading}
          </h2>
          {props.paragraphs.map((p, i) => (
            <p key={i} className="text-[0.9375rem] leading-[1.6]">
              {p}
            </p>
          ))}
          <Link
            id="book"
            className="mt-4 inline-block rounded-[10px] bg-brand px-[22px] py-3 text-[1.125rem] font-semibold text-white hover:brightness-90"
            to="/booking"
          >
            Book a session
          </Link>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={props.video}
            title={props.videoTitle}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

const BodyTransformation = () => (
  <CourseTab
    title="Body Transformation Course"
    heading="Still confused about what actually works for building a better body?"
    paragraphs={[
      <>
        You've probably tried following different diets, workouts, and fitness
        advice. The problem isn't a lack of information.{" "}
        <b>It's knowing which information actually matters.</b>
      </>,
      <>
        In this FREE course, I'll walk you through the 4 pillars of building a
        body you can be proud of—without the unnecessary noise.
      </>,
      <>
        After watching the 4 pillars and if you are ready to learn more about my
        program, click below to register for a one-on-one conversation.
      </>,
    ]}
    video={VIDEO.bodyTransformation}
    videoTitle="Seven Principles of Training"
  />
);

const TrainerCrashCourse = () => (
  <CourseTab
    title="Personal Trainer Crash Course"
    heading="Want a career in fitness but don't know where to start?"
    paragraphs={[
      <>You don't need another random certification.</>,
      <>
        You need to understand{" "}
        <b>
          what it actually takes to become a competent &amp; highly recommended
          fitness professional.
        </b>
      </>,
      <>
        In this FREE crash course, I'll show you{" "}
        <b>how to start your personal training career the right way</b>, even if
        you don't have a traditional fitness background.
      </>,
      <>
        After watching the personal trainer crash course and if you are ready to
        learn more about my program, click below to register for a one-on-one
        conversation.
      </>,
    ]}
    video={VIDEO.trainerCourse}
    videoTitle="Personal Trainer Crash Course"
  />
);

/* ---------- Tab 3: Strategy session ---------- */
const WORK_ON = [
  "Your current training and exercise approach",
  "Nutrition and eating strategies",
  "Body composition and physique goals",
  "Strength, conditioning, and performance",
  "Training structure and exercise selection",
  "Recovery and lifestyle factors",
  "Conflicting fitness information you've encountered",
  "Problems you've been struggling to solve",
  "What you've already tried and why it may not be working",
  "Practical next steps based on your specific situation",
];

const FAQ: [string, ReactNode][] = [
  [
    "Is this coaching?",
    <>
      <b>No. This is strategization.</b>
      <p className="mt-3">
        A coaching relationship involves ongoing guidance, implementation,
        monitoring, and adjustment. A Strategy Session is different. We assess
        your situation, identify what matters, and develop a direction you can
        execute yourself.
      </p>
      <p className="mt-3">
        If you need someone to continuously guide and monitor your training,
        nutrition, or progress, that's where 1:1 Coaching comes in.
      </p>
    </>,
  ],
  [
    "What happens after the call?",
    <>
      <p>
        You leave with a clear direction: what to keep, change, stop, and start,
        and the reasoning behind each recommendation.
      </p>
      <p className="mt-3">
        Tier 1 includes one email check-in based on the timeline we set during
        the session. Tier 2 adds an Implementation Roadmap you can revisit and a
        Clarity Call for follow-up questions.
      </p>
    </>,
  ],
  [
    "Can I message you after the Strategy Session?",
    <>
      <p>
        Use the check-in included in your tier. Tier 1 includes 1 email
        check-in; Tier 2 includes 1 FREE email check-in and a Clarity Call.
      </p>
      <p className="mt-3">
        Ongoing access and continuous messaging are part of 1:1 Coaching, not a
        Strategy Session.
      </p>
    </>,
  ],
  [
    "Do I have to strictly follow your recommendations?",
    <p>
      No. The goal is for you to understand why a recommendation makes sense for
      your situation, so you can apply it—and adjust it—with confidence.
    </p>,
  ],
  [
    "Who is this for?",
    <p>
      This is for people who already have some training or nutrition experience
      but feel stuck in a sea of conflicting advice, and want an expert to help
      them decide what actually applies to them.
    </p>,
  ],
  [
    "Who is this NOT for?",
    <p>
      This isn't for anyone looking for a done-for-you program, continuous
      day-to-day monitoring, or medical clearance and treatment. Those needs are
      better served by 1:1 Coaching or an appropriate healthcare professional.
    </p>,
  ],
];

function Tier(props: {
  name: string;
  price: string;
  blurb: string;
  tone: "brand" | "gold";
  items: ReactNode[];
  note: ReactNode;
}) {
  const card = props.tone === "brand" ? "bg-brand" : "bg-gold";
  const check = props.tone === "brand" ? "text-brand" : "text-gold";
  return (
    <div>
      <div className={`${card} rounded-[20px] p-6 text-white`}>
        <div className="text-[0.9375rem]">{props.name}</div>
        <div className="my-1.5 text-[2.5rem] font-bold">
          {props.price}
          <span className="text-sm font-normal"> /session</span>
        </div>
        <p className="min-h-[40px] text-[0.8125rem]">{props.blurb}</p>
        <a
          className="mt-4 block w-full rounded-[10px] bg-ink px-[22px] py-3 text-center text-base font-semibold text-white hover:brightness-90"
          href={CALENDLY}
        >
          Book your session
        </a>
      </div>
      <h4 className="mb-3 mt-5 font-semibold">What's included</h4>
      <ul className="m-0 flex list-none flex-col gap-3 p-0 text-sm leading-[1.4]">
        {props.items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className={`${check} mt-px`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-semibold">{props.note}</p>
    </div>
  );
}

function StrategySession() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      {/* Hero */}
      <section className="site-wrap relative overflow-hidden pt-5">
        <div className="relative grid grid-cols-1 items-end md:grid-cols-2">
          <div className="relative z-10 self-center pb-10 md:pb-0">
            <h1 className="mb-4 max-w-[500px] text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.05]">
              Fitness &amp; Performance Strategy Session
            </h1>
            <p className="max-w-[500px] text-[1.0625rem]">
              Stop Guessing and Confusing Yourself. Start Strategizing.
            </p>
          </div>
          <img
            className="relative z-0 hidden h-[440px] w-full object-contain object-bottom md:-ml-10 md:block"
            src={IMG.strategyHero}
            alt=""
          />
        </div>
      </section>

      {/* Real talk */}
      <section className="site-wrap mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="text-[0.9375rem] leading-[1.7]">
          <h2 className="mb-2 text-[1.75rem] font-semibold">Real Talk</h2>
          <p className="mb-4">
            You don't need more fitness information.{" "}
            <b>You need to know what actually applies to you.</b> If you've
            consumed countless fitness videos, read articles, tried different
            approaches, and still find yourself unsure about what to do next,
            this session is for you.
          </p>
          <p className="mb-4">
            The Fitness &amp; Performance Strategy Session is a 1:1 consultation
            designed to help you make sense of your specific situation, identify
            what actually matters, and build a practical strategy you can
            execute.
          </p>
          <p className="mb-4">
            We'll look at your situation, your goals, your current approach, and
            the things that may be getting in the way. Then we'll determine what
            you should <b>keep, change, stop, or start doing.</b>
          </p>
          <p className="mb-4">
            This isn't about giving you another generic fitness program.
          </p>
          <p className="text-[1.25rem] font-semibold">
            It's about giving you CLARITY.
          </p>
        </div>
        <img
          className="aspect-square w-full rounded-[20px] bg-[#ddd] object-cover"
          src={IMG.strategyA}
          alt=""
        />
      </section>

      {/* What we'll work on */}
      <section className="site-wrap mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <img
          className="aspect-square w-full rounded-[20px] bg-[#ddd] object-cover"
          src={IMG.strategyB}
          alt=""
        />
        <div className="text-sm leading-[1.7]">
          <h2 className="mb-2 text-[1.625rem] font-semibold">
            What we'll work on
          </h2>
          <p className="mb-2">Depending on your situation, we may discuss:</p>
          <ul className="mb-4 list-disc pl-5">
            {WORK_ON.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <p>
            The goal is simple,{" "}
            <b>
              leave the session knowing what to do next and why you're doing it.
            </b>
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="site-wrap mt-[72px]">
        <h2 className="mb-8 text-center text-[1.75rem] font-semibold">
          Choose your session
        </h2>
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-2">
          <Tier
            name="Tier 1: Strategy Call"
            price="P 2,999.00"
            tone="brand"
            blurb="For those who need expert perspective, clarity, and a practical direction."
            items={[
              "60-minute 1:1 Strategy Call",
              "Personalized discussion based on your situation",
              "Strategic recommendations and next steps",
              <>
                <b>1 Email Check-In</b> based on the timeline we establish
                during the session
              </>,
            ]}
            note="Best for someone who already has the ability to execute but needs an expert to help make sense of their situation."
          />
          <Tier
            name="Tier 2: Strategy + Clarity Call"
            price="P 6,499.00"
            tone="gold"
            blurb="For situations that require more than a single conversation."
            items={[
              "60-minute 1:1 Strategy Call",
              "Personalized discussion based on your situation",
              <>
                <b>Implementation Roadmap</b> containing your step by step
                execution.
              </>,
              <>
                <b>Clarity Call</b> for follow-up questions and clarification
              </>,
              <>
                <b>1 FREE Email Check-In</b> based on the timeline we establish
              </>,
            ]}
            note="This gives you something you can revisit after the session and a structured opportunity to clarify things as you begin implementing the strategy."
          />
        </div>
      </section>

      {/* How booking works */}
      <section className="site-wrap mt-[72px]">
        <h2 className="mb-8 text-center text-[1.75rem] font-semibold">
          How booking works
        </h2>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <PhoneIcon className="mb-3 text-brand" />
            <div className="font-bold text-brand">STEP 1:</div>
            <h4 className="my-1 font-semibold">Book your call</h4>
            <p className="text-sm">
              Choose your preferred package and book your session through
              Calendly.
            </p>
            <a
              className="mt-4 inline-block rounded-[10px] bg-brand px-[22px] py-3 text-sm font-semibold text-white hover:brightness-90"
              href={CALENDLY}
            >
              Book at Calendly
            </a>
          </div>
          <div>
            <CalendarIcon className="mb-3 text-gold" />
            <div className="font-bold text-gold">STEP 2:</div>
            <h4 className="my-1 font-semibold">Confirm your schedule</h4>
            <p className="text-sm">
              Once your booking is submitted, you'll receive a Google Calendar
              invite confirming the session.
            </p>
          </div>
          <div>
            <ChatIcon className="mb-3 text-danger" />
            <div className="font-bold text-danger">STEP 3:</div>
            <h4 className="my-1 font-semibold">Show up ready</h4>
            <p className="text-sm">
              Bring your questions, concerns, experiences, and whatever you've
              been struggling with.
            </p>
          </div>
        </div>
        <p className="mt-8 text-center">
          <b>Take notes. Ask questions. Challenge assumptions.</b>
          <br />
          <span className="text-[0.8125rem]">
            The goal isn't just to give you answers. It's to help you understand
            the reasoning behind them.
          </span>
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-[72px] max-w-[800px] px-6">
        <h2 className="mb-6 text-center text-[1.75rem] font-semibold">
          Frequently Asked Questions
        </h2>
        {FAQ.map(([q, a], i) => (
          <div key={q}>
            <button
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 border-b border-[#999] bg-transparent px-1 py-4 text-left text-base font-semibold"
            >
              <span>{q}</span>
              <ToggleIcon open={open === i} />
            </button>
            {open === i && (
              <div className="px-1 py-4 text-sm leading-[1.6]">{a}</div>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="site-wrap mt-[72px] grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.1]">
          You don't need another random fitness tip
        </h2>
        <div className="text-[0.9375rem] leading-[1.6]">
          <p className="mb-4">
            You need to know which information matters for your situation. So,
            let's make sense of it. :)
          </p>
          <p>
            Stop Doing Random Things That Make No Sense. Start Strategizing
            &amp; Execute What Works.
          </p>
          <Link
            className="mt-4 inline-block rounded-[10px] bg-brand px-[22px] py-3 text-base font-semibold text-white hover:brightness-90"
            to="/booking"
          >
            Book a session
          </Link>
        </div>
      </section>
    </>
  );
}

/* ---------- Page ---------- */
type TabKey =
  | "body-transformation"
  | "trainer-crash-course"
  | "strategy-session";
const TABS: { key: TabKey; label: string }[] = [
  { key: "body-transformation", label: "Body Transformation Course" },
  { key: "trainer-crash-course", label: "Personal Trainer Crash Course" },
  { key: "strategy-session", label: "Fitness & Performance Strategy" },
];

export default function Programs() {
  const fromHash = (): TabKey => {
    const h =
      typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    return (TABS.find((t) => t.key === h)?.key ??
      "body-transformation") as TabKey;
  };
  const [tab, setTab] = useState<TabKey>(fromHash);

  useEffect(() => {
    const onHash = () => setTab(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const choose = (k: TabKey) => {
    setTab(k);
    window.history.replaceState(null, "", `#${k}`);
  };

  return (
    <>
      <Header active="Programs" />

      <div className="site-wrap">
        <div
          className="flex gap-2 overflow-x-auto overflow-y-hidden border-b-2 border-[#e5e5e5]"
          role="tablist"
          aria-label="Programs"
        >
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              className={`shrink-0 cursor-pointer whitespace-nowrap bg-transparent px-5 py-3.5 text-base font-semibold ${
                tab === t.key
                  ? "text-ink shadow-[inset_0_-3px_0_var(--color-brand)]"
                  : "text-muted"
              }`}
              aria-selected={tab === t.key}
              onClick={() => choose(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main role="tabpanel">
        {tab === "body-transformation" && <BodyTransformation />}
        {tab === "trainer-crash-course" && <TrainerCrashCourse />}
        {tab === "strategy-session" && <StrategySession />}
      </main>

      <Footer />
    </>
  );
}
