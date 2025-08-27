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
  return (
    <section className="container py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Frequently asked questions</h1>
        <p className="text-brand-navy/75 text-lg max-w-2xl mx-auto">Everything you need to know about PeerPays</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, idx) => (
          <details key={item.q} className="card group hover:shadow-xl transition-all duration-300">
            <summary className="cursor-pointer list-none text-lg font-semibold flex justify-between items-center py-2">
              <span className="text-brand-navy group-hover:text-brand-teal transition-colors">{item.q}</span>
              <span className="text-brand-teal group-open:rotate-180 transition-transform duration-300 text-xl">▼</span>
            </summary>
            <div className="mt-4 pt-4 border-t border-brand-navy/10">
              <p className="text-brand-navy/75 leading-relaxed">{item.a}</p>
            </div>
          </details>
        ))}
      </div>
      <div className="text-center mt-16">
        <p className="text-brand-navy/60 mb-6">Still have questions?</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
