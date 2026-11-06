"use client";

import { useEffect, useRef } from "react";

export function ServicesCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = el.scrollLeft;
    const timer = setInterval(() => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      start = start >= max ? 0 : start + 260;
      el.scrollTo({ left: start, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="g4" ref={ref}>
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
      <a className="svc" href="#contact" style={{ "--g": "#FEF3C7" } as React.CSSProperties}>
        <div className="ic" style={{ background: "linear-gradient(140deg,#FBBF24,#D97706)", "--s": "#D97706" } as React.CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 13V3M6 17V3M21 7V3"/></svg></div>
        <h3>Data Analytics</h3><p>Turn your data into clear decisions that move the needle.</p>
      </a>
      <a className="svc" href="#contact" style={{ "--g": "#CCFBF1" } as React.CSSProperties}>
        <div className="ic" style={{ background: "linear-gradient(140deg,#14B8A6,#0D9488)", "--s": "#0D9488" } as React.CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 11h20M2 17h20"/><ellipse cx="12" cy="5" rx="10" ry="3"/><ellipse cx="12" cy="19" rx="10" ry="3"/></svg></div>
        <h3>Data Engineering</h3><p>Reliable pipelines that keep your data flowing, clean and ready.</p>
      </a>
      <a className="svc" href="#contact" style={{ "--g": "#FAE8FF" } as React.CSSProperties}>
        <div className="ic" style={{ background: "linear-gradient(140deg,#C084FC,#8B5CF6)", "--s": "#8B5CF6" } as React.CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L2 15l10 7 10-7-10-7z"/><path d="M7 7l-2-2M17 17l-2-2M17 7l-2 2M7 17l-2-2"/></svg></div>
        <h3>AI</h3><p>Smart assistants and models built around your real-world needs.</p>
      </a>
      <a className="svc" href="#contact" style={{ "--g": "#E0E7FF" } as React.CSSProperties}>
        <div className="ic" style={{ background: "linear-gradient(140deg,#6366F1,#4F46E5)", "--s": "#4F46E5" } as React.CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10-5 10 5M2 12l10 5 10-5"/></svg></div>
        <h3>Software Engineering</h3><p>Robust systems engineered for scale and long-term maintainability.</p>
      </a>
    </div>
  );
}
