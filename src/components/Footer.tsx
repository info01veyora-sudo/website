import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-footer pt-16 pb-8">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Soft blue glow behind footer content */}
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-glow blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 grid gap-12 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 mb-4"
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
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                />
                <path
                  d="M16 12V20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-accent-text"
                />
              </svg>
              <div>
                <div className="text-sm font-bold font-heading tracking-tight text-foreground">
                  Veyora
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted">
                  Digital Studio
                </div>
              </div>
            </Link>
            <p className="text-sm leading-7 text-body">
              Crafting digital experiences for a smarter tomorrow.
            </p>
          </div>

          {/* Column 2: Navigate links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold font-heading uppercase tracking-wider text-muted">
              Navigate
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-body hover:text-accent-text transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm text-body hover:text-accent-text transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-body hover:text-accent-text transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-body hover:text-accent-text transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h3 className="mb-4 text-xs font-semibold font-heading uppercase tracking-wider text-muted">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-body">
                <span aria-hidden="true">&#9993;</span>
                info01veyora@gmail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-body">
                <span aria-hidden="true">&#128205;</span>
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-body">
          <p>
            &copy; 2026 Veyora Digital Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
