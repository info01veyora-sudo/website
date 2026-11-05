import Link from "next/link";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-[1320px] px-6 py-24 md:py-32"
    >
      <div className="flex flex-col items-center justify-between mb-16 md:flex-row md:items-center">
        <div className="text-center mb-8 md:mb-0 md:text-left md:order-2 lg:order-1">
          <p className="mb-3 text-[11px] font-medium font-heading uppercase tracking-wider text-accent">
            Our Portfolio
          </p>
          <h2 className="text-3xl font-heading font-bold leading-[1.2] tracking-tight text-primary md:text-4xl">
            Our Recent <span className="text-accent">Work</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg text-muted leading-relaxed">
            Explore some of our latest projects and creative solutions.
          </p>
        </div>

        <Link
          href="#contact"
          className="md:order-1 lg:order-2 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-6 py-3 text-xs font-medium font-heading text-primary hover:bg-brand-background transition-colors duration-200"
        >
          View All Projects &rarr;
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {/* Project cards render here once real project data/images are available.
             The mockup references Moodly, Street Racer, and Lumina, but none of
             these projects exist in the repository. Real project data and images
             must be provided before this section can be populated. */}
        <div className="col-span-3 flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted">
            No projects available. Please add verified project data and images to
            populate this section.
          </p>
        </div>
      </div>
    </section>
  );
}
