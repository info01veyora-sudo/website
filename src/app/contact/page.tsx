import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact Veyora Digital Studio",
  description:
    "Share a few details about your project and we will get back to you. Let's build something that lasts.",
};

export default function ContactPage() {
  redirect("/#contact");
}
