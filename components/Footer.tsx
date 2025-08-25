export default function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 mt-20">
      <div className="container py-10 text-sm text-brand-navy/70 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div>© {new Date().getFullYear()} PeerPays — All rights reserved.</div>
        <div className="flex gap-4">
          <a className="nav-link" href="/#features">Features</a>
          <a className="nav-link" href="/how-it-works">How it works</a>
          <a className="nav-link" href="/faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
