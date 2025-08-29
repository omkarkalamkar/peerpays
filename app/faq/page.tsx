'use client';
import { useState } from 'react';

type QA = { q: string; a: React.ReactNode };

const faqs: QA[] = [
  { q: "Is PeerPays legal?", a: "PeerPays enables compliant usage when done within permissible limits. Always follow your card issuer's T&Cs and applicable laws." },
  { q: "Do I need to share my card details?", a: "No. Our flow avoids sharing sensitive card numbers or CVV. Verified holders transact through safe channels." },
  { q: "What fees or commissions apply?", a: "You can set commissions per requirement. Platform fees, if any, are shown upfront—no surprises." },
  { q: "How do I get support?", 
    a: (
      <>
        Reach us at <strong className="text-brand-teal">omkar@peerpays.in</strong>
      </>
    ) },
  { q: "How quickly can I start earning?", a: "Once your profile is verified, you can start posting requirements or responding to others immediately. Most users see their first transaction within 24-48 hours." },
  { q: "What types of purchases are supported?", a: "We support most online purchases including e-commerce, travel bookings, subscription services, and more. Restricted categories are clearly outlined in our terms." },
];

export default function FAQPage() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      <section className="container -mt-20 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-brand-teal/10 rounded-full mb-6">
            <span className="text-brand-teal font-medium text-sm">Support</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4 md:mb-6">Frequently Asked <span className="text-brand-teal">Questions</span></h1>
          <p className="text-brand-navy/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Everything you need to know about PeerPays and how it works</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((item, idx) => (
            <details key={item.q} className="group bg-white rounded-lg border border-gray-200 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300 open:bg-brand-teal/5 open:border-brand-teal/50">
              <summary className="cursor-pointer list-none p-4 md:p-5 flex justify-between items-center">
                <span className="text-base md:text-lg font-semibold text-brand-navy group-hover:text-brand-teal transition-colors pr-4">{item.q}</span>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <span className="text-brand-teal group-open:rotate-180 transition-transform duration-300 text-sm">▼</span>
                </div>
              </summary>
              <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-brand-navy/75 text-sm md:text-base leading-relaxed">{item.a}</div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-gray-50/50 py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Still have questions?</h2>
          <p className="text-brand-navy/60 mb-8 text-base md:text-lg">Can't find the answer you're looking for? Get in touch with our team.</p>
          <button
            onClick={() => setShowEmail(!showEmail)}
            className={`relative overflow-hidden min-w-48 px-8 py-4 rounded-lg font-semibold text-base transition-colors duration-500 ${
              showEmail 
                ? 'bg-brand-teal hover:bg-brand-teal/90 text-white' 
                : 'bg-brand-navy hover:bg-brand-navy/90 text-white'
            }`}
          >
            <span className={`transition-all duration-500 ${showEmail ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'}`}>
              Contact us
            </span>
            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 text-base ${showEmail ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'}`}>
              omkar@peerpays.in
            </span>
          </button>
          {showEmail && (
            <div className="mt-4 animate-pulse">
              <p className="text-brand-teal text-sm">Click to copy email</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
