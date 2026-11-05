export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1320px] px-6 py-24 md:py-32"
    >
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-[11px] font-medium font-heading uppercase tracking-wider text-accent">
            Our Approach
          </p>
          <h2 className="mb-6 max-w-[48ch] text-3xl font-heading font-bold leading-[1.2] tracking-tight text-primary md:text-4xl">
            Technology should make running a business easier.
          </h2>
          <p className="mb-6 leading-7 text-muted">
            We focus on understanding business needs before building
            technology. Our goal is to create useful, reliable and
            easy-to-use digital solutions.
          </p>
          <p className="leading-7 text-muted">
            Every project starts with a conversation about what you want to
            achieve. We then design and build the right solution for your
            business — whether that is a website, a custom application, or an
            automated workflow.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="rounded-3xl border border-white/60 bg-white p-12 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium font-heading uppercase tracking-wider text-muted">
                  Websites
                </span>
                <span className="text-lg font-medium text-primary">
                  Responsive &amp; credible
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium font-heading uppercase tracking-wider text-muted">
                  Applications
                </span>
                <span className="text-lg font-medium text-primary">
                  Dashboards &amp; web apps
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium font-heading uppercase tracking-wider text-muted">
                  Automation
                </span>
                <span className="text-lg font-medium text-primary">
                  Smart integrations
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium font-heading uppercase tracking-wider text-muted">
                  Approach
                </span>
                <span className="text-lg font-medium text-primary">
                  Needs-first design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
