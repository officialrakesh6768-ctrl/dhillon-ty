import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageShell, PageHero, BUSINESS } from "@/components/site/Layout";

export const Route = createFileRoute("/enquiry")({
  component: Enquiry,
  head: () => ({
    meta: [
      { title: "Get a Tire Quote | Dhillon Tire Empire Surrey BC" },
      {
        name: "description",
        content:
          "Request a tire quote or book mobile service in Surrey, Langley and the Fraser Valley. Call 778-389-6030 or send your vehicle and tire details.",
      },
      { property: "og:title", content: "Enquiry | Dhillon Tire Empire" },
      {
        property: "og:description",
        content: "Send your vehicle, tire size and preferred date for a fast quote.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/enquiry" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/enquiry" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  vehicle: z.string().trim().min(1, "Vehicle is required").max(120),
  tireSize: z.string().trim().max(60).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Select a service"),
  location: z.string().trim().min(1, "Location is required").max(120),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const SERVICES = [
  "New Tires",
  "Used Tires",
  "Tire Installation",
  "Tire Balancing",
  "Tire Repair",
  "Mobile / On-Site Service",
  "Fleet Tire Services",
  "Seasonal Swap",
  "Tire Storage",
];

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", ph: "Jaspreet Singh" },
  { name: "phone", label: "Phone", type: "tel", ph: "778-000-0000" },
  { name: "email", label: "Email", type: "email", ph: "you@email.com" },
  { name: "vehicle", label: "Vehicle", type: "text", ph: "2021 Ford F-150" },
  { name: "tireSize", label: "Tire Size", type: "text", ph: "275/55R20" },
  { name: "location", label: "Location", type: "text", ph: "Surrey, BC" },
  { name: "date", label: "Preferred Date", type: "date", ph: "" },
] as const;

const inputClass =
  "w-full border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

function Enquiry() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const d = result.data;
    const body = [
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email}`,
      `Vehicle: ${d.vehicle}`,
      `Tire Size: ${d.tireSize || "-"}`,
      `Service: ${d.service}`,
      `Location: ${d.location}`,
      `Preferred Date: ${d.date || "-"}`,
      "",
      d.message || "",
    ].join("\n");
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      `Tire Enquiry — ${d.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Enquiry"
        title="Get a quote."
        subtitle="Tell us the vehicle and what it needs. We'll come back with pricing and the earliest slot — in the shop or at your location."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:px-8">
        <form onSubmit={onSubmit} noValidate className="surface-card p-8 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <div key={f.name} className={f.name === "vehicle" ? "sm:col-span-2" : ""}>
                <label
                  htmlFor={f.name}
                  className="mb-2 block font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  placeholder={f.ph}
                  maxLength={255}
                  className={inputClass}
                />
                {errors[f.name] && <p className="mt-2 text-xs text-primary">{errors[f.name]}</p>}
              </div>
            ))}

            <div>
              <label
                htmlFor="service"
                className="mb-2 block font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
              >
                Service
              </label>
              <select id="service" name="service" defaultValue="" className={inputClass}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors["service"] && (
                <p className="mt-2 text-xs text-primary">{errors["service"]}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Anything else we should know?"
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-red mt-8 w-full px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] sm:w-auto"
          >
            Send Enquiry
          </button>
          {sent && (
            <p className="mt-4 text-sm text-muted-foreground">
              Your email app should now open with the details ready to send. Prefer to talk? Call{" "}
              {BUSINESS.phone}.
            </p>
          )}
        </form>

        <aside className="surface-card h-fit p-8">
          <h2 className="red-bar text-2xl">Direct line</h2>
          <ul className="space-y-5 text-sm">
            <li>
              <span className="block font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Phone
              </span>
              <a href={BUSINESS.phoneHref} className="text-lg text-foreground hover:text-primary">
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <span className="block font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </span>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="break-all text-foreground hover:text-primary"
              >
                {BUSINESS.email}
              </a>
            </li>
            <li>
              <span className="block font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Shop
              </span>
              <span className="text-foreground">{BUSINESS.address}</span>
            </li>
            <li>
              <span className="block font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Service Area
              </span>
              <span className="text-muted-foreground">
                Surrey, Langley, Burnaby, Maple Ridge, Mission, Abbotsford, Chilliwack and the
                Fraser Valley.
              </span>
            </li>
          </ul>
        </aside>
      </section>
    </PageShell>
  );
}
