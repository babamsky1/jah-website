import React, { useEffect, useState } from "react";

/* ---------- Theme ---------- */
const C = {
  teal: "#1FB6C9",
  gold: "#D9A441",
  dark: "#111111",
  text: "#111111",
  mute: "#555555",
  field: "#D9D9D9",
};

/* ---------- Replace with your real assets ---------- */
const IMG = {
  logo: "/images/logo.svg",
  strategyHero: "/images/strategy-hero.png",
  strategyA: "/images/strategy-a.jpg",
  strategyB: "/images/strategy-b.jpg",
};
// YouTube embed URLs (use the /embed/ID form)
const VIDEO = {
  bodyTransformation: "https://www.youtube.com/embed/REPLACE_ME_1",
  trainerCourse: "https://www.youtube.com/embed/REPLACE_ME_2",
};
const CALENDLY = "https://calendly.com/REPLACE_ME";

const CSS = `
*{box-sizing:border-box}
body{margin:0;font-family:'Inter',system-ui,sans-serif;color:${C.text}}
a{color:inherit;text-decoration:none}
.wrap{max-width:1100px;margin:0 auto;padding:0 24px}
.btn{display:inline-block;background:${C.teal};color:#fff;font-weight:600;border:0;border-radius:10px;padding:12px 22px;cursor:pointer;font-size:16px}
.btn:hover{filter:brightness(.92)}
.btn.dark{background:#111;width:100%;text-align:center}
.btn:focus-visible,a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid ${C.teal};outline-offset:2px}
.nav{display:flex;gap:28px;align-items:center}
.nav a{font-size:13px;font-weight:500;letter-spacing:.04em;text-transform:uppercase;padding-bottom:4px;border-bottom:2px solid transparent}
.nav a.on{border-color:${C.teal}}
.tabs{display:flex;gap:8px;border-bottom:2px solid #e5e5e5;overflow-x:auto}
.tab{background:none;border:0;font:inherit;font-size:16px;font-weight:600;padding:14px 20px;cursor:pointer;color:${C.mute};border-bottom:3px solid transparent;margin-bottom:-2px;white-space:nowrap}
.tab[aria-selected=true]{color:${C.text};border-color:${C.teal}}
.split{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:32px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;text-align:center}
.foot{display:grid;grid-template-columns:1fr 1fr 1.3fr;gap:32px}
.video{position:relative;width:100%;aspect-ratio:16/9;border-radius:12px;overflow:hidden;background:#000}
.video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.faq button{width:100%;display:flex;justify-content:space-between;background:none;border:0;border-bottom:1px solid #999;padding:16px 4px;font:inherit;font-size:16px;font-weight:600;cursor:pointer;text-align:left}
@media(max-width:800px){.split,.grid2,.grid3,.foot{grid-template-columns:1fr}.nav{gap:14px;flex-wrap:wrap}.hero-img{display:none}}
`;

/* ---------- Shared pieces ---------- */
function Header({ active }: { active: string }) {
  const links: [string, string][] = [
    ["Home", "/"],
    ["Programs", "/programs"],
    ["Beyond", "/beyond"],
    ["About", "/about"],
  ];
  return (
    <header
      className="wrap"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 24px",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        <img src={IMG.logo} alt="" height={30} /> Jah Agcaoili
      </a>
      <nav className="nav" aria-label="Main">
        {links.map(([l, h]) => (
          <a key={l} href={h} className={l === active ? "on" : ""}>
            {l}
          </a>
        ))}
        <a
          href="/programs#book"
          className="btn"
          style={{
            fontSize: 13,
            padding: "8px 16px",
            textTransform: "none",
            letterSpacing: 0,
            borderBottom: 0,
          }}
        >
          Book a Session
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  const field: React.CSSProperties = {
    width: "100%",
    background: C.field,
    border: 0,
    borderRadius: 8,
    padding: 10,
    font: "inherit",
  };
  const label: React.CSSProperties = {
    fontSize: 13,
    display: "block",
    marginBottom: 4,
  };
  return (
    <footer style={{ background: C.dark, color: "#fff", marginTop: 80 }}>
      <div className="wrap" style={{ padding: "48px 24px" }}>
        <div style={{ fontSize: 26, fontWeight: 700, marginBottom: 24 }}>
          Jah Agcaoili
        </div>
        <div className="foot">
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            {["f", "ig", "in", "yt", "sp"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: C.teal,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {s}
              </a>
            ))}
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              lineHeight: 2,
              fontSize: 14,
            }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/programs">Programs</a>
              <ul style={{ listStyle: "none", paddingLeft: 20, margin: 0 }}>
                <li>
                  <a href="/programs#body-transformation">
                    Body Transformation Course
                  </a>
                </li>
                <li>
                  <a href="/programs#trainer-crash-course">
                    Personal Trainer Crash Course
                  </a>
                </li>
                <li>
                  <a href="/programs#strategy-session">
                    Fitness &amp; Performance Course
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/beyond">Beyond</a>
            </li>
            <li>
              <a href="/programs#book">Book a Session</a>
            </li>
          </ul>
          <form onSubmit={(e) => e.preventDefault()}>
            <label style={label}>
              Name
              <input style={field} name="name" />
            </label>
            <label style={label}>
              Email Address
              <input style={field} type="email" name="email" />
            </label>
            <label style={label}>
              Message
              <textarea style={{ ...field, height: 90 }} name="message" />
            </label>
            <div style={{ textAlign: "right", marginTop: 8 }}>
              <button
                className="btn"
                style={{ fontSize: 12, padding: "8px 14px" }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          background: C.teal,
          textAlign: "center",
          fontSize: 11,
          letterSpacing: ".3em",
          padding: 8,
        }}
      >
        Jah Agcaoili Copyright © 2026
      </div>
    </footer>
  );
}

