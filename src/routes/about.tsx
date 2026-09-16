import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, CTABand } from "@/components/site/Layout";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Dhillon Tire Empire | Surrey Tire Specialists" },
      {
        name: "description",
        content:
          "The story, values and approach behind Dhillon Tire Empire — a Surrey-based tire shop serving drivers and fleets across the Lower Mainland.",
      },
      { property: "og:title", content: "About Dhillon Tire Empire" },
      {
        property: "og:description",
        content: "Family-driven tire specialists serving Surrey and the Fraser Valley.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const VALUES = [
  { t: "Precision", d: "Torque specs, road-force balancing and documented checks on every job." },
  { t: "Honesty", d: "Clear quotes up front. We recommend only what your vehicle actually needs." },
  { t: "Speed", d: "Same-day fitting and rapid mobile response when you're off the road." },
  { t: "Longevity", d: "We build repeat relationships, not one-time transactions." },
];

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Story"
        title="Drive further, together."
        subtitle="Dhillon Tire Empire was built in Surrey by people who grew up around vehicles — and around the frustration of being stranded by a tire that should have been handled properly."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="red-bar text-4xl">From one bay to a full empire of service</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            What started as a small tire operation on 192 St has grown into a complete tire
            destination: new and used inventory, precision installation, repair, seasonal swaps,
            storage and a mobile unit that reaches customers wherever they break down.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We serve daily commuters, weekend drivers, contractors and fleet operators across
            Surrey, Langley, Burnaby, Maple Ridge, Mission, Abbotsford, Chilliwack and the wider
            Fraser Valley. Same standard of work, every vehicle, every time.
          </p>
        </div>
        <img
          src={workshop}
          alt="Technician fitting a tire in a dark red-lit service bay"
          width={1408}
          height={1008}
          loading="lazy"
          className="w-full border border-border object-cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <h2 className="red-bar text-4xl">What we stand on</h2>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <article key={v.t} className="surface-card p-8">
              <h3 className="text-xl text-primary">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </article>
          ))}
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
