import type { ReactNode } from "react";
import logo1 from "../assets/logo_white.png";

const field = "w-full rounded-lg border-0 bg-field p-2.5 text-base text-ink";
const label = "mb-1 block text-[0.8125rem]";

/* ---------- Social icons (inline SVG, no image files needed) ---------- */
const solid = {
  className: "h-5 w-5",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

const line = {
  className: "h-5 w-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const FacebookIcon = (
  <svg {...solid}>
    <path d="M14 8.5V7c0-.7.4-1 1-1h2V3h-2.7C11.6 3 10 4.7 10 7v1.5H8v3h2V21h4v-9.5h2.7l.5-3H14z" />
  </svg>
);

const ThreadsIcon = (
  <svg {...line}>
    <path d="M17.5 10.8C17 7.6 15 6 12.2 6 9 6 7 8.4 7 12s2 6 5.2 6c2.6 0 4.3-1.4 4.3-3.3 0-1.9-1.7-3-4-3-1.5 0-2.6.7-2.6 1.8 0 .9.8 1.5 1.9 1.5 1.7 0 2.6-1.2 2.6-3.3" />
  </svg>
);

const LinkedInIcon = (
  <svg {...solid}>
    <circle cx="6.2" cy="6.2" r="1.9" />
    <rect x="4.5" y="9.2" width="3.4" height="10" />
    <path d="M10.2 9.2h3.2v1.4c.5-.9 1.6-1.6 3.1-1.6 3 0 3.8 1.9 3.8 4.7V19.2h-3.3v-5c0-1.2-.2-2.2-1.6-2.2-1.4 0-1.9 1-1.9 2.3v4.9h-3.3z" />
  </svg>
);

const YouTubeIcon = (
  <svg {...solid}>
    <path
      fillRule="evenodd"
      d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z"
    />
  </svg>
);

const SpotifyIcon = (
  <svg {...line}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M6.8 9.6c3.6-1 7.6-.7 10.6 1.1" />
    <path d="M7.4 12.8c3-.8 6-.5 8.6 1" />
    <path d="M8 15.8c2.3-.6 4.5-.4 6.5.8" />
  </svg>
);

const SOCIALS: {
  label: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/jah.agcaoili.3",
    icon: FacebookIcon,
  },
  // TODO: swap in the Instagram URL/icon when provided.
  {
    label: "Threads",
    href: "https://www.threads.com/@jah.agcaoili",
    icon: ThreadsIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jarrelagcaoili",
    icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@jahagcaoili",
    icon: YouTubeIcon,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/0EymtldkMts6Tl1zCN7txh",
    icon: SpotifyIcon,
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-white">
      <div className="site-wrap py-12">
        <div className="mb-6 flex items-center gap-2.5 text-[1.625rem] font-bold">
          <img src={logo1} alt="" className="h-9 w-auto object-contain" />
          Jah Agcaoili
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr_1.3fr]">
          <div className="flex items-start gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-[34px] w-[34px] place-items-center rounded-full bg-brand text-white hover:brightness-90"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <ul className="m-0 list-none p-0 text-sm leading-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/programs">Programs</a>
              <ul className="m-0 list-none p-0 pl-5">
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
              <a href="/booking">Book a Session</a>
            </li>
          </ul>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className={label}>
              Name
              <input className={field} name="name" />
            </label>
            <label className={label}>
              Email Address
              <input className={field} type="email" name="email" />
            </label>
            <label className={label}>
              Message
              <textarea className={`${field} h-[90px]`} name="message" />
            </label>
            <div className="mt-2 text-right">
              <button className="rounded-[10px] bg-brand px-3.5 py-2 text-xs font-semibold text-white hover:brightness-90">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-brand py-2 text-center text-[0.6875rem] tracking-[0.3em]">
        Jah Agcaoili Copyright © 2026
      </div>
    </footer>
  );
}
