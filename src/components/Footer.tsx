import Link from "next/link";

const socialLinks = [
  { href: "#", label: "Twitter", ariaLabel: "Twitter" },
  { href: "#", label: "LinkedIn", ariaLabel: "LinkedIn" },
  { href: "#", label: "Instagram", ariaLabel: "Instagram" },
  { href: "#", label: "YouTube", ariaLabel: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-[#0B1220] py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4"
              aria-label="Veyora Digital Studio home"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8 4L16 12L24 4M8 28L16 20L24 28"
                  stroke="#356AE6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 12V20"
                  stroke="#356AE6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <div className="text-sm font-bold font-heading tracking-tight text-white">
                  Veyora
                </div>
                <div className="text-[10px] uppercase tracking-wider text-supporting">
                  Digital Studio
                </div>
              </div>
            </Link>
            <p className="text-sm leading-7 text-supporting">
              Crafting digital experiences for a smarter tomorrow.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold font-heading uppercase tracking-wider text-muted">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-supporting hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-supporting hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-supporting hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-supporting hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold font-heading uppercase tracking-wider text-muted">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-supporting">
                <span aria-hidden="true">&#9993;</span>
                info01veyora@gmail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-supporting">
                <span aria-hidden="true">&#128205;</span>
                Kathmandu, Nepal
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold font-heading uppercase tracking-wider text-muted">
              Follow
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-supporting hover:text-white hover:border-white/30 transition-colors duration-200"
                  aria-label={link.ariaLabel}
                >
                  <span aria-hidden="true">
                    {link.label === "Twitter"
                      ? "&#x1F426;"
                      : link.label === "LinkedIn"
                        ? "&#x1F4DC;"
                        : link.label === "Instagram"
                          ? "&#x1F4F2;"
                          : "&#x1F4FA;"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-supporting">
          <p>
            &copy; 2026 Veyora Digital Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true">&#10084;&#65039;</span>
            <span>Built with</span>
            <span className="text-white">by Veyora</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
