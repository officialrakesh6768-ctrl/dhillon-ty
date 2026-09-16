import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logo from "@/assets/logo.png";

export const BUSINESS = {
  name: "Dhillon Tire Empire",
  phone: "778-389-6030",
  phoneHref: "tel:+17783896030",
  email: "dhillontireempire@gmail.com",
  address: "8412 192 St, Surrey, BC",
};

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/why-us", label: "Why Us" },
  { to: "/services", label: "Services" },
  { to: "/enquiry", label: "Enquiry" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center" aria-label={BUSINESS.name}>
          <img src={logo} alt={`${BUSINESS.name} logo`} className="h-14 w-auto sm:h-[4.25rem]" />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="font-display text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={BUSINESS.phoneHref}
            className="btn-red hidden shrink-0 px-5 py-2.5 font-display text-sm font-bold uppercase tracking-[0.16em] sm:inline-flex"
          >
            {BUSINESS.phone}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="shrink-0 rounded border border-border p-2 lg:hidden"
          >
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-6 bg-primary" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-surface px-5 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-display text-base font-bold uppercase tracking-[0.16em] text-muted-foreground last:border-0"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="btn-red mt-4 inline-flex px-5 py-2.5 font-display text-sm font-bold uppercase tracking-[0.16em]"
          >
            Call {BUSINESS.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <img src={logo} alt={`${BUSINESS.name} logo`} className="h-16 w-auto" loading="lazy" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Performance tire sales, installation and mobile service across Surrey and the Fraser
            Valley. Drive further, together.
          </p>
        </div>
        <div>
          <h3 className="text-lg tracking-wide">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={BUSINESS.phoneHref} className="transition-colors hover:text-primary">
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="break-all transition-colors hover:text-primary"
              >
                {BUSINESS.email}
              </a>
            </li>
            <li>{BUSINESS.address}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg tracking-wide">Service Area</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Surrey · Langley · Burnaby · Maple Ridge · Mission · Abbotsford · Chilliwack · Lower
            Mainland · Fraser Valley
          </p>
        </div>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} {BUSINESS.name}
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="hairline-grid relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[620px] rounded-full blur-[130px]"
        style={{ background: "oklch(0.55 0.235 27.5 / 0.22)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.42em] text-primary">
          {eyebrow}
        </p>
        <h1 className="animate-rise mt-4 text-gradient-steel text-5xl leading-[0.92] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-14 md:grid-cols-[minmax(0,1fr)_auto] lg:px-8">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Ready to roll?</h2>
          <p className="mt-2 text-muted-foreground">
            Same-day fitting, mobile call-outs and honest pricing across the Lower Mainland.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/enquiry"
            className="btn-red px-7 py-3.5 font-display text-sm font-bold uppercase tracking-[0.18em]"
          >
            Get a Quote
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="btn-ghost-red px-7 py-3.5 font-display text-sm font-bold uppercase tracking-[0.18em]"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
