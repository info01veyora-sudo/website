import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Veyora Digital Studio",
  description:
    "We design, develop and innovate digital solutions that help your business grow in the modern world.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="home">
          <div className="orb o1"></div><div className="orb o2"></div>
          <div className="wrap hg">
            <div>
              <h1>Building Digital Experiences <span className="u grad">That Last<svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true"><path d="M3 9c40-8 100-9 194-3" fill="none" stroke="#2F5BFF" strokeWidth="3.5" strokeLinecap="round" opacity=".35"/></svg></span></h1>
              <p className="lead">We design, develop and innovate digital solutions that help your business grow in the modern world.</p>
              <div className="cta">
                <a className="btn btn-p" href="#contact">Contact Us</a>
                <a className="btn btn-o" href="#services">Our Services</a>
              </div>
              <div className="tags"><span>Design</span><span>Develop</span><span>Innovate</span></div>
            </div>
            <div className="stage" aria-hidden="true">
              <div className="lap">
                <div className="scr"><div className="bar"><i></i><i></i><i></i></div><div className="c"><div><svg viewBox="0 0 60 48"><use href="#v"/></svg><b>Veyora</b><small>DIGITAL STUDIO</small></div></div><div className="ln"></div></div>
                <div className="base"></div>
              </div>
              <div className="chip c1"><span className="i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg></span><div><b>Innovate</b><span>Create · Grow</span></div></div>
              <div className="chip c2"><span className="i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg></span><div><b>Built to last</b><span>Clean, scalable code</span></div></div>
            </div>
          </div>
        </section>

        <section className="sec" id="services">
          <div className="wrap">
            <div className="hd"><span className="lab">Our Services</span><h2>What We Do <span className="grad">Best</span></h2><p>Comprehensive digital solutions to elevate your business.</p></div>
            <div className="g4">
              <a className="svc" href="#contact" style={{ "--g": "#E4ECFF" } as React.CSSProperties}>
                <div className="ic" style={{ background: "linear-gradient(140deg,#5B7FFF,#2F5BFF)", "--s": "#2F5BFF" } as React.CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg></div>
                <h3>Web Development</h3><p>Modern and scalable web applications.</p>
              </a>
              <a className="svc" href="#contact" style={{ "--g": "#DCF7EA" } as React.CSSProperties}>
                <div className="ic" style={{ background: "linear-gradient(140deg,#34d399,#0f9f6e)", "--s": "#0f9f6e" } as React.CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18h2"/></svg></div>
                <h3>Mobile Development</h3><p>Powerful mobile apps for every platform.</p>
              </a>
              <a className="svc" href="#contact" style={{ "--g": "#EBE3FF" } as React.CSSProperties}>
                <div className="ic" style={{ background: "linear-gradient(140deg,#9b7bff,#6b45e0)", "--s": "#6b45e0" } as React.CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2s0-2.5 1.5-2.5H18a3 3 0 003-3C21 7 17 3 12 3z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="11" r="1"/></svg></div>
                <h3>UI/UX Design</h3><p>Beautiful and intuitive design experiences.</p>
              </a>
              <a className="svc" href="#contact" style={{ "--g": "#DDEBFF" } as React.CSSProperties}>
                <div className="ic" style={{ background: "linear-gradient(140deg,#4aa3ff,#1f6fe0)", "--s": "#1f6fe0" } as React.CSSProperties}><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0118 10a4 4 0 01-.5 8z"/></svg></div>
                <h3>Digital Solutions</h3><p>Custom solutions for your unique needs.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="sec about" id="about">
          <div className="wrap ag">
            <div>
              <span className="lab" style={{ paddingLeft: "0" } as React.CSSProperties}>About Veyora</span>
              <h2>A digital studio in <span className="grad">Kathmandu</span></h2>
              <p>Veyora designs, develops and innovates digital solutions that help businesses grow. We care about thoughtful execution and experiences that stay useful long after launch.</p>
              <p>Tell us what you need, and we will shape it into something clear, reliable and well made.</p>
              <div className="cta" style={{ marginTop: "26px" } as React.CSSProperties}><a className="btn btn-p" href="#contact">Start a conversation</a></div>
            </div>
            <div className="pillars">
              <div className="pil"><span className="i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20l9-9-4-4-9 9v4zM14 6l4 4"/></svg></span><div><h3>Design</h3><p>Clear, intuitive interfaces that feel considered.</p></div></div>
              <div className="pil"><span className="i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg></span><div><h3>Develop</h3><p>Modern, scalable builds that are easy to maintain.</p></div></div>
              <div className="pil"><span className="i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.500c.7.700 1 1.500 1 2.500h6c0-1 .3-1.800 1-2.500A6 6 0 0012 3z"/></svg></span><div><h3>Innovate</h3><p>Custom solutions shaped around your unique needs.</p></div></div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <div className="panel">
              <div>
                <span className="lab">Contact</span>
                <h2>Let&apos;s build something that lasts</h2>
                <p>Share a few details about your project and we will get back to you.</p>
                <span className="loc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.200 7-11a7 7 0 10-14 0c0 4.800 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/></svg>Kathmandu, Nepal</span>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
