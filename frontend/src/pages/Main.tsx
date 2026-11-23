import React from "react";
import bodyTranformationImg from "../assets/bodyTransformation1.png";
import meetImg from "../assets/meet.jpg";
import performanceImg from "../assets/performance.jpg";
import speakingImg from "../assets/speaking.jpg";
import spotifyIcon from "../assets/spotify.png";
import trainerCourseImg from "../assets/trainerCourse.jpg";

/* ---------- Theme ---------- */
const C = {
  teal: "#1FB6C9",
  dark: "#111111",
  text: "#111111",
  mute: "#555555",
  field: "#D9D9D9",
};

/* ---------- Assets ---------- */
const IMG = {
  logo: "", // add logo.svg to assets later
  hero: bodyTranformationImg,
  bodyTransformation: bodyTranformationImg,
  trainerCourse: trainerCourseImg,
  performance: performanceImg,
  coach: meetImg,
  speaking: speakingImg,
};

const CSS = `
*{box-sizing:border-box}
body{margin:0;font-family:'Inter',system-ui,sans-serif;color:${C.text};background:#ffffff}
a{color:inherit;text-decoration:none}
.wrap{max-width:1100px;margin:0 auto;padding:0 24px}
.btn{display:inline-block;background:${C.teal};color:#fff;font-weight:600;border:0;border-radius:10px;padding:12px 22px;cursor:pointer;font-size:16px}
.btn:hover{filter:brightness(.92)}
.btn:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid ${C.teal};outline-offset:2px}
.nav{display:flex;gap:28px;align-items:center}
.nav a{font-size:13px;font-weight:500;letter-spacing:.04em;text-transform:uppercase;padding-bottom:4px;border-bottom:2px solid transparent}
.nav a.on{border-color:${C.teal}}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.split{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.stats{display:flex;justify-content:center;flex-wrap:wrap}
.stats div{padding:6px 40px;font-size:20px;border-left:2px solid ${C.dark}}
.stats div:first-child{border-left:0}
.foot{display:grid;grid-template-columns:1fr 1fr 1.3fr;gap:32px}

/* Hero: image + logo shape layered behind the text */
.hero{position:relative;overflow:hidden;min-height:600px;display:flex;align-items:center}
.hero-logo{position:absolute;left:38%;top:50%;transform:translateY(-50%);height:115%;width:auto;z-index:0}
.hero-bg{position:absolute;right:max(2%,calc((100% - 1100px)/2));bottom:0;height:100%;width:auto;max-width:55%;object-fit:contain;object-position:bottom;z-index:1}
.hero-content{position:relative;z-index:2;width:100%}

@media(max-width:800px){
  .grid3,.split,.foot{grid-template-columns:1fr}
  .nav{gap:14px;flex-wrap:wrap}
  .stats div{border-left:0;padding:6px 16px}
  .hero{min-height:480px}
  .hero-logo{left:20%}
  .hero-bg{right:-10%;max-width:100%;opacity:.3}
}
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
        {IMG.logo && <img src={IMG.logo} alt="" height={30} />} Jah Agcaoili
      </a>
      <nav className="nav" aria-label="Main">
        {links.map(([label, href]) => (
          <a key={label} href={href} className={label === active ? "on" : ""}>
            {label}
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

/* ---------- Page ---------- */
const programs = [
  {
    img: IMG.bodyTransformation,
    title: "Body Transformation Course",
    text: "Cut through the noise and learn the four evidence-based pillars of real progress.",
    cta: "Learn for Free",
    href: "/programs#body-transformation",
  },
  {
    img: IMG.trainerCourse,
    title: "Personal Trainer Crash Course",
    text: "Start your fitness career the right way with the core skills real coaches need.",
    cta: "Learn for Free",
    href: "/programs#trainer-crash-course",
  },
  {
    img: IMG.performance,
    title: "Fitness & Performance Strategy",
    text: "Stop collecting random advice; get expert clarity on what actually moves your progress.",
    cta: "Book a session",
    href: "/programs#strategy-session",
  },
];

export default function Main() {
  return (
    <>
      <style>{CSS}</style>
      <Header active="Home" />

      {/* Hero */}
      <section className="hero">
        {/* Faded logo shape behind everything */}
        <svg
          className="hero-logo"
          viewBox="0 0 200 220"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M100 10 L180 55 L180 165 L100 210 L20 165 L20 55 Z"
            stroke="#F1F1F1"
            strokeWidth="24"
            strokeLinejoin="miter"
            strokeDasharray="150 30"
          />
          <rect x="20" y="98" width="130" height="24" fill="#F1F1F1" />
        </svg>

        {/* Coach photo (transparent PNG) */}
        <img className="hero-bg" src={IMG.hero} alt="Coach Jah" />

        {/* Text on top */}
        <div className="wrap hero-content">
          <h1
            style={{
              fontSize: "clamp(48px,8vw,84px)",
              lineHeight: 1.05,
              margin: "0 0 16px",
              fontWeight: 600,
            }}
          >
            Relax,
            <br />I got you
            <br />
            covered
          </h1>
          <p style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.5 }}>
            Evidence-based fitness coaching that fits into your personal rhythm,
            offering gentle guidance that makes progress feel grounded and
            doable.
          </p>
          <a className="btn" href="/programs#book">
            Book a session
          </a>
        </div>
      </section>

      {/* Programs */}
      <section className="wrap" style={{ marginTop: 60 }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          Program Courses
        </h2>
        <div className="grid3">
          {programs.map((p) => (
            <article key={p.title}>
              <img
                src={p.img}
                alt=""
                style={{
                  width: "100%",
                  aspectRatio: "1/1.1",
                  objectFit: "cover",
                  borderRadius: 24,
                  background: "#9fd6de",
                }}
              />
              <h3 style={{ fontSize: 18, margin: "16px 0 6px" }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: C.mute, minHeight: 42 }}>
                {p.text}
              </p>
              <a className="btn" href={p.href}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Coach */}
      <section className="wrap split" style={{ marginTop: 80 }}>
        <img
          src={IMG.coach}
          alt="Jah Agcaoili"
          style={{
            width: "100%",
            borderRadius: 24,
            background: "#ddd",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 600 }}>Meet your Coach</h2>
          <p style={{ lineHeight: 1.6, fontSize: 15 }}>
            <b>Jah Agcaoili, LPT, MSc</b> is an Assistant Professorial Lecturer
            III in the Department of Sports Science at the Polytechnic
            University of the Philippines, where he teaches Exercise and Sports
            Science. Outside the academe, he leads <b>Built On Evidence</b>, an
            evidence-based coaching and education system, and works selectively
            with clients through face-to-face personal training. He also hosts
            the <b>Keep It Legit Podcast</b>, where he shares research-driven
            insights{" "}
            <b>
              to help Filipinos think more critically and make better decisions
              in fitness and sports training.
            </b>
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="wrap stats" style={{ marginTop: 60 }}>
        {["Trainer", "Lecturer", "50+ programs created", "Podcast host"].map(
          (s) => (
            <div key={s}>{s}</div>
          ),
        )}
      </section>

      {/* Speaking */}
      <section className="wrap" style={{ marginTop: 80 }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          Think Differently about Fitness
        </h2>
        <div className="split">
          <div>
            <h3 style={{ fontSize: 26, fontWeight: 600 }}>
              Speaking &amp; Workshop Engagements
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>
              Don't just give your audience more information.
              <br />
              <b>Give them better ways to think.</b>
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>
              I speak and conduct workshops on Exercise Science, fitness, sports
              performance, coaching, and evidence-based practice, with a focus
              on turning research into practical decisions. Share your event
              details, audience, and what you're looking for. We'll take it from
              there.
            </p>
            <a className="btn" href="/beyond">
              Schedule now
            </a>
          </div>
          <img
            src={IMG.speaking}
            alt="Coach Jah speaking at an event"
            style={{
              width: "100%",
              borderRadius: 8,
              background: "#ddd",
              aspectRatio: "16/10",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* Podcast */}
      <section
        className="wrap split"
        style={{ marginTop: 80, borderTop: "1px solid #ccc", paddingTop: 48 }}
      >
        <div>
          <h2 style={{ fontSize: 26, fontWeight: 600 }}>
            Keep it Legit with Jah
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.6 }}>
            Click, subscribe, and join me through different fitness discussions.
            It is a fitness and self-development podcast with evidence-based
            advice to help you think critically, train intelligently, and live
            intentionally. <b>#KeepItLegit</b>
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 18 }}>Watch on YouTube | Listen on Spotify</p>
          <div
            style={{
              display: "flex",
              gap: 40,
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <a
              href="https://www.youtube.com/@jahagcaoili"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              style={{
                width: 90,
                height: 64,
                background: "#FF0000",
                borderRadius: 16,
                display: "grid",
                placeItems: "center",
                color: "#fff",
                fontSize: 28,
              }}
            >
              ▶
            </a>
            <a
              href="https://open.spotify.com/show/0EymtldkMts6Tl1zCN7txh"
              target="_blank"
              rel="noreferrer"
              aria-label="Spotify"
              style={{
                width: 64,
                height: 64,
                display: "grid",
                placeItems: "center",
              }}
            >
              <img
                src={spotifyIcon}
                alt="Spotify"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
