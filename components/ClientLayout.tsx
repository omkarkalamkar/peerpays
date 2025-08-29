"use client";

import { useState, ReactNode, createContext, useContext } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Nav from "./Nav";

const ModalContext = createContext<(() => void) | null>(null);

export const useGetStartedModal = () => {
  const context = useContext(ModalContext);
  return context;
};

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);

  const openModal = () => setShowGetStartedModal(true);

  return (
    <ModalContext.Provider value={openModal}>
      <Nav onGetStarted={openModal} />
      <main className="min-h-[70vh] pt-32 md:pt-28">{children}</main>
      
      {/* Get Started Modal */}
      {showGetStartedModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xs w-full shadow-xl">
            <div className="p-5">
              <div className="flex justify-end items-center mb-6">
                <button onClick={() => setShowGetStartedModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-brand-navy mb-2">Do you have credit cards?</h3>
                <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-lg p-3 mt-4">
                  <p className="text-brand-teal text-sm font-medium">App is under development, but you can <span className="text-green-600 font-bold">start earning now!</span></p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/919340988336?text=Hi, I have credit cards and want to start earning with PeerPays"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-teal text-white py-3 px-4 rounded-xl font-medium hover:bg-brand-teal/90 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>✓</span>
                  Yes, I have cards
                </a>
                
                <Link
                  href="/credit-cards"
                  className="w-full bg-brand-navy text-white py-3 px-4 rounded-xl font-medium hover:bg-brand-navy/90 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                  onClick={() => setShowGetStartedModal(false)}
                >
                  <span className="text-lg font-bold">✗</span>
                  No, help me get one
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}