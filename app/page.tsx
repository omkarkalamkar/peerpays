import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="container py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="badge mb-4 inline-block">Peer-to-Peer credit utility</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-brand-navy">
            Simplifying credit, <span className="text-brand-teal">amplifying rewards</span>
          </h1>
          <p className="mt-5 text-brand-navy/80 text-lg">
            With <strong>PeerPays</strong>, online shoppers get access to the right credit cards to redeem the best deals —
            and cardholders can put their cards to work, earning cash and maximizing rewards.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="https://lnkd.in/dYfw7unc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get started
            </a>
            <Link href="/how-it-works" className="btn btn-ghost">How it works</Link>
          </div>
          <p className="mt-3 text-xs text-brand-navy/60">No card details are shared. Simple, safe, and compliant within limits.</p>
        </div>
        <div className="card">
          <Image src="/logo-full.png" alt="PeerPays" width={900} height={600} className="w-full h-auto" priority />
        </div>
      </section>

      <section id="features" className="container py-8 grid md:grid-cols-3 gap-6">
        {[
          ["Earn from unused credit", "Turn idle credit limits into a steady secondary income stream."],
          ["Maximize card rewards", "Hit spend milestones and never miss out on 10X offers again."],
          ["Safe & transparent", "No card details shared; flows built for clarity and control."],
        ].map(([title, desc]) => (
          <div key={title} className="card">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-brand-navy/75">{desc}</p>
          </div>
        ))}
      </section>

      <section id="get-started" className="container py-16">
        <div className="card flex items-center justify-between gap-6 flex-col md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold">Ready to start with PeerPays?</h3>
            <p className="text-brand-navy/75 mt-1">Create your profile and post requirements in minutes.</p>
          </div>
          <a
            href="https://lnkd.in/dYfw7unc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Join PeerPays
          </a>
        </div>
      </section>
    </>
  );
}
