import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

export default function DatenschutzRedirect() {
  redirect(`/${routing.defaultLocale}/datenschutz`);
}
