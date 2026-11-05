import Link from "next/link";

// Verified services from the repository.
const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites that help businesses build credibility and attract customers.",
  },
  {
    title: "Business Applications",
    description:
      "Dashboards and custom web applications that simplify everyday business operations.",
  },
  {
    title: "Workflow Automation",
    description:
      "Smart integrations and automated workflows that save time and reduce manual work.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1320px] px-6 py-24 md:py-32"
    >
      <div className="text-center mb-16">
        <p className="mb-3 text-[11px] font-medium font-heading uppercase tracking-wider text-accent">
          Our Services
        </p>
        <h2 className="text-3xl font-heading font-bold leading-[1.2] tracking-tight text-primary md:text-4xl">
          What We Do <span className="text-accent">Best</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted leading-relaxed">
          Comprehensive digital solutions to elevate your business.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4 lg:gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-white/60 bg-white p-8 shadow-sm hover:border-accent/50 transition-all duration-200"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-brand-background mb-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-heading font-semibold leading-[1.4] text-primary">
              {service.title}
            </h3>
            <p className="mb-6 leading-7 text-muted">{service.description}</p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium font-heading text-accent hover:text-accent/90 transition-colors duration-200"
            >
              Learn more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
