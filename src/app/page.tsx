
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive websites that help businesses build credibility and attract customers.",
  },
  {
    number: "02",
    title: "Business Applications",
    description:
      "Dashboards and custom web applications that simplify everyday business operations.",
  },
  {
    number: "03",
    title: "Workflow Automation",
    description:
      "Smart integrations and automated workflows that save time and reduce manual work.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#152337]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          veyora<span className="text-blue-600">.</span>
        </Link>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-[#152337] px-5 py-3 text-sm text-white"
        >
          Let's talk
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Digital solutions studio
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Building digital experiences that move businesses forward.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          We help businesses grow through modern websites, intelligent
          applications and practical automation solutions.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-7 py-4 font-medium text-white"
          >
            Start a project →
          </a>
          <a
            href="#services"
            className="rounded-full border border-slate-300 px-7 py-4 font-medium"
          >
            Explore services
          </a>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Solutions designed around your business.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-slate-200 p-8"
              >
                <p className="text-sm text-blue-600">{service.number}</p>
                <h3 className="mt-8 text-xl font-bold">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Our approach
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold">
          Technology should make running a business easier.
        </h2>
        <p className="mt-6 max-w-2xl leading-8 text-slate-600">
          We focus on understanding business needs before building
          technology. Our goal is to create useful, reliable and
          easy-to-use digital solutions.
        </p>
      </section>

      <section
        id="contact"
        className="bg-[#152337] px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-widest text-blue-300">
            Have a project in mind?
          </p>
          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Let's build something meaningful.
          </h2>
          <p className="mt-6 text-slate-300">
            Tell us about your business and what you want to improve.
          </p>
          <a
            href="mailto:info01veyora@gmail.com"
            className="mt-9 inline-block rounded-full bg-white px-7 py-4 font-semibold text-[#152337]"
          >
            Contact Veyora →
          </a>
        </div>
      </section>

      <footer className="bg-[#101c2c] px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Veyora Digital Studio. All rights reserved.
      </footer>
    </main>
  );
}
