import React from "react";

/* ---------- Theme ---------- */
const C = {
  teal: "#1FB6C9",
  gold: "#D9A441",
  red: "#EF3E2D",
  deepTeal: "#1D4B52",
  midTeal: "#2A7A78",
  dark: "#111111",
  text: "#111111",
  mute: "#555555",
  field: "#D9D9D9",
};

/* ---------- Replace with your real assets ---------- */
const IMG = {
  logo: "/images/logo.svg",
  hero: "/images/speaking-hero.png",
  crowd: "/images/crowd.jpg",
  workshop: "/images/workshop.jpg",
};
const CONTACT = "mailto:REPLACE_ME@example.com";

const CSS = `
*{box-sizing:border-box}
body{margin:0;font-family:'Inter',system-ui,sans-serif;color:${C.text}}
a{color:inherit;text-decoration:none}
.wrap{max-width:1100px;margin:0 auto;padding:0 24px}
.btn{display:inline-block;background:${C.teal};color:#fff;font-weight:600;border:0;border-radius:10px;padding:12px 22px;cursor:pointer;font-size:16px}
.btn:hover{filter:brightness(.92)}
.btn.dark{background:#111;width:100%;text-align:center;padding:10px}
.btn:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid ${C.teal};outline-offset:2px}
.nav{display:flex;gap:28px;align-items:center}
.nav a{font-size:13px;font-weight:500;letter-spacing:.04em;text-transform:uppercase;padding-bottom:4px;border-bottom:2px solid transparent}
.nav a.on{border-color:${C.teal}}
.split{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;text-align:center}
.foot{display:grid;grid-template-columns:1fr 1fr 1.3fr;gap:32px}
@media(max-width:800px){.split,.grid3,.grid2,.steps,.foot{grid-template-columns:1fr}.nav{gap:14px;flex-wrap:wrap}.hero-img{display:none}}
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

/* ---------- Data ---------- */
const EXPERTISE = [
  "Strength Training & Practical Application",
  "Muscle Development, Longevity & Health",
  "Real-World Nutrition Strategies",
  "Physical Conditioning",
  "Periodization & Evidence-Based Program Design",
  "Fitness & Lifestyle Management for the General Population",
  "Entrepreneurship in the Fitness & Sports Profession",
  "Coaching Competency",
  "Corporate Fitness",
];

/* ---------- Reusable package card ---------- */
function Package(props: {
  name: string;
  price: string;
  unit?: string;
  blurb: string;
  bg: string;
}) {
  return (
    <div
      style={{
        background: props.bg,
        color: "#fff",
        borderRadius: 16,
        padding: 22,
      }}
    >
      <div style={{ fontSize: 15 }}>{props.name}</div>
      <div style={{ fontSize: 36, fontWeight: 700, margin: "6px 0" }}>
        {props.price}
        {props.unit && (
          <span style={{ fontSize: 14, fontWeight: 400 }}> {props.unit}</span>
        )}
      </div>
      <p style={{ fontSize: 12, lineHeight: 1.5, minHeight: 54 }}>
        {props.blurb}
      </p>
      <a className="btn dark" href={CONTACT}>
        Book your session
      </a>
    </div>
  );
}

function Included({
  items,
  color,
  title = "What's included",
}: {
  items: string[];
  color: string;
  title?: string;
}) {
  return (
    <>
      <h4 style={{ margin: "0 0 8px" }}>{title}</h4>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: 14,
          lineHeight: 1.9,
        }}
      >
        {items.map((i) => (
          <li key={i}>
            <span style={{ color, fontWeight: 700, marginRight: 10 }}>✓</span>
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

/* ---------- Page ---------- */
export default function Beyond() {
  const small: React.CSSProperties = {
    fontSize: 14,
    lineHeight: 1.6,
    color: C.text,
  };
  return (
    <>
      <style>{CSS}</style>
      <Header active="Beyond" />

      {/* Hero */}
      <section
        className="wrap split"
        style={{ paddingTop: 20, overflow: "hidden" }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(38px,6vw,60px)",
              lineHeight: 1.05,
              fontWeight: 600,
              margin: "0 0 16px",
            }}
          >
            Speaking &amp; Workshop Engagements
          </h1>
          <p style={{ fontSize: 16, maxWidth: 340 }}>
            Don't just give your audience more information. Give them better
            ways to think.
          </p>
        </div>
        <img
          className="hero-img"
          src={IMG.hero}
          alt="Coach Jah speaking"
          style={{
            width: "100%",
            maxHeight: 420,
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </section>

      {/* The Real Score */}
      <section className="wrap split" style={{ marginTop: 56 }}>
        <div style={{ ...small, fontSize: 15, lineHeight: 1.7 }}>
          <h2 style={{ fontSize: 26, fontWeight: 600 }}>The Real Score</h2>
          <p>
            I deliver talks, webinars, workshops, and guest sessions on{" "}
            <b>
              Exercise Science, fitness, sports performance, nutrition, and
              coaching.
            </b>
          </p>
          <p>
            My approach is simple: take evidence-based concepts and translate
            them into{" "}
            <b>
              practical knowledge, better decisions, and real-world application.
            </b>
          </p>
          <p>
            Whether you're organizing a conference, planning an exclusive
            workshop, or looking for a resource person for your organization, we
            can build the session around what your audience actually needs.
          </p>
        </div>
        <img
          src={IMG.crowd}
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

      {/* Expertise */}
      <section className="wrap split" style={{ marginTop: 56 }}>
        <img
          src={IMG.workshop}
          alt=""
          style={{
            width: "100%",
            borderRadius: 8,
            background: "#ddd",
            aspectRatio: "4/3",
            objectFit: "cover",
          }}
        />
        <div style={small}>
          <h2 style={{ fontSize: 24, fontWeight: 600 }}>
            My Areas of Expertise
          </h2>
          <p>I can speak or facilitate sessions on:</p>
          <ul style={{ paddingLeft: 20 }}>
            {EXPERTISE.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          <p>
            Topics can be delivered as a{" "}
            <b>
              lecture, webinar, interactive session, workshop, or customized
              engagement
            </b>
            , depending on your objectives and audience.
          </p>
        </div>
      </section>

      {/* Engagement packages */}
      <section className="wrap" style={{ marginTop: 72 }}>
        <h2 style={{ textAlign: "center", fontSize: 24, fontWeight: 600 }}>
          Engagement Packages
        </h2>
        <h3
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 400,
            margin: "24px 0",
          }}
        >
          Onsite Engagements
        </h3>

        <div className="grid3">
          <div>
            <Package
              bg={C.teal}
              name="Conference Resource Speaker/ Facilitator"
              price="P 15,000.00"
              unit="/topic"
              blurb="For conferences, seminars, conventions, and educational events looking for an invited resource speaker or facilitator."
            />
            <div style={{ marginTop: 20 }}>
              <Included
                color={C.teal}
                items={[
                  "Topic presentation",
                  "Q&A",
                  "Interactive audience engagement",
                  "Participant handout",
                ]}
              />
              <p style={small}>
                Onsite rate, exclusive of transportation allowance and food.
              </p>
              <p style={small}>
                For engagements outside Metro Manila, lodging is exclusive and
                should be arranged or added to the engagement cost.
              </p>
            </div>
          </div>

          <div>
            <Package
              bg={C.gold}
              name="Exclusive Workshop Facilitation"
              price="P 18,000.00"
              unit="/day"
              blurb="For organizations that want a more focused and interactive learning experience built around their specific needs."
            />
            <div style={{ marginTop: 20 }}>
              <Included
                color={C.gold}
                items={[
                  "Maximum of 3 topics/sessions per day",
                  "Interactive workshop format",
                  "Practical application and activities",
                  "Can be customized according to the organization's objectives and audience",
                ]}
              />
              <p style={small}>
                Exclusive of transportation, food, and lodging allowance.
              </p>
              <p style={small}>
                This format works well for schools, sports organizations,
                fitness businesses, professional groups, and organizations
                looking for a deeper learning experience beyond a traditional
                lecture.
              </p>
            </div>
          </div>

          <div>
            <Package
              bg={C.red}
              name="Guest Appearance"
              price="P 12,000.00"
              blurb="For podcasts, media appearances, online shows, organizational programs, and other guesting opportunities."
            />
            <div style={{ marginTop: 20 }}>
              <p style={small}>
                For Metro Manila engagements, the rate is inclusive of
                transportation and food allowance.
              </p>
              <p style={small}>
                For engagements outside Metro Manila, lodging allowance should
                be added.
              </p>
            </div>
          </div>
        </div>

        <h3
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 400,
            margin: "64px 0 24px",
          }}
        >
          Online Engagements
        </h3>
        <div className="grid2" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div>
            <Package
              bg={C.deepTeal}
              name="Online Webinar"
              price="P 15,000.00"
              unit="/topic"
              blurb="For organizations looking for a focused, evidence based online learning session."
            />
            <div style={{ marginTop: 20 }}>
              <Included
                color={C.deepTeal}
                items={[
                  "Topic presentation",
                  "Q&A",
                  "Interactive audience engagement",
                  "Participant handout",
                ]}
              />
            </div>
          </div>
          <div>
            <Package
              bg={C.midTeal}
              name="Online Guesting"
              price="P 9,000.00"
              unit="/appearance"
              blurb="For podcasts, online shows, interviews, and other online guesting opportunities."
            />
            <div style={{ marginTop: 20 }}>
              <Included
                color={C.midTeal}
                title="This is for"
                items={[
                  "Podcasts",
                  "Online shows",
                  "Interviews",
                  "Organizational programs",
                  "Other online guesting opportunities",
                ]}
              />
            </div>
          </div>
        </div>
        <p
          style={{
            ...small,
            maxWidth: 720,
            margin: "32px auto 0",
            textAlign: "center",
          }}
        >
          Disclaimer: For online engagements, I primarily accept webinars and
          guest appearances. I personally do not accept multi-activity workshop
          projects in an online format. My preference is to keep online sessions
          focused, structured, and appropriate for the medium.
        </p>
      </section>

      {/* How it works */}
      <section className="wrap" style={{ marginTop: 72 }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          How It Works
        </h2>
        <div className="steps">
          <div>
            <div style={{ color: C.teal, fontWeight: 700 }}>STEP 1:</div>
            <h4 style={{ margin: "4px 0" }}>Tell me what you need</h4>
            <p style={small}>
              Send the details of your event, organization, audience, preferred
              topic, format, date, and objectives.
            </p>
          </div>
          <div>
            <div style={{ color: C.gold, fontWeight: 700 }}>STEP 2:</div>
            <h4 style={{ margin: "4px 0" }}>Discovery call</h4>
            <p style={small}>
              We'll have a short discovery call to identify your goals, audience
              needs, and the problem you want the session to address.
            </p>
            <p style={small}>
              This allows me to determine the most appropriate topic, format,
              and approach for your engagement.
            </p>
          </div>
          <div>
            <div style={{ color: C.red, fontWeight: 700 }}>STEP 3:</div>
            <h4 style={{ margin: "4px 0" }}>Build the session</h4>
            <p style={small}>
              Once we've identified what you need, we'll finalize the scope,
              logistics, and deliverables.
            </p>
            <p style={small}>
              The goal is not simply to fill your event with another speaker.
            </p>
            <p style={{ ...small, fontWeight: 700 }}>
              It's to make sure the session is relevant to your audience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap split" style={{ marginTop: 72 }}>
        <h2
          style={{
            fontSize: "clamp(34px,5vw,52px)",
            fontWeight: 500,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Looking for a Fitness &amp; Athletic Performance Resource Person?
        </h2>
        <div style={{ fontSize: 15, lineHeight: 1.6 }}>
          <p>
            Tell me about your event and what you want your audience to learn.
          </p>
          <p>
            <b>Let's build a session that makes Exercise Science practical.</b>
          </p>
          <a className="btn" href={CONTACT}>
            Let's Discuss
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
