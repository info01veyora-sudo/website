import Link from "next/link";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav
      className="sticky top-4 z-50 mx-auto max-w-[1320px] px-6"
      aria-label="Main navigation"
    >
      <div className="rounded-2xl bg-white px-6 py-3 shadow-sm border border-white/60">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Veyora Digital Studio home"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 4L16 12L24 4M8 28L16 20L24 28"
                stroke="#101828"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 12V20"
                stroke="#356AE6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <div>
              <div className="text-sm font-bold font-heading tracking-tight text-primary">
                Veyora
              </div>
              <div className="text-[10px] uppercase tracking-wider text-supporting">
                Digital Studio
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 text-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="mailto:info01veyora@gmail.com"
            className="hidden md:flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Get in Touch &rarr;
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full border border-border text-primary hover:bg-border focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
