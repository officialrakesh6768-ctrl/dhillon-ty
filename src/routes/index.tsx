import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTABand, BUSINESS } from "@/components/site/Layout";
import hero from "@/assets/hero-tire.jpg";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Dhillon Tire Empire | Premium Tires & Mobile Service in Surrey BC" },
      {
        name: "description",
        content:
          "New & used tires, installation, balancing, repair and mobile tire service in Surrey, Langley and the Fraser Valley. Call 778-389-6030.",
      },
      { property: "og:title", content: "Dhillon Tire Empire | Engineered For The Road" },
      {
        property: "og:description",
        content:
          "Performance tire sales, installation and 24/7 mobile service across the Lower Mainland.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: BUSINESS.name,
          telephone: BUSINESS.phone,
          email: BUSINESS.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "8412 192 St",
            addressLocality: "Surrey",
            addressRegion: "BC",
            addressCountry: "CA",
          },
          areaServed: ["Surrey", "Langley", "Burnaby", "Abbotsford", "Fraser Valley"],
        }),
      },
    ],
  }),
});

const HIGHLIGHTS = [
  { k: "01", t: "New & Used Tires", d: "Premium brands and inspected used sets for every budget." },
  { k: "02", t: "Mobile Service", d: "We come to your driveway, jobsite or roadside." },
  { k: "03", t: "Complete Tire Care", d: "Install, balance, repair, seasonal swaps and storage." },
  { k: "04", t: "Fleet Ready", d: "Vans, trucks, trailers and RVs kept moving." },
];

const VEHICLES = ["Cars", "SUVs", "Work Vans", "Pickup Trucks", "Trailers", "RVs"];

const SERVICE_SNIPPETS = [
  {
    k: "01",
    t: "New & Used Tires",
    d: "Road-ready options for daily driving, summer, winter and performance fitments.",
  },
  {
    k: "02",
    t: "Installation & Balancing",
    d: "Precision mounting, torque checks and vibration-free balancing for a smoother ride.",
  },
  {
    k: "03",
    t: "Mobile Call-Outs",
    d: "Fast on-site service at home, work, the road or your jobsite, when you need it most.",
  },
];

function Home() {
  return (
    <PageShell>
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src={hero}
          alt="Performance car wheel and tire lit in red on wet asphalt"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full scale-105 object-cover animate-hero-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-24 lg:px-8">
          <p className="animate-hero-content font-display text-xs font-bold uppercase tracking-[0.45em] text-primary">
            Surrey · British Columbia
          </p>
          <h1 className="animate-hero-content mt-5 max-w-4xl text-gradient-steel text-6xl leading-[0.88] sm:text-8xl lg:text-[7.5rem]">
            YOUR ROAD.
            <br />
            YOUR DRIVE.
            <br />
            OUR EXPERTISE
          </h1>
          <p className="animate-hero-content mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Quality tires and professional service, wherever the road takes you.
          </p>
          <div className="animate-hero-content mt-10 flex flex-wrap gap-4">
            <Link
              to="/enquiry"
              className="btn-red px-9 py-4 font-display text-sm font-bold uppercase tracking-[0.2em]"
            >
              Get a Quote
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="btn-ghost-red px-9 py-4 font-display text-sm font-bold uppercase tracking-[0.2em]"
            >
              Call Now
            </a>
          </div>
          <div className="animate-hero-content mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-10 bg-primary" />
            <Link to="/services" className="transition-colors hover:text-foreground">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, index) => (
            <article
              key={h.k}
              className="surface-card animate-fade-up p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                {h.k}
              </span>
              <h2 className="mt-4 text-xl">{h.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Services
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Quick help, built in.</h2>
          </div>
          <Link
            to="/services"
            className="hidden font-display text-xs font-bold uppercase tracking-[0.22em] text-primary transition-colors hover:text-foreground sm:inline-block"
          >
            View all services →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {SERVICE_SNIPPETS.map((service, index) => (
            <Link
              key={service.t}
              to="/services"
              className="surface-card animate-fade-up block p-7"
              style={{ animationDelay: `${index * 120 + 180}ms` }}
            >
              <span className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                {service.k}
              </span>
              <h3 className="mt-4 text-2xl">{service.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.d}</p>
              <span className="mt-6 inline-block font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-2 lg:px-8">
        <img
          src={workshop}
          alt="Dark tire workshop bay with red lighting and stacked tires"
          width={1408}
          height={1008}
          loading="lazy"
          className="w-full border border-border object-cover"
        />
        <div>
          <h2 className="red-bar text-4xl sm:text-5xl">Built on precision</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Every fitting is torqued to spec, road-force balanced and inspected before your vehicle
            leaves the bay. No upselling, no shortcuts — just clean, exacting work from a team that
            treats daily drivers with the same care as track machines.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {VEHICLES.map((v) => (
              <li
                key={v}
                className="border border-border px-4 py-3 font-display font-bold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
