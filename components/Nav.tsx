import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="w-full border-b border-brand-navy/10 bg-white sticky top-0 z-50 backdrop-blur">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-icon.png" alt="PeerPays logo" width={32} height={32} priority />
          <span className="font-semibold text-lg text-brand-navy">PeerPays</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link className="nav-link" href="/how-it-works">How it works</Link>
          <Link className="nav-link" href="/faq">FAQ</Link>
          <Link className="btn btn-primary" href="#get-started">Get started</Link>
        </nav>
      </div>
    </header>
  );
}
