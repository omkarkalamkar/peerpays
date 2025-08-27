export default function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 mt-20 bg-brand-sky/30">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="text-center md:text-left">
            <div className="text-brand-navy font-semibold mb-2">PeerPays</div>
            <div className="text-sm text-brand-navy/70">© {new Date().getFullYear()} PeerPays — All rights reserved.</div>
          </div>
          <div className="flex gap-6">
            <a className="nav-link text-sm" href="/#features">Features</a>
            <a className="nav-link text-sm" href="/how-it-works">How it works</a>
            <a className="nav-link text-sm" href="/faq">FAQ</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-brand-navy/10 text-center">
          <p className="text-xs text-brand-navy/60">Simplifying credit, amplifying rewards</p>
        </div>
      </div>
    </footer>
  );
}
