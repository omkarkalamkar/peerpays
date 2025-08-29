"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useGetStartedModal } from "../components/ClientLayout";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const openGetStartedModal = useGetStartedModal();


  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let currentIndex = 0;
    const totalCards = 4;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        currentIndex = (currentIndex + 1) % totalCards;
        const cardWidth = window.innerWidth < 768 ? 272 : 336; // w-64 + space or w-80 + space
        const scrollPosition = currentIndex * cardWidth;
        
        scrollRef.current.scrollTo({ 
          left: scrollPosition, 
          behavior: 'smooth' 
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
                  <div className="relative w-[160px] md:w-[220px] bg-black rounded-[24px] p-1 shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300">
                    <div className="relative bg-white rounded-[20px] overflow-hidden">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black rounded-full z-10"></div>
                      <div className="pt-4">
                        <Image
                          src="/peerpay-app-screen/abc1.png"
                          alt="PeerPays App Dashboard"
                          width={240}
                          height={480}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 md:top-8 right-2 md:right-4 z-20 opacity-0 animate-slide-in-right animation-delay-200">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-l from-brand-teal/20 to-brand-navy/20 rounded-3xl blur-xl"></div>
                  <div className="relative w-[160px] md:w-[220px] bg-black rounded-[24px] p-1 shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300">
                    <div className="relative bg-white rounded-[20px] overflow-hidden">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black rounded-full z-10"></div>
                      <div className="pt-4">
                        <Image
                          src="/peerpay-app-screen/abc2.png"
                          alt="PeerPays App Request Screen"
                          width={240}
                          height={480}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
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
                <button
                  onClick={openGetStartedModal}
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Get started
                </button>
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
                <button
                  onClick={openGetStartedModal}
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Get started
                </button>
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

      <section id="features" className="container pt-2 pb-16">
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

      <section className="bg-gradient-to-b from-slate-900 to-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Trending Offers</h2>
            <p className="text-gray-400 mt-2">Check out the latest trending offers and start your rewarding journey</p>
          </div>
          <div className="md:flex md:items-center md:space-x-6 md:justify-center">
            <button onClick={scrollLeft} className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-brand-teal text-white shadow-lg flex-shrink-0 hover:bg-brand-teal/80 transition-colors">
              <span className="text-xl">‹</span>
            </button>
            <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide max-w-4xl snap-x snap-mandatory md:snap-none px-4 md:px-0">
              <div className="md:hidden w-8 flex-shrink-0"></div>
              <div className="relative flex-shrink-0 snap-center">
                <img src="/offer-cards/axis card.png" alt="Axis Card" className="w-64 md:w-80 h-auto rounded-xl shadow-lg"/>
                <div className="absolute top-1/2 right-2 md:right-6 transform -translate-y-1/2 text-white text-left w-[55%] md:w-[60%]">
                  <h3 className="text-sm md:text-lg font-bold">Earn Rs. 1,100</h3>
                  <p className="text-xs md:text-sm opacity-80">by using your Axis Bank card</p>
                  <p className="text-xs opacity-60 hidden md:block">More than 800 users have earned Rs. 8,60,000 in last 30 days</p>
                </div>
              </div>
              <div className="relative flex-shrink-0 snap-center">
                <img src="/offer-cards/icici card.png" alt="ICICI Card" className="w-64 md:w-80 h-auto rounded-xl shadow-lg"/>
                <div className="absolute top-1/2 right-2 md:right-6 transform -translate-y-1/2 text-black text-left w-[55%] md:w-[60%]">
                  <h3 className="text-sm md:text-lg font-bold">Earn Rs. 800</h3>
                  <p className="text-xs md:text-sm opacity-80">by using your ICICI Bank card</p>
                  <p className="text-xs opacity-60 hidden md:block">More than 900 users have earned Rs. 7,60,000 in last 30 days</p>
                </div>
              </div>
              <div className="relative flex-shrink-0 snap-center">
                <img src="/offer-cards/sbi card.png" alt="SBI Card" className="w-64 md:w-80 h-auto rounded-xl shadow-lg"/>
                <div className="absolute top-1/2 right-2 md:right-6 transform -translate-y-1/2 text-white text-left w-[55%] md:w-[60%]">
                  <h3 className="text-sm md:text-lg font-bold">Earn Rs. 600</h3>
                  <p className="text-xs md:text-sm opacity-80">by using your SBI card</p>
                  <p className="text-xs opacity-60 hidden md:block">More than 400 users have earned Rs. 2,40,000 in last 30 days</p>
                </div>
              </div>
              <div className="relative flex-shrink-0 snap-center">
                <img src="/offer-cards/hsbc card.png" alt="HSBC Card" className="w-64 md:w-80 h-auto rounded-xl shadow-lg"/>
                <div className="absolute top-1/2 right-2 md:right-6 transform -translate-y-1/2 text-black text-left w-[55%] md:w-[60%]">
                  <h3 className="text-sm md:text-lg font-bold">Earn Rs. 700</h3>
                  <p className="text-xs md:text-sm opacity-80">by using your HSBC card</p>
                  <p className="text-xs opacity-60 hidden md:block">More than 300 users have earned Rs. 1,90,000 in last 30 days</p>
                </div>
              </div>
              <div className="md:hidden w-8 flex-shrink-0"></div>
            </div>
            <button onClick={scrollRight} className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-brand-teal text-white shadow-lg flex-shrink-0 hover:bg-brand-teal/80 transition-colors">
              <span className="text-xl">›</span>
            </button>
          </div>
          <div className="flex justify-center space-x-4 mt-6 md:hidden">
            <button onClick={scrollLeft} className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-teal text-white shadow-lg hover:bg-brand-teal/80 transition-colors">
              <span className="text-xl">‹</span>
            </button>
            <button onClick={scrollRight} className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-teal text-white shadow-lg hover:bg-brand-teal/80 transition-colors">
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>
      </section>

      <section id="get-started" className="container py-20">
        <div className="relative">
          <div className="absolute inset-0 hero-gradient rounded-3xl opacity-5"></div>
          <div className="card relative z-10 text-center py-12">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Ready to start with PeerPays?</h3>
            <p className="text-brand-navy/75 text-lg mb-8 max-w-2xl mx-auto">Create your profile and post requirements in minutes. Join thousands of users already maximizing their credit potential.</p>
            <button
              onClick={openGetStartedModal}
              className="btn btn-primary text-lg px-10 py-4"
            >
              Join PeerPays
            </button>
          </div>
        </div>
      </section>
    </>
  );
}