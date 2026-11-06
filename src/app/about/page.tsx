import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About Veyora Digital Studio",
  description:
    "Veyora designs, develops and innovates digital solutions that help businesses grow. Thoughtful execution and experiences that stay useful long after launch.",
};

export default function AboutPage() {
  redirect("/#about");
}
