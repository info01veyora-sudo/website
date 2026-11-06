"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof LINKS)[number]["id"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", window.location.pathname);
    setActive("home");
    setOpen(false);
  };

  return (
    <header>
      <div className="wrap">
        <nav className="nav liquid" aria-label="Main">
          <div className="liq" aria-hidden="true" />
          <a href="#home" onClick={goHome} className="logo" aria-label="Veyora Digital Studio home">
            <img src="/images/logo.png" alt="Veyora" width="40" height="32" />
            <span><b>Veyora</b><small>DIGITAL STUDIO</small></span>
          </a>

          <ul
            className={`links${open ? " open" : ""}`}
            id="menu"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) setOpen(false);
            }}
          >
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "on" : undefined}
                  aria-current={active === id ? "true" : undefined}
                  onClick={id === "home" ? goHome : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mcta"><a className="btn btn-p" href="#contact">Get in Touch</a></li>
          </ul>

          <div className="nav-actions">
            <ThemeToggle />

            <a className="btn btn-p btn-s" href="#contact">
              Get in Touch
            </a>

            <button
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => setOpen((o) => !o)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
