import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-[1320px] px-6 py-20 md:py-36 overflow-hidden"
    >
      {/* Soft curved blue background shapes */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[-10%] right-[-15%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-20%] left-[20%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="lg:pr-8">
          <div className="flex items-center gap-2 mb-8">
            <span
              className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20"
              aria-hidden="true"
            >
              <span className="text-[10px] text-accent">•</span>
            </span>
            <p className="relative z-10 text-[11px] font-medium font-heading uppercase tracking-wider text-muted">
              Digital Studio
            </p>
          </div>

          <h1
            className="mb-6 relative z-10 text-4xl font-heading font-bold leading-[1.15] tracking-tight text-primary md:text-5xl lg:text-6xl"
          >
            Building Digital Experiences{" "}
            <span className="text-accent">That Last</span>
          </h1>

          <p className="mb-8 max-w-md text-lg leading-relaxed text-muted relative z-10">
            We design, develop and innovate digital solutions that help your
            business grow in the modern world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="mailto:info01veyora@gmail.com"
              className="relative z-10 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Contact Us &rarr;
            </Link>
            <Link
              href="#services"
              className="relative z-10 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-primary transition-colors duration-200 hover:bg-brand-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        <div className="relative flex items-end justify-center">
          {/* Laptop mockup (CSS-based) */}
          <div className="relative z-10">
            <div
              className="relative w-[320px] h-[200px] bg-gradient-to-b from-[#0B1220] to-[#101828] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            >
              {/* Screen content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    fill="none"
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
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold font-heading uppercase tracking-wider text-accent">
                    Veyora
                  </div>
                  <div className="text-[10px] text-muted">
                    DIGITAL STUDIO
                  </div>
                </div>
              </div>
              {/* Screen glare */}
              <div
                className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/20 to-transparent"
                aria-hidden="true"
              />
            </div>
            {/* Base */}
            <div
              className="mt-2 flex w-[260px] h-8 items-end justify-center gap-1 rounded-t-lg bg-[#0B1220] px-4"
              aria-hidden="true"
            >
              <div className="flex w-full h-1 gap-1 px-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                  <div
                    key={i}
                    className="h-1 w-1 rounded-full bg-[#1F2937]"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating "Innovate / Create / Grow" card */}
          <div
            className="absolute -right-6 -bottom-6 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl border border-white/50"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
                aria-hidden="true"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <div className="text-xs font-medium font-heading text-primary">
                Innovate
              </div>
            </div>
            <div className="mt-1 flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
                aria-hidden="true"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <div className="text-xs font-medium font-heading text-primary">
                Create
              </div>
            </div>
            <div className="mt-1 flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
                aria-hidden="true"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <div className="text-xs font-medium font-heading text-primary">
                Grow
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft curved wave at bottom edge */}
      <svg
        className="relative z-0 w-full h-32 md:h-48"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 192C144 224 288 256 432 256S720 224 864 224S1008 256 1152 256S1296 256 1440 224L1440 320L0 320Z"
          fill="white"
        />
      </svg>
    </section>
  );
}
