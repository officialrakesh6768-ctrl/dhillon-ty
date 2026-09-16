import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, CTABand } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Tire Services in Surrey | Installation, Balancing, Repair & Storage" },
      {
        name: "description",
        content:
          "New & used tires, installation, balancing, repair, mobile service, fleet tire programs, seasonal swaps and tire storage in Surrey BC.",
      },
      { property: "og:title", content: "Tire Services | Dhillon Tire Empire" },
      {
        property: "og:description",
        content: "Complete tire care for cars, SUVs, vans, trucks, trailers and RVs.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const SERVICES = [
  {
    t: "New & Used Tires",
    d: "Premium new tires across all major brands plus thoroughly inspected used sets. All-season, winter and performance fitments for every budget.",
  },
  {
    t: "Tire Installation",
    d: "Mounting on modern touchless equipment, correct torque sequencing and TPMS handling so your wheels and sensors stay protected.",
  },
  {
    t: "Tire Balancing",
    d: "Precision balancing that removes vibration, protects suspension components and extends tread life at highway speeds.",
  },
  {
    t: "Tire Repair",
    d: "Professional puncture assessment with proper patch-plug repairs from the inside — never a surface-only fix.",
  },
  {
    t: "Mobile / On-Site Service",
    d: "Our mobile unit comes to your home, workplace, jobsite or roadside with everything needed to get you rolling again.",
  },
  {
    t: "Fleet Tire Services",
    d: "Scheduled inspections, rotations, replacements and priority call-outs that keep commercial vehicles earning instead of parked.",
  },
  {
    t: "Seasonal Swaps",
    d: "Fast winter and summer changeovers booked ahead of the rush, with pressure checks and tread reports included.",
  },
  {
    t: "Tire Storage",
    d: "Clean, climate-appropriate off-season storage so your spare set stays out of the garage and in perfect condition.",
  },
];

function Services() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Every tire need. One empire."
        subtitle="From a single puncture to a full fleet program — handled with the same precision and speed."
      />

      <section className="mx-auto max-w-7xl px-0 py-0">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article key={s.t} className="surface-card group p-10 lg:p-12">
              <div className="flex items-start gap-5">
                <span className="font-display text-4xl font-black leading-none text-primary/70 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="text-2xl">{s.t}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  <Link
                    to="/enquiry"
                    className="mt-5 inline-block font-display text-xs font-bold uppercase tracking-[0.22em] text-primary"
                  >
                    Request this service →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
