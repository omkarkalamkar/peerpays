export default function HowItWorks() {
  const steps = [
    ["<div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-brand-teal rounded-full flex items-center justify-center shadow-xl'><svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'/></svg></div>", "Open Deals page", "Open Deals page on the PeerPays app, or click on push notification"],
    ["<div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-brand-teal rounded-full flex items-center justify-center shadow-xl'><svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'/></svg></div>", "Check discount eligibility", "Check if discount is applicable on the card on the PeerPays app itself"],
    ["<div className='w-16 h-16 bg-gradient-to-br from-green-500 to-brand-teal rounded-full flex items-center justify-center shadow-xl'><svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/></svg></div>", "Accept the deal", "Accept the deal if interested"],
    ["<div className='w-16 h-16 bg-gradient-to-br from-indigo-500 to-brand-teal rounded-full flex items-center justify-center shadow-xl'><svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'/></svg></div>", "Pay with credit card", "Pay for the product using your credit card"],
    ["<div className='w-16 h-16 bg-gradient-to-br from-yellow-500 to-brand-teal rounded-full flex items-center justify-center shadow-xl'><svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z'/></svg></div>", "Get commission & reimbursement", "Get commission & reimbursement in your wallet from PeerPays"],
    ["<div className='w-16 h-16 bg-gradient-to-br from-emerald-500 to-brand-teal rounded-full flex items-center justify-center shadow-xl'><svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z'/></svg></div>", "Withdraw to bank", "Withdraw money from wallet to your bank account"],
    ["<div className='w-16 h-16 bg-gradient-to-br from-red-500 to-brand-teal rounded-full flex items-center justify-center shadow-xl'><svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'/></svg></div>", "Get refund if needed", "Get refund directly from the e-commerce platform in case of cancellation / return"],
  ];
  return (
    <>
      <section className="container -mt-8 pt-0 pb-12 md:pt-0 md:pb-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-brand-teal/10 rounded-full mb-4 md:mb-6">
            <span className="text-brand-teal font-medium text-xs md:text-sm">How it works</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4 md:mb-6">How <span className="text-brand-teal">PeerPays</span> Works</h1>
          <p className="text-brand-navy/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Maximize your credit potential with our secure peer-to-peer platform</p>
          <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-lg p-3 mt-4 max-w-md mx-auto">
            <p className="text-brand-teal text-sm font-medium">App is under development, but you can start earning now!</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">For Cardholders</h3>
            <p className="text-brand-navy/70 text-base md:text-lg">Turn your unused credit into earning opportunities</p>
          </div>
          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-teal via-brand-navy to-brand-teal transform -translate-x-1/2"></div>
            
            {steps.map(([icon, title, desc], idx) => (
              <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-3 md:border-4 border-brand-teal shadow-xl flex items-center justify-center transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-brand-teal to-brand-navy rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs md:text-sm">{idx + 1}</span>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className={`w-5/12 ${idx % 2 === 0 ? 'mr-auto pr-2' : 'ml-auto pl-2'}`}>
                  <div className="bg-white p-3 md:p-6 rounded-lg md:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300 group">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div dangerouslySetInnerHTML={{ __html: icon }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-lg font-bold text-brand-navy mb-1 md:mb-2">{title}</h4>
                        <p className="text-brand-navy/70 text-xs md:text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar - Desktop Only */}
                    <div className="hidden md:flex mt-4 items-center space-x-2">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-brand-teal to-brand-navy rounded-full transition-all duration-1000"
                          style={{ width: `${((idx + 1) / steps.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-brand-navy/60 font-medium">{Math.round(((idx + 1) / steps.length) * 100)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Completion Badge */}
            <div className="relative flex justify-center mt-8">
              <div className="bg-gradient-to-r from-brand-navy to-brand-teal text-white px-4 py-2 md:px-8 md:py-4 rounded-full shadow-xl">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <svg className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="font-bold text-sm md:text-lg">Start Earning!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50/50 py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 md:mb-6">Ready to maximize your credit potential?</h2>
          <p className="text-brand-navy/75 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already earning extra income and maximizing their credit card rewards
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScSUn2RHGz_b8qAxaGYI4PH4DdRbOlTdnQ9WYzkr56TsX6XHA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-brand-navy to-brand-teal text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
          >
            Get started now
          </a>
        </div>
      </section>
    </>
  );
}