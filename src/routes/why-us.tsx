import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, CTABand } from "@/components/site/Layout";
import van1 from "@/assets/van1.png";

export const Route = createFileRoute("/why-us")({
  component: WhyUs,
  head: () => ({
    meta: [
      { title: "Why Choose Dhillon Tire Empire | Mobile Tire Service Surrey" },
      {
        name: "description",
        content:
          "Mobile tire service, new and used tire options, complete tire care and coverage for cars, trucks, vans, trailers and RVs across the Lower Mainland.",
      },
      { property: "og:title", content: "Why Choose Dhillon Tire Empire" },
      {
        property: "og:description",
        content: "Mobile service, quality options, complete care and wide vehicle coverage.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/why-us" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
});

const PILLARS = [
  {
    t: "Mobile & On-Site Service",
    d: "Our fully equipped mobile unit brings installation, repair and swaps to your driveway, office parking lot, jobsite or roadside — no tow, no waiting room.",
  },
  {
    t: "Quality Tire Options",
    d: "Premium new tires from trusted brands alongside carefully inspected used sets, so you get the right grip at the right price without compromise on safety.",
  },
  {
    t: "Complete Tire Care",
    d: "Installation, balancing, puncture repair, seasonal changeovers and climate-safe storage — one team handling the entire lifecycle of your tires.",
  },
  {
    t: "Wide Vehicle Coverage",
    d: "Cars, SUVs, work vans, pickup trucks, trailers and RVs. From low-profile performance rubber to heavy-duty load-rated commercial tires.",
  },
];

const AREAS = [
  "Surrey",
  "Langley",
  "Burnaby",
  "Maple Ridge",
  "Mission",
  "Abbotsford",
  "Chilliwack",
  "Lower Mainland",
  "Fraser Valley",
];

function WhyUs() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Why Us"
        title="An unfair advantage on every corner."
        subtitle="Four reasons drivers and fleet managers across the Fraser Valley keep our number saved."
      />

      <section className="mx-auto grid max-w-7xl gap-px bg-border px-0 py-0 md:grid-cols-2">
        {PILLARS.map((p, i) => (
          <article key={p.t} className="surface-card p-10 lg:p-14">
            <span className="font-display text-sm font-bold tracking-[0.3em] text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl">{p.t}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{p.d}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <img
          src={van1}
          alt="Dhillon Tire Empire service van with tires and tools"
          width={1408}
          height={1008}
          loading="lazy"
          className="w-full border border-border object-cover"
        />
        <div>
          <h2 className="red-bar text-4xl">We cover the valley</h2>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <span
                key={a}
                className="border border-border px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
