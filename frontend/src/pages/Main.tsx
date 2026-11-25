import bodyTransformationImg from "../assets/bodyTransformation1.png";
import meetImg from "../assets/meet.jpg";
import performanceImg from "../assets/performance.jpg";
import speakingImg from "../assets/speaking.jpg";
import spotifyIcon from "../assets/spotify.png";
import trainerCourseImg from "../assets/trainerCourse.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

/* ---------- Assets ---------- */
const IMG = {
  hero: bodyTransformationImg,
  bodyTransformation: bodyTransformationImg,
  trainerCourse: trainerCourseImg,
  performance: performanceImg,
  coach: meetImg,
  speaking: speakingImg,
};

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
      <Header active="Home" />

      {/* Hero */}
      <section className="relative flex min-h-[480px] items-center overflow-hidden md:min-h-[600px]">
        {/* Coach photo */}
        <img
          className="absolute bottom-0 right-[-10%] z-[1] h-full w-auto max-w-full object-contain object-bottom opacity-30 md:right-[max(2%,calc((100vw-1100px)/2))] md:max-w-[55%] md:opacity-100"
          src={IMG.hero}
          alt="Coach Jah"
        />

        {/* Text on top */}
        <div className="site-wrap relative z-[2]">
          <h1 className="mb-4 text-[clamp(3rem,8vw,5.25rem)] font-semibold leading-[1.05]">
            Relax,
            <br />
            I got you
            <br />
            covered
          </h1>
          <p className="max-w-[380px] text-[0.9375rem] leading-[1.5]">
            Evidence-based fitness coaching that fits into your personal rhythm,
            offering gentle guidance that makes progress feel grounded and
            doable.
          </p>
          <Link
            className="inline-block rounded-[10px] bg-brand px-[22px] py-3 text-base font-semibold text-white hover:brightness-90"
            to="/booking"
          >
            Book a session
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="site-wrap mt-[60px]">
        <h2 className="mb-8 text-center text-[1.75rem] font-semibold">
          Program Courses
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title}>
              <img
                src={p.img}
                alt=""
                className="aspect-[1/1.1] w-full rounded-[24px] bg-[#9fd6de] object-cover"
              />
              <h3 className="mb-1.5 mt-4 text-[1.125rem] font-semibold">
                {p.title}
              </h3>
              <p className="min-h-[42px] text-sm text-muted">{p.text}</p>
              <Link
                className="mt-2 inline-block rounded-[10px] bg-brand px-[22px] py-3 text-base font-semibold text-white hover:brightness-90"
                to={p.href}
              >
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Coach */}
      <section className="site-wrap mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <img
          src={IMG.coach}
          alt="Jah Agcaoili"
          className="aspect-square w-full rounded-[24px] bg-[#ddd] object-cover"
        />
        <div>
          <h2 className="text-[1.75rem] font-semibold">Meet your Coach</h2>
          <p className="text-[0.9375rem] leading-[1.6]">
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
      <section className="site-wrap mt-[60px] flex flex-wrap justify-center">
        {["Trainer", "Lecturer", "50+ programs created", "Podcast host"].map(
          (s) => (
            <div
              key={s}
              className="border-l-0 px-4 py-1.5 text-xl first:border-l-0 md:border-l-2 md:px-10 md:first:border-l-0"
            >
              {s}
            </div>
          ),
        )}
      </section>

      {/* Speaking */}
      <section className="site-wrap mt-20">
        <h2 className="mb-8 text-center text-[1.75rem] font-semibold">
          Think Differently about Fitness
        </h2>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-[1.625rem] font-semibold">
              Speaking &amp; Workshop Engagements
            </h3>
            <p className="text-sm leading-[1.6]">
              Don't just give your audience more information.
              <br />
              <b>Give them better ways to think.</b>
            </p>
            <p className="text-sm leading-[1.6]">
              I speak and conduct workshops on Exercise Science, fitness, sports
              performance, coaching, and evidence-based practice, with a focus
              on turning research into practical decisions. Share your event
              details, audience, and what you're looking for. We'll take it from
              there.
            </p>
            <Link
              className="mt-4 inline-block rounded-[10px] bg-brand px-[22px] py-3 text-base font-semibold text-white hover:brightness-90"
              to="/beyond"
            >
              Schedule now
            </Link>
          </div>
          <img
            src={IMG.speaking}
            alt="Coach Jah speaking at an event"
            className="aspect-[16/10] w-full rounded-lg bg-[#ddd] object-cover"
          />
        </div>
      </section>

      {/* Podcast */}
      <section className="site-wrap mt-20 grid grid-cols-1 items-center gap-12 border-t border-[#ccc] pt-12 md:grid-cols-2">
        <div>
          <h2 className="text-[1.625rem] font-semibold">
            Keep it Legit with Jah
          </h2>
          <p className="text-sm leading-[1.6]">
            Click, subscribe, and join me through different fitness discussions.
            It is a fitness and self-development podcast with evidence-based
            advice to help you think critically, train intelligently, and live
            intentionally. <b>#KeepItLegit</b>
          </p>
        </div>
        <div className="text-center">
          <p className="text-lg">Watch on YouTube | Listen on Spotify</p>
          <div className="mt-4 flex justify-center gap-10">
            <a
              href="https://www.youtube.com/@jahagcaoili"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid h-16 w-[90px] place-items-center rounded-2xl bg-[#FF0000] text-[1.75rem] text-white"
            >
              ▶
            </a>
            <a
              href="https://open.spotify.com/show/0EymtldkMts6Tl1zCN7txh"
              target="_blank"
              rel="noreferrer"
              aria-label="Spotify"
              className="h-16 w-16"
            >
              <img
                src={spotifyIcon}
                alt="Spotify"
                className="h-full w-full object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
