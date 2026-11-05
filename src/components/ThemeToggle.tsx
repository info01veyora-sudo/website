"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  // Initialize from localStorage/system preference during first render.
  // Avoids setState-in-effect and hydration mismatch for theme attribute
  // (handled by inline script in layout.tsx before first paint).
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    try {
      const stored = localStorage.getItem("veyora-theme") as Theme | null;
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
      return stored || (systemDark ? "dark" : "light");
    } catch {
      return "light";
    }
  });

  // Sync data-theme attribute on the <html> element (DOM operation only).
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev: Theme) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      try {
        localStorage.setItem("veyora-theme", next);
      } catch {
        // localStorage unavailable
      }
      return next;
    });
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
      className="
        inline-flex items-center justify-center w-9 h-9 rounded-full
        border border-border bg-card text-accent-text
        hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-ring
        focus-ring-offset-2 focus-ring-offset-card
        transition-colors duration-200
      "
    >
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      {!isDark ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )}
    </button>
  );
}
