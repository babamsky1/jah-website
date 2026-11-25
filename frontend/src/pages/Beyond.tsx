import crowdImg from "../assets/crowd.jpg";
import workshopImg from "../assets/workshop.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

/* ---------- Links ---------- */
const CONTACT = "mailto:REPLACE_ME@example.com";

const tones = {
  brand: { bg: "bg-brand", text: "text-brand" },
  gold: { bg: "bg-gold", text: "text-gold" },
  danger: { bg: "bg-danger", text: "text-danger" },
  deep: { bg: "bg-brand-deep", text: "text-brand-deep" },
  mid: { bg: "bg-brand-mid", text: "text-brand-mid" },
} as const;
type Tone = keyof typeof tones;

const small = "text-sm leading-[1.6] text-ink";

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

/* ---------- SVG icons ---------- */
function CheckCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21.5 12a9.5 9.5 0 1 1-4.2-7.9" />
      <path d="M8 11.5l4 4 9-9.5" />
    </svg>
  );
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`mx-auto h-8 w-8 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v12H9l-5 4V4z" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`mx-auto h-8 w-8 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function GridIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`mx-auto h-8 w-8 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

/* ---------- Reusable package card ---------- */
function Package(props: {
  name: string;
  price: string;
  unit?: string;
  blurb: string;
  tone: Tone;
}) {
  return (
    <div className={`${tones[props.tone].bg} rounded-2xl p-[22px] text-white`}>
      <div className="text-[0.9375rem]">{props.name}</div>
      <div className="my-1.5 text-[2.25rem] font-bold">
        {props.price}
        {props.unit && (
          <span className="text-sm font-normal"> {props.unit}</span>
        )}
      </div>
      <p className="min-h-[54px] text-xs leading-[1.5]">{props.blurb}</p>
      <a
        className="mt-3 block w-full rounded-[10px] bg-ink px-[22px] py-2.5 text-center text-base font-semibold text-white hover:brightness-90"
        href={CONTACT}
      >
        Book your session
      </a>
    </div>
  );
}

function Included({
  items,
  tone,
  title = "What's included",
}: {
  items: string[];
  tone: Tone;
  title?: string;
}) {
  return (
    <>
      <h4 className="mb-3 font-semibold">{title}</h4>
      <ul className="m-0 flex list-none flex-col gap-3 p-0 text-sm leading-[1.4]">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className={`${tones[tone].text} mt-px`} />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ---------- Page ---------- */
export default function Beyond() {
  return (
    <>
      <Header active="Beyond" />

      {/* Hero */}
      <section className="site-wrap grid grid-cols-1 items-center gap-12 overflow-hidden pt-5 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-[clamp(2.375rem,6vw,3.75rem)] font-semibold leading-[1.05]">
            Speaking &amp; Workshop Engagements
          </h1>
          <p className="max-w-[340px] text-base">
            Don't just give your audience more information. Give them better
            ways to think.
          </p>
        </div>
        <img
          src={crowdImg}
          alt="Coach Jah speaking"
          className="hidden max-h-[420px] w-full object-contain md:block"
        />
      </section>

      {/* The Real Score */}
      <section className="site-wrap mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="text-[0.9375rem] leading-[1.7]">
          <h2 className="text-[1.625rem] font-semibold">The Real Score</h2>
          <p className="mb-4">
            I deliver talks, webinars, workshops, and guest sessions on{" "}
            <b>
              Exercise Science, fitness, sports performance, nutrition, and
              coaching.
            </b>
          </p>
          <p className="mb-4">
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
          src={crowdImg}
          alt="Speaking event audience"
          className="aspect-[4/3] w-full rounded-[20px] bg-[#ddd] object-cover"
        />
      </section>

      {/* Expertise */}
      <section className="site-wrap mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <img
          src={workshopImg}
          alt="Workshop session"
          className="aspect-[4/3] w-full rounded-lg bg-[#ddd] object-cover"
        />
        <div className={small}>
          <h2 className="text-[1.5rem] font-semibold">My Areas of Expertise</h2>
          <p className="mb-4">I can speak or facilitate sessions on:</p>
          <ul className="mb-4 list-disc pl-5">
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
      <section className="site-wrap mt-[72px]">
        <h2 className="text-center text-2xl font-semibold">
          Engagement Packages
        </h2>
        <h3 className="my-6 text-center text-[1.75rem] font-normal">
          Onsite Engagements
        </h3>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          <div>
            <Package
              tone="brand"
              name="Conference Resource Speaker/ Facilitator"
              price="P 15,000.00"
              unit="/topic"
              blurb="For conferences, seminars, conventions, and educational events looking for an invited resource speaker or facilitator."
            />
            <div className="mt-5">
              <Included
                tone="brand"
                items={[
                  "Topic presentation",
                  "Q&A",
                  "Interactive audience engagement",
                  "Participant handout",
                ]}
              />
              <p className={`${small} mt-4`}>
                Onsite rate, exclusive of transportation allowance and food.
              </p>
              <p className={`${small} mt-4`}>
                For engagements outside Metro Manila, lodging is exclusive and
                should be arranged or added to the engagement cost.
              </p>
            </div>
          </div>

          <div>
            <Package
              tone="gold"
              name="Exclusive Workshop Facilitation"
              price="P 18,000.00"
              unit="/day"
              blurb="For organizations that want a more focused and interactive learning experience built around their specific needs."
            />
            <div className="mt-5">
              <Included
                tone="gold"
                items={[
                  "Maximum of 3 topics/sessions per day",
                  "Interactive workshop format",
                  "Practical application and activities",
                  "Can be customized according to the organization's objectives and audience",
                ]}
              />
              <p className={`${small} mt-4`}>
                Exclusive of transportation, food, and lodging allowance.
              </p>
              <p className={`${small} mt-4`}>
                This format works well for schools, sports organizations,
                fitness businesses, professional groups, and organizations
                looking for a deeper learning experience beyond a traditional
                lecture.
              </p>
            </div>
          </div>

          <div>
            <Package
              tone="danger"
              name="Guest Appearance"
              price="P 12,000.00"
              blurb="For podcasts, media appearances, online shows, organizational programs, and other guesting opportunities."
            />
            <div className="mt-5">
              <p className={`${small} mb-4`}>
                For Metro Manila engagements, the rate is inclusive of
                transportation and food allowance.
              </p>
              <p className={small}>
                For engagements outside Metro Manila, lodging allowance should
                be added.
              </p>
            </div>
          </div>
        </div>

        <h3 className="mb-6 mt-16 text-center text-[1.75rem] font-normal">
          Online Engagements
        </h3>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 items-start gap-6 md:grid-cols-2">
          <div>
            <Package
              tone="deep"
              name="Online Webinar"
              price="P 15,000.00"
              unit="/topic"
              blurb="For organizations looking for a focused, evidence based online learning session."
            />
            <div className="mt-5">
              <Included
                tone="deep"
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
              tone="mid"
              name="Online Guesting"
              price="P 9,000.00"
              unit="/appearance"
              blurb="For podcasts, online shows, interviews, and other online guesting opportunities."
            />
            <div className="mt-5">
              <Included
                tone="mid"
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
        <p className={`${small} mx-auto mt-8 max-w-[720px] text-center`}>
          Disclaimer: For online engagements, I primarily accept webinars and
          guest appearances. I personally do not accept multi-activity workshop
          projects in an online format. My preference is to keep online sessions
          focused, structured, and appropriate for the medium.
        </p>
      </section>

      {/* How it works */}
      <section className="site-wrap mt-[72px]">
        <h2 className="mb-8 text-center text-[1.75rem] font-semibold">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <ChatIcon className="mb-3 text-brand" />
            <div className="font-bold text-brand">STEP 1:</div>
            <h4 className="my-1 font-semibold">Tell me what you need</h4>
            <p className={small}>
              Send the details of your event, organization, audience, preferred
              topic, format, date, and objectives.
            </p>
          </div>
          <div>
            <PhoneIcon className="mb-3 text-gold" />
            <div className="font-bold text-gold">STEP 2:</div>
            <h4 className="my-1 font-semibold">Discovery call</h4>
            <p className={`${small} mb-4`}>
              We'll have a short discovery call to identify your goals, audience
              needs, and the problem you want the session to address.
            </p>
            <p className={small}>
              This allows me to determine the most appropriate topic, format,
              and approach for your engagement.
            </p>
          </div>
          <div>
            <GridIcon className="mb-3 text-danger" />
            <div className="font-bold text-danger">STEP 3:</div>
            <h4 className="my-1 font-semibold">Build the session</h4>
            <p className={`${small} mb-4`}>
              Once we've identified what you need, we'll finalize the scope,
              logistics, and deliverables.
            </p>
            <p className={small}>
              The goal is not simply to fill your event with another speaker.
            </p>
            <p className={`${small} font-bold`}>
              It's to make sure the session is relevant to your audience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="site-wrap mt-[72px] grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <h2 className="text-[clamp(2.125rem,5vw,3.25rem)] font-medium leading-[1.1]">
          Looking for a Fitness &amp; Athletic Performance Resource Person?
        </h2>
        <div className="text-[0.9375rem] leading-[1.6]">
          <p className="mb-4">
            Tell me about your event and what you want your audience to learn.
          </p>
          <p className="mb-4">
            <b>Let's build a session that makes Exercise Science practical.</b>
          </p>
          <a
            className="inline-block rounded-[10px] bg-brand px-[22px] py-3 text-base font-semibold text-white hover:brightness-90"
            href={CONTACT}
          >
            Let's Discuss
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
