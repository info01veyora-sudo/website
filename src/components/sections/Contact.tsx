"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(
      `New project inquiry from ${name}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    setTimeout(() => {
      window.location.href = `mailto:info01veyora@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 800);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1320px] px-6 py-24 md:py-32"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="mb-3 text-[11px] font-medium font-heading uppercase tracking-wider text-accent">
            Have a project in mind?
          </p>
          <h2 className="text-3xl font-heading font-bold leading-[1.2] tracking-tight text-primary md:text-4xl">
            Let&apos;s build something meaningful.
          </h2>
        </div>

        {status !== "success" ? (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="block mb-1.5 text-sm font-medium text-primary"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-border px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block mb-1.5 text-sm font-medium text-primary"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="text-left">
              <label
                htmlFor="message"
                className="block mb-1.5 text-sm font-medium text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-border px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200"
                placeholder="Tell us about your project"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-accent px-7 py-4 font-medium text-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {status === "sending" ? "Sending..." : "Send message &rarr;"}
            </button>
          </form>
        ) : null}

        {status === "success" && (
          <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="font-medium text-primary">Message sent.</p>
            <p className="text-sm text-muted">
              Your email client has opened to complete the message.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-sm font-medium text-accent hover:underline"
            >
              Send another
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
