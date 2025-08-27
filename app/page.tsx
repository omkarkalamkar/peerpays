import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="container -mt-8 pb-16">
        <div className="md:grid md:grid-cols-2 gap-8 lg:gap-16 items-start w-full">
          <div className="md:hidden order-1">
            <div className="badge inline-block animate-pulse">Peer-to-Peer credit utility</div>
            <h1 className="text-4xl font-bold leading-tight text-brand-navy animate-fade-in-up mt-4">
              Simplifying credit, <span className="text-brand-teal bg-gradient-to-r from-brand-teal to-brand-navy bg-clip-text text-transparent animate-fade-in-up animation-delay-300">amplifying rewards</span>
            </h1>
          </div>
          <div className="relative h-[400px] md:h-[480px] order-2 mt-8 md:mt-0">
            <div className="absolute inset-0 hero-gradient rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative z-10 w-full max-w-lg mx-auto h-full">
              <div className="absolute top-0 left-2 md:left-4 z-30 opacity-0 animate-slide-in-left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-navy/20 to-brand-teal/20 rounded-3xl blur-xl"></div>
                  <Image
                    src="/peerpay-app-screen/abc1.png"
                    alt="PeerPays App Dashboard"
                    width={240}
                    height={480}
                    className="relative w-[160px] md:w-[220px] h-auto rounded-3xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 object-contain"
                  />
                </div>
              </div>
              <div className="absolute top-6 md:top-8 right-2 md:right-4 z-20 opacity-0 animate-slide-in-right animation-delay-200">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-l from-brand-teal/20 to-brand-navy/20 rounded-3xl blur-xl"></div>
                  <Image
                    src="/peerpay-app-screen/abc2.png"
                    alt="PeerPays App Request Screen"
                    width={240}
                    height={480}
                    className="relative w-[160px] md:w-[220px] h-auto rounded-3xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden order-3 -mt-4">
            <div className="space-y-4">
              <p className="text-brand-navy/80 text-lg leading-relaxed">
                With <strong className="text-brand-teal">PeerPays</strong>, online shoppers get access to the right credit cards to redeem the best deals —
                and cardholders can put their cards to work, earning cash and maximizing rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Get started
                </a>
                <Link href="/how-it-works" className="btn btn-ghost text-lg px-8 py-4">How it works</Link>
              </div>
              <p className="text-sm text-brand-navy/60 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-teal rounded-full"></span>
                No card details are shared. Simple, safe, and compliant within limits.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="badge inline-block animate-pulse">Peer-to-Peer credit utility</div>
            <div className="space-y-4 mt-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-brand-navy animate-fade-in-up">
                Simplifying credit, <span className="text-brand-teal bg-gradient-to-r from-brand-teal to-brand-navy bg-clip-text text-transparent animate-fade-in-up animation-delay-300">amplifying rewards</span>
              </h1>
              <p className="text-brand-navy/80 text-xl leading-relaxed">
                With <strong className="text-brand-teal">PeerPays</strong>, online shoppers get access to the right credit cards to redeem the best deals —
                and cardholders can put their cards to work, earning cash and maximizing rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Get started
                </a>
                <Link href="/how-it-works" className="btn btn-ghost text-lg px-8 py-4">How it works</Link>
              </div>
              <p className="text-sm text-brand-navy/60 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-teal rounded-full"></span>
                No card details are shared. Simple, safe, and compliant within limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Why choose PeerPays?</h2>
          <p className="text-brand-navy/70 text-lg max-w-2xl mx-auto">Unlock the full potential of your credit cards while helping others access better deals</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["💰", "Earn from unused credit", "Turn idle credit limits into a steady secondary income stream."],
            ["🎯", "Maximize card rewards", "Hit spend milestones and never miss out on 10X offers again."],
            ["🔒", "Safe & transparent", "No card details shared; flows built for clarity and control."],
          ].map(([icon, title, desc]) => (
            <div key={title} className="feature-card group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">{title}</h3>
              <p className="text-brand-navy/75 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>



      <section id="get-started" className="container py-20">
        <div className="relative">
          <div className="absolute inset-0 hero-gradient rounded-3xl opacity-5"></div>
          <div className="card relative z-10 text-center py-12">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Ready to start with PeerPays?</h3>
            <p className="text-brand-navy/75 text-lg mb-8 max-w-2xl mx-auto">Create your profile and post requirements in minutes. Join thousands of users already maximizing their credit potential.</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg px-10 py-4"
            >
              Join PeerPays
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