/* ---------- Tab 1 & 2: free course layout ---------- */
function CourseTab(props: {
  title: string;
  heading: string;
  paragraphs: React.ReactNode[];
  video: string;
  videoTitle: string;
}) {
  return (
    <section className="wrap" style={{ paddingTop: 40 }}>
      <h1
        style={{
          fontSize: "clamp(34px,5vw,48px)",
          fontWeight: 600,
          margin: "0 0 32px",
        }}
      >
        {props.title}
      </h1>
      <div className="split" style={{ alignItems: "start" }}>
        <div>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              lineHeight: 1.3,
              margin: "0 0 16px",
            }}
          >
            {props.heading}
          </h2>
          {props.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.6 }}>
              {p}
            </p>
          ))}
          <a
            id="book"
            className="btn"
            href={CALENDLY}
            style={{ marginTop: 16, fontSize: 18 }}
          >
            Book a session
          </a>
        </div>
        <div className="video">
          <iframe src={props.video} title={props.videoTitle} allowFullScreen />
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

const FAQ: [string, React.ReactNode][] = [
  [
    "Is this coaching?",
    <>
      <b>No. This is strategization.</b>
      <p>
        A coaching relationship involves ongoing guidance, implementation,
        monitoring, and adjustment. A Strategy Session is different. We assess
        your situation, identify what matters, and develop a direction you can
        execute yourself.
      </p>
      <p>
        If you need someone to continuously guide and monitor your training,
        nutrition, or progress, that's where 1:1 Coaching comes in.
      </p>
    </>,
  ],
  ["What happens after the call?", "Add your answer here."],
  ["Can I message you after the Strategy Session?", "Add your answer here."],
  [
    "Do I have to strictly follow your recommendations?",
    "Add your answer here.",
  ],
  ["Who is this for?", "Add your answer here."],
  ["Who is this NOT for?", "Add your answer here."],
];

const Check = ({ color }: { color: string }) => (
  <span style={{ color, fontWeight: 700, marginRight: 10 }}>✓</span>
);

function Tier(props: {
  name: string;
  price: string;
  blurb: string;
  bg: string;
  color: string;
  items: React.ReactNode[];
  note: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          background: props.bg,
          color: "#fff",
          borderRadius: 20,
          padding: 24,
        }}
      >
        <div style={{ fontSize: 15 }}>{props.name}</div>
        <div style={{ fontSize: 40, fontWeight: 700, margin: "6px 0" }}>
          {props.price}
          <span style={{ fontSize: 14, fontWeight: 400 }}> /session</span>
        </div>
        <p style={{ fontSize: 13, minHeight: 40 }}>{props.blurb}</p>
        <a className="btn dark" href={CALENDLY}>
          Book your session
        </a>
      </div>
      <h4 style={{ margin: "20px 0 8px" }}>What's included</h4>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: 14,
          lineHeight: 1.8,
        }}
      >
        {props.items.map((it, i) => (
          <li key={i}>
            <Check color={props.color} />
            {it}
          </li>
        ))}
      </ul>
      <p style={{ fontWeight: 600, fontSize: 14, marginTop: 16 }}>
        {props.note}
      </p>
    </div>
  );
}

