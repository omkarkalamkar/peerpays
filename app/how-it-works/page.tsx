export default function HowItWorks() {
  const steps = [
    ["📝", "Post a requirement", "Share spend amount, categories, and commission you'll offer."],
    ["🤝", "Match with card holders", "We surface verified profiles that fit your need."],
    ["💳", "Complete the transaction", "Payments are done using safe flows—no card details shared."],
    ["📊", "Earn & track", "Both sides see clear earnings and rewards progress."],
  ];
  return (
    <section className="container py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">How it works</h1>
        <p className="text-brand-navy/75 text-lg max-w-2xl mx-auto">Simple, secure, and transparent process that benefits everyone</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {steps.map(([icon, title, desc], idx) => (
          <div key={idx} className="step-card group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center text-2xl group-hover:bg-brand-teal/20 transition-colors">
                  {icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="badge mb-3">Step {idx+1}</div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">{title}</h3>
                <p className="text-brand-navy/75 leading-relaxed">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-lg px-8 py-4"
        >
          Get started now
        </a>
      </div>
    </section>
  );
}