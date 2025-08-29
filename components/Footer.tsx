export default function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 mt-16 bg-brand-sky/30">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="text-center md:text-left">
            <div className="text-brand-navy font-semibold mb-1">PeerPays</div>
            <div className="text-xs text-brand-navy/70">© {new Date().getFullYear()} Pearpay Technologies Pvt Ltd — All rights reserved.</div>
          </div>
          <div className="flex gap-4">
            <a className="nav-link text-xs" href="/#features">Features</a>
            <a className="nav-link text-xs" href="/how-it-works">How it works</a>
            <a className="nav-link text-xs" href="/faq">FAQ</a>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-brand-navy/10 text-center">
          <p className="text-xs text-brand-navy/60">Simplifying credit, amplifying rewards</p>
        </div>
      </div>
    </footer>
  );
}
