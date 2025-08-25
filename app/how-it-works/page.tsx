export default function HowItWorks() {
  const steps = [
    ["Post a requirement", "Share spend amount, categories, and commission you’ll offer."],
    ["Match with card holders", "We surface verified profiles that fit your need."],
    ["Complete the transaction", "Payments are done using safe flows—no card details shared."],
    ["Earn & track", "Both sides see clear earnings and rewards progress."],
  ];
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold">How it works</h1>
      <p className="text-brand-navy/75 mt-2">Same flow you saw on PiePay, now rebranded to PeerPays.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {steps.map(([title, desc], idx) => (
          <div key={idx} className="card">
            <div className="badge mb-2">Step {idx+1}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-brand-navy/75 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
