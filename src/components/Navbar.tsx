"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="sticky top-4 z-50 mx-auto max-w-[1320px] px-6"
      aria-label="Main navigation"
    >
      <div
        className="
          rounded-[2rem]
          bg-card/80
          backdrop-blur-md
          border border-border
          px-6
          py-3
          shadow-shadow
          transition-colors duration-200
        "
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
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

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 text-body hover:text-accent-text"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="mailto:info01veyora@gmail.com"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              Get in Touch &rarr;
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card text-foreground hover:bg-card-alt focus:outline-none focus:ring-2 focus:ring-ring focus-ring-offset-2 focus-ring-offset-card transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            md:hidden
            border-t border-border
            bg-card
            shadow-shadow
            transition-all duration-300
          "
        >
          <div className="mx-auto max-w-[1320px] px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors duration-200 text-body hover:text-accent-text hover:bg-card-alt"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <ThemeToggle />
              <a
                href="mailto:info01veyora@gmail.com"
                className="mt-3 block px-3 py-2.5 text-sm font-medium rounded-xl border border-accent text-accent text-center transition-colors duration-200 hover:bg-accent hover:text-white"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