function StrategySession() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      {/* Hero */}
      <section
        className="wrap split"
        style={{ paddingTop: 20, overflow: "hidden" }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(36px,6vw,60px)",
              lineHeight: 1.05,
              fontWeight: 600,
              margin: "0 0 16px",
            }}
          >
            Fitness &amp; Performance Strategy Session
          </h1>
          <p style={{ fontSize: 17, maxWidth: 340 }}>
            Stop Guessing and Confusing Yourself. Start Strategizing.
          </p>
        </div>
        <img
          className="hero-img"
          src={IMG.strategyHero}
          alt=""
          style={{
            width: "100%",
            maxHeight: 420,
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </section>

      {/* Real talk */}
      <section className="wrap split" style={{ marginTop: 56 }}>
        <div style={{ fontSize: 15, lineHeight: 1.7 }}>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>Real Talk</h2>
          <p>
            You don't need more fitness information.{" "}
            <b>You need to know what actually applies to you.</b> If you've
            consumed countless fitness videos, read articles, tried different
            approaches, and still find yourself unsure about what to do next,
            this session is for you.
          </p>
          <p>
            The Fitness &amp; Performance Strategy Session is a 1:1 consultation
            designed to help you make sense of your specific situation, identify
            what actually matters, and build a practical strategy you can
            execute.
          </p>
          <p>
            We'll look at your situation, your goals, your current approach, and
            the things that may be getting in the way. Then we'll determine what
            you should <b>keep, change, stop, or start doing.</b>
          </p>
          <p>This isn't about giving you another generic fitness program.</p>
          <p style={{ fontSize: 20, fontWeight: 600 }}>
            It's about giving you CLARITY.
          </p>
        </div>
        <img
          src={IMG.strategyA}
          alt=""
          style={{
            width: "100%",
            borderRadius: 20,
            background: "#ddd",
            aspectRatio: "4/3",
            objectFit: "cover",
          }}
        />
      </section>

      {/* What we'll work on */}
      <section className="wrap split" style={{ marginTop: 56 }}>
        <img
          src={IMG.strategyB}
          alt=""
          style={{
            width: "100%",
            borderRadius: 20,
            background: "#ddd",
            aspectRatio: "4/3",
            objectFit: "cover",
          }}
        />
        <div style={{ fontSize: 14, lineHeight: 1.7 }}>
          <h2 style={{ fontSize: 26, fontWeight: 600 }}>What we'll work on</h2>
          <p>Depending on your situation, we may discuss:</p>
          <ul style={{ paddingLeft: 20 }}>
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
      <section className="wrap" style={{ marginTop: 72 }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          Choose your session
        </h2>
        <div className="grid2">
          <Tier
            name="Tier 1: Strategy Call"
            price="P 2,999.00"
            bg={C.teal}
            color={C.teal}
            blurb="For those who need expert perspective, clarity, and a practical direction."
            items={[
              "60-minute 1:1 Strategy Call",
              "Personalized discussion based on your situation",
              "Strategic recommendations and next steps",
              "1 Email Check-In based on the timeline we establish during the session",
            ]}
            note="Best for someone who already has the ability to execute but needs an expert to help make sense of their situation."
          />
          <Tier
            name="Tier 2: Strategy + Clarity Call"
            price="P 6,499.00"
            bg={C.gold}
            color={C.gold}
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
              <>1 FREE Email Check-In based on the timeline we establish</>,
            ]}
            note="This gives you something you can revisit after the session and a structured opportunity to clarify things as you begin implementing the strategy."
          />
        </div>
      </section>

      {/* How booking works */}
      <section className="wrap" style={{ marginTop: 72 }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          How booking works
        </h2>
        <div className="grid3">
          <div>
            <div style={{ color: C.teal, fontWeight: 700 }}>STEP 1:</div>
            <h4 style={{ margin: "4px 0" }}>Book your call</h4>
            <p style={{ fontSize: 14 }}>
              Choose your preferred package and book your session through
              Calendly.
            </p>
            <a className="btn" href={CALENDLY} style={{ fontSize: 14 }}>
              Book at Calendly
            </a>
          </div>
          <div>
            <div style={{ color: C.gold, fontWeight: 700 }}>STEP 2:</div>
            <h4 style={{ margin: "4px 0" }}>Confirm your schedule</h4>
            <p style={{ fontSize: 14 }}>
              Once your booking is submitted, you'll receive a Google Calendar
              invite confirming the session.
            </p>
          </div>
          <div>
            <div style={{ color: "#EF3E2D", fontWeight: 700 }}>STEP 3:</div>
            <h4 style={{ margin: "4px 0" }}>Show up ready</h4>
            <p style={{ fontSize: 14 }}>
              Bring your questions, concerns, experiences, and whatever you've
              been struggling with.
            </p>
          </div>
        </div>
        <p style={{ textAlign: "center", marginTop: 32 }}>
          <b>Take notes. Ask questions. Challenge assumptions.</b>
          <br />
          <span style={{ fontSize: 13 }}>
            The goal isn't just to give you answers. It's to help you understand
            the reasoning behind them.
          </span>
        </p>
      </section>

      {/* FAQ */}
      <section className="wrap faq" style={{ marginTop: 72, maxWidth: 800 }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          Frequently Asked Questions
        </h2>
        {FAQ.map(([q, a], i) => (
          <div key={q}>
            <button
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{q}</span>
              <span aria-hidden>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div
                style={{ fontSize: 14, lineHeight: 1.6, padding: "12px 4px" }}
              >
                {a}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="wrap split" style={{ marginTop: 72 }}>
        <h2
          style={{
            fontSize: "clamp(36px,5vw,56px)",
            fontWeight: 500,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          You don't need another random fitness tip
        </h2>
        <div style={{ fontSize: 15, lineHeight: 1.6 }}>
          <p>
            You need to know which information matters for your situation. So,
            let's make sense of it. :)
          </p>
          <p>
            Stop Doing Random Things That Make No Sense. Start Strategizing
            &amp; Execute What Works.
          </p>
          <a className="btn" href={CALENDLY}>
            Book a session
          </a>
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
      <style>{CSS}</style>
      <Header active="Programs" />

      <div className="wrap">
        <div className="tabs" role="tablist" aria-label="Programs">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              className="tab"
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
