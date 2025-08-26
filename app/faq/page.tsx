type QA = { q: string; a: React.ReactNode };
const faqs: QA[] = [
  { q: "Is PeerPays legal?", a: "PeerPays enables compliant usage when done within permissible limits. Always follow your card issuer's T&Cs and applicable laws." },
  { q: "Do I need to share my card details?", a: "No. Our flow avoids sharing sensitive card numbers or CVV. Verified holders transact through safe channels." },
  { q: "What fees or commissions apply?", a: "You can set commissions per requirement. Platform fees, if any, are shown upfront no surprises." },
  { q: "How do I get support?", 
    a: (
      <>
        Reach us at <strong>omkar@peerpays.in</strong>
      </>
    ) },
];

export default function FAQPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Frequently asked questions</h1>
      <div className="mt-8 grid gap-4">
        {faqs.map((item) => (
          <details key={item.q} className="card group open:shadow-soft">
            <summary className="cursor-pointer list-none text-lg font-semibold flex justify-between items-center">
              {item.q}
              <span className="text-brand-teal group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-3 text-brand-navy/75">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
