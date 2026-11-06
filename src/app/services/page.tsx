import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Our Services | Veyora Digital Studio",
  description:
    "Comprehensive digital solutions to elevate your business — web development, mobile development, UI/UX design, and custom digital solutions.",
};

export default function ServicesPage() {
  redirect("/#services");
}
