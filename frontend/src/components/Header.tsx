import logo from "../assets/logo.png";

const links: [string, string][] = [
  ["Home", "/"],
  ["Programs", "/programs"],
  ["Beyond", "/beyond"],
  ["About", "/about"],
];

export default function Header({ active }: { active: string }) {
  return (
    <header className="site-wrap flex flex-wrap items-center justify-between gap-3 py-5">
      <a
        href="/"
        className="flex items-center gap-2.5 text-[1.375rem] font-bold"
      >
        <img src={logo} alt="" className="h-9 w-auto object-contain" />
        Jah Agcaoili
      </a>
      <nav
        aria-label="Main"
        className="flex flex-wrap items-center gap-3.5 md:gap-7"
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className={`border-b-2 pb-1 text-[0.8125rem] font-medium uppercase tracking-[0.04em] ${
              label === active ? "border-brand" : "border-transparent"
            }`}
          >
            {label}
          </a>
        ))}
        <a
          href="/booking"
          className="rounded-[10px] bg-brand px-4 py-2 text-[0.8125rem] font-semibold tracking-normal text-white normal-case hover:brightness-90"
        >
          Book a Session
        </a>
      </nav>
    </header>
  );
}
