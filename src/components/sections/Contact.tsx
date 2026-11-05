"use client";

import { useCallback, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const validate = useCallback((): boolean => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Please enter a valid email address";
    if (!formData.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [formData]);

  const handleChange = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (!validate()) return;

      setStatus("sending");

      const subject = encodeURIComponent(
        `New project inquiry from ${formData.name}`,
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );

      setTimeout(() => {
        try {
          window.location.href = `mailto:info01veyora@gmail.com?subject=${subject}&body=${body}`;
          setStatus("success");
        } catch {
          setStatus("error");
        }
      }, 800);
    },
    [formData, validate],
  );

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1320px] px-6 py-24 md:py-32 bg-background"
    >
      {/* Faint V watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5"
        aria-hidden="true"
      >
        <svg
          width="240"
          height="240"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M8 4L16 12L24 4M8 28L16 20L24 28"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M16 12V20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="lg:pr-8">
          <p className="mb-3 text-[11px] font-medium font-heading uppercase tracking-wider text-accent-text">
            Have a project in mind?
          </p>
          <h2 className="mb-6 text-3xl font-heading font-bold leading-[1.2] tracking-tight text-foreground md:text-4xl">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mb-8 leading-7 text-body">
            Tell us about your business and what you want to improve.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:info01veyora@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-body hover:text-accent-text transition-colors duration-200"
            >
              <span aria-hidden="true">&#9993;</span>
              info01veyora@gmail.com
            </a>
            <div className="flex items-center gap-2 text-sm font-medium text-body">
              <span aria-hidden="true">&#128205;</span>
              Kathmandu, Nepal
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="
            rounded-[1.5rem]
            border border-border
            bg-card
            p-8 md:p-12
            shadow-shadow
          ">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 text-center py-8">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent-text"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3 className="text-lg font-medium font-heading text-foreground">
                  Message sent.
                </h3>
                <p className="text-sm text-body">
                  Your email client has opened to complete the message.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setErrors({});
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="text-sm font-medium text-accent-text hover:text-accent-hover underline underline-offset-4 transition-colors duration-200"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`
                        w-full rounded-xl border px-4 py-3 text-foreground placeholder-body
                        focus:outline-none focus:ring-2 focus:ring-ring
                        transition-colors duration-200
                        ${errors.name ? "border-red-500" : "border-border"}
                      `}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-errormessage={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-[11px] text-red-500 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`
                        w-full rounded-xl border px-4 py-3 text-foreground placeholder-body
                        focus:outline-none focus:ring-2 focus:ring-ring
                        transition-colors duration-200
                        ${errors.email ? "border-red-500" : "border-border"}
                      `}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      aria-errormessage={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-[11px] text-red-500 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`
                      w-full rounded-xl border px-4 py-3 text-foreground placeholder-body
                      focus:outline-none focus:ring-2 focus:ring-ring
                      transition-colors duration-200
                      ${errors.message ? "border-red-500" : "border-border"}
                    `}
                    placeholder="Tell us about your project"
                    aria-invalid={!!errors.message}
                    aria-errormessage={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-[11px] text-red-500 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="
                    w-full rounded-full bg-accent px-7 py-4
                    font-medium text-white
                    transition-colors duration-200
                    disabled:opacity-60 disabled:cursor-not-allowed
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-ring focus-visible:ring-offset-2
                    focus-visible:ring-offset-card
                  "
                >
                  {status === "sending" ? "Sending..." : "Send message &rarr;"}
                </button>
                {status === "error" && (
                  <p className="text-[11px] text-red-500 font-medium text-center">
                    Something went wrong. Please email us directly at
                    info01veyora@gmail.com
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
