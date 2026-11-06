"use client";

import { useState } from "react";

type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, boolean>>;

type Props = {
  /**
   * Connect your EXISTING contact backend here (API route, server action, etc).
   * Throw an error to show the failure state. Without it, sending is simulated.
   */
  onSubmit?: (values: Values) => Promise<void>;
};

async function sendContactEmail(values: Values): Promise<void> {
  const subject = encodeURIComponent(`New project inquiry from ${values.name}`);
  const body = encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
  );
  window.location.href = `mailto:info01veyora@gmail.com?subject=${subject}&body=${body}`;
}

export function ContactForm({ onSubmit = sendContactEmail }: Props) {
  const [values, setValues] = useState<Values>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {
      name: values.name.trim().length < 2,
      email: !/^\S+@\S+\.\S+$/.test(values.email),
      message: values.message.trim().length < 6,
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    setStatus("loading");
    try {
      if (onSubmit) await onSubmit(values);
      else await new Promise((r) => setTimeout(r, 600)); // preview only
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={status === "done" ? "done" : undefined}>
      <div className="two">
        <div className={`f${errors.name ? " bad" : ""}`}>
          <label htmlFor="n">Name</label>
          <input id="n" autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={!!errors.name} required />
          <div className="err">Please enter your name.</div>
        </div>
        <div className={`f${errors.email ? " bad" : ""}`}>
          <label htmlFor="e">Email</label>
          <input id="e" type="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={!!errors.email} required />
          <div className="err">Enter a valid email address.</div>
        </div>
      </div>
      <div className={`f${errors.message ? " bad" : ""}`}>
        <label htmlFor="m">Message</label>
        <textarea id="m" value={values.message} onChange={set("message")} aria-invalid={!!errors.message} required />
        <div className="err">Tell us a little about your project.</div>
      </div>

      {status === "error" && (
        <div className="err" role="alert" style={{ display: "block" }}>
          Something went wrong. Please try again.
        </div>
      )}

      <button className="btn btn-p" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      <div className="ok" role="status">
        <div className="ck">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5 9-10" />
          </svg>
        </div>
        <h3>Message sent</h3>
        <p>Thanks for reaching out. We will reply soon.</p>
      </div>
    </form>
  );
}

