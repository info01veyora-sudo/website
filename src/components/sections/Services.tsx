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

const serviceIcons: Record<string, string> = {
  "Website Development":
    '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />',
  "Business Applications":
    '<path d="M3 3h18v18H3zM5 5h14v14H5z" />',
  "Workflow Automation":
    '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8zM12 10l4 4M12 10l-4 4" />',
};

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1320px] px-6 py-24 md:py-32 bg-background"
    >
      <div className="text-center mb-16">
        <p className="mb-3 text-[11px] font-medium font-heading uppercase tracking-wider text-accent-text relative">
          Our Services
          <span className="absolute -inset-px h-[2px] bg-gradient-to-r from-accent via-accent/80 to-[#6E8CFF] rounded-full -z-10" aria-hidden="true" />
        </p>
        <h2 className="mb-6 text-3xl font-heading font-bold leading-[1.2] tracking-tight text-foreground md:text-4xl">
          What We Do <span className="text-accent-text">Best</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-body leading-relaxed">
          Comprehensive digital solutions to elevate your business.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="
              rounded-[1.5rem]
              border border-border
              bg-card
              p-8
              shadow-shadow
              hover:-translate-y-1 hover:border-border-hover
              transition-all duration-200
              focus-within:ring-2 focus-within:ring-ring focus-within:outline-none
            "
          >
            <div
              className="
                flex h-12 w-12 items-center justify-center rounded-xl
                border border-border
                bg-card-alt
                mb-6
              "
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="text-foreground">${serviceIcons[service.title]}</svg>`,
              }}
            />
            <h3 className="mb-3 text-xl font-heading font-semibold leading-[1.4] text-foreground">
              {service.title}
            </h3>
            <p className="mb-6 leading-7 text-body">{service.description}</p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium font-heading text-accent-text hover:text-accent-hover transition-colors duration-200"
            >
              Learn more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
