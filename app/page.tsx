"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useGetStartedModal } from "../components/ClientLayout";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const openGetStartedModal = useGetStartedModal();
  const [showEmail, setShowEmail] = useState(false);

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

  const scrollTestimonialLeft = () => {
    if (testimonialScrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 304 : 920;
      testimonialScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollTestimonialRight = () => {
    if (testimonialScrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 304 : 920;
      testimonialScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let currentIndex = 0;
    const totalCards = 4;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        currentIndex = (currentIndex + 1) % totalCards;
        const cardWidth = window.innerWidth < 768 ? 272 : 336;
        const scrollPosition = currentIndex * cardWidth;
        
        scrollRef.current.scrollTo({ 
          left: scrollPosition, 
          behavior: 'smooth' 
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let testimonialIndex = 0;
    const totalTestimonials = 6;
    
    const testimonialInterval = setInterval(() => {
      if (testimonialScrollRef.current) {
        testimonialIndex = (testimonialIndex + 1) % (totalTestimonials / 3);
        const scrollPosition = testimonialIndex * (window.innerWidth < 768 ? 304 : 920);
        
        testimonialScrollRef.current.scrollTo({ 
          left: scrollPosition, 
          behavior: 'smooth' 
        });
      }
    }, 4000);

    return () => clearInterval(testimonialInterval);
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
              <div className="absolute top-8 left-2 md:left-4 z-30 opacity-0 animate-slide-in-left">
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
              <div className="absolute top-12 md:top-16 right-2 md:right-4 z-20 opacity-0 animate-slide-in-right animation-delay-200">
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
                  onClick={openGetStartedModal || undefined}
                  className="btn btn-primary text-base px-6 py-3"
                >
                  Get started
                </button>
                <Link href="/how-it-works" className="btn btn-ghost text-base px-6 py-3">How it works</Link>
              </div>
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
                  onClick={openGetStartedModal || undefined}
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Get started
                </button>
                <Link href="/how-it-works" className="btn btn-ghost text-lg px-8 py-4">How it works</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-gray-50/50 pt-6 pb-12 md:pt-8 md:pb-20 border-t border-gray-200">
        <div className="container">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-brand-teal/10 rounded-full mb-3 md:mb-4">
              <span className="text-brand-teal font-medium text-xs md:text-sm">Why PeerPays?</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-brand-navy mb-4 md:mb-6 leading-tight">
              Why choose <span className="text-brand-teal">PeerPays</span>?
            </h2>
            <p className="text-brand-navy/70 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              Transform your unused credit into earning opportunities while helping others access better financial deals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              ["Earn from unused credit", "Turn idle credit limits into a steady secondary income stream with zero risk."],
              ["Maximize card rewards", "Hit spend milestones effortlessly and never miss out on 10X offers again."],
              ["Safe & transparent", "Complete transparency in all transactions with detailed reporting."],
            ].map(([title, desc], index) => (
              <div key={title} className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl border border-gray-200 hover:shadow-lg hover:bg-brand-teal/5 hover:border-brand-teal/30 transition-all duration-300 text-center group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-brand-teal font-bold text-base md:text-lg">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-brand-navy mb-2 md:mb-3">{title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-6 pb-12 md:pt-8 md:pb-20 border-t border-gray-200">
        <div className="container">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-brand-teal/10 rounded-full mb-3 md:mb-4">
              <span className="text-brand-teal font-medium text-xs md:text-sm">Testimonials</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-brand-navy mb-4 md:mb-6 leading-tight">
              What Our <span className="text-brand-teal">Users Say</span>
            </h2>
            <p className="text-brand-navy/70 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied users who are maximizing their credit potential with PeerPays
            </p>
          </div>
          
          <div className="md:flex md:items-center md:space-x-6 md:justify-center -mt-4">
            <button onClick={scrollTestimonialLeft} className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-brand-teal text-white shadow-lg flex-shrink-0 hover:bg-brand-teal/80 transition-colors">
              <span className="text-xl">‹</span>
            </button>
            <div ref={testimonialScrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide w-full md:w-[920px] snap-x snap-mandatory">
              {[
                ["Pranjal Khule", "Software Engineer", "PeerPays helped me earn ₹15,000 extra income last month just by sharing my unused credit limit. Amazing platform!", "5"],
                ["Samruddhi Patil", "Marketing Manager", "I finally hit my credit card milestone and got 10X rewards on my vacation booking. Thank you PeerPays!", "5"],
                ["Vaibhav Nanne", "Business Owner", "Safe, transparent, and profitable. PeerPays has become my go-to platform for maximizing credit card benefits.", "5"],
                ["Gaurav Gangurde", "Data Analyst", "The transparency and ease of use is incredible. I've been earning consistently for 6 months now!", "5"],
                ["Atharva Fulari", "Teacher", "Perfect side income! I earn ₹8,000-12,000 monthly without any effort. Highly recommended!", "5"],
                ["Aman Garg", "Freelancer", "Finally found a legitimate way to monetize my credit cards. The support team is also very helpful.", "5"],
              ].map(([name, role, testimonial, rating], index) => (
                <div key={name} className="relative bg-gradient-to-br from-brand-navy to-brand-teal px-3 py-4 md:px-4 md:py-6 rounded-lg text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 mt-8 md:mt-12 flex-shrink-0 w-64 md:w-72 snap-center">
                  <div className="absolute -top-8 md:-top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-3 md:border-4 border-white shadow-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <img 
                      src={`/testimonials/${name.split(' ')[0].toLowerCase() === 'atharva' ? 'atharva' : name.split(' ')[0].toLowerCase()}.png`}
                      alt={name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <span className="text-brand-navy font-bold text-xl hidden">{name.charAt(0)}</span>
                  </div>
                  <div className="absolute top-4 right-4 text-6xl opacity-10 font-bold">"
                  </div>
                  <div className="pt-4 md:pt-6 mb-3 md:mb-4 text-center">
                    <h4 className="font-bold text-white text-sm md:text-base">{name}</h4>
                    <p className="text-white/80 text-xs">{role}</p>
                  </div>
                  <div className="flex justify-center mb-3 md:mb-4">
                    {[...Array(parseInt(rating))].map((_, i) => (
                      <span key={i} className="text-yellow-300 text-base md:text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 leading-relaxed italic text-xs md:text-sm text-center">"{testimonial}"</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-b-2xl"></div>
                </div>
              ))}
            </div>
            <button onClick={scrollTestimonialRight} className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-brand-teal text-white shadow-lg flex-shrink-0 hover:bg-brand-teal/80 transition-colors">
              <span className="text-xl">›</span>
            </button>
          </div>
          <div className="flex justify-center space-x-4 mt-6 md:hidden">
            <button onClick={scrollTestimonialLeft} className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-teal text-white shadow-lg hover:bg-brand-teal/80 transition-colors">
              <span className="text-xl">‹</span>
            </button>
            <button onClick={scrollTestimonialRight} className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-teal text-white shadow-lg hover:bg-brand-teal/80 transition-colors">
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-gray-900 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Trending Offers</h2>
            <p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Check out the latest trending offers and start your rewarding journey</p>
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

      <section id="get-started" className="container mt-8 md:mt-16 px-4">
        <div className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-xl md:rounded-2xl p-4 md:p-8 text-center text-white">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">Ready to start with PeerPays?</h2>
          <p className="text-sm md:text-lg mb-4 md:mb-6 opacity-90">
            Create your profile and post requirements in minutes. Join thousands of users already maximizing their credit potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button 
              onClick={openGetStartedModal || undefined}
              className="bg-white text-brand-navy px-5 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Join PeerPays Now
            </button>
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="relative overflow-hidden min-w-32 md:min-w-48 bg-white/20 text-white border border-white/30 px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors text-xs md:text-base"
            >
              <span className={`transition-all duration-500 ${showEmail ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'}`}>
                Contact Us
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 text-xs md:text-base ${showEmail ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'}`}>
                omkar@peerpays.in
              </span>
            </button>
          </div>
          {showEmail && (
            <div className="mt-4 animate-pulse">
              <p className="text-white/80 text-sm">Click to copy email</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}