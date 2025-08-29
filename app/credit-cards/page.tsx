"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Filter, Search, ArrowRight, X, Plus } from "lucide-react";

const creditCards = [
  {
    id: 1,
    name: "SBI Cashback",
    bank: "SBI Card",
    linkKey: "sbi-cashback",
    image: "/credit-card-images/SBI-Cashback.webp",
    rating: 4.8,
    reviews: 2450,
    joinFee: "₹999",
    annualFee: "₹999",
    rewards: "5% cashback online, 1% offline",
    welcomeBonus: "₹2,000 cashback on ₹20K spends",
    category: "Cashback",
    features: ["5% online cashback", "1% offline cashback", "No cashback cap", "Fuel surcharge waiver"],
    eligibility: "₹1.5L+ annual income",
    creditLimit: "₹50K - ₹10L",
    processingTime: "5-7 days"
  },
  {
    id: 2,
    name: "Tata Neu Infinity HDFC Bank",
    bank: "HDFC Bank",
    linkKey: "tata-neu-infinity",
    image: "/credit-card-images/Tata Neu Infinity HDFC Bank.webp",
    rating: 4.7,
    reviews: 1890,
    joinFee: "₹1,499",
    annualFee: "₹1,499",
    rewards: "5% on Tata brands, 1.5% others",
    welcomeBonus: "5,000 NeuCoins worth ₹500",
    category: "Shopping",
    features: ["5% on Tata brands", "NeuCoins rewards", "BigBasket benefits", "Croma discounts"],
    eligibility: "₹2L+ annual income",
    creditLimit: "₹1L - ₹8L",
    processingTime: "5-8 days"
  },
  {
    id: 3,
    name: "American Express SmartEarn",
    bank: "American Express",
    linkKey: "amex-smartearn",
    image: "/credit-card-images/American Express SmartEarn.webp",
    rating: 4.5,
    reviews: 1250,
    joinFee: "₹495",
    annualFee: "₹495",
    rewards: "5X on Amazon, 2X on others",
    welcomeBonus: "2,000 reward points",
    category: "Premium",
    features: ["5X on Amazon", "2X on other spends", "Global acceptance", "Travel insurance"],
    eligibility: "₹2.5L+ annual income",
    creditLimit: "₹1L - ₹10L",
    processingTime: "7-10 days"
  },
  {
    id: 4,
    name: "HDFC Diners Club Metal Edition",
    bank: "HDFC Bank",
    linkKey: "hdfc-diners-metal",
    image: "/credit-card-images/HDFC Diners Club Metal Edition.webp",
    rating: 4.5,
    reviews: 980,
    joinFee: "₹10,000",
    annualFee: "₹10,000",
    rewards: "10X on dining, 5X on travel",
    welcomeBonus: "₹10,000 reward points",
    category: "Premium",
    features: ["10X dining rewards", "Airport lounge access", "Golf privileges", "Concierge services"],
    eligibility: "₹20L+ annual income",
    creditLimit: "₹5L - ₹25L",
    processingTime: "10-15 days"
  },
  {
    id: 5,
    name: "Axis Bank MyZone",
    bank: "Axis Bank",
    linkKey: "axis-myzone",
    image: "/credit-card-images/Axis Bank MyZone.webp",
    rating: 4.5,
    reviews: 1150,
    joinFee: "₹500",
    annualFee: "₹500",
    rewards: "4X on dining, 2X on others",
    welcomeBonus: "₹500 gift voucher",
    category: "Lifestyle",
    features: ["4X dining rewards", "Movie ticket discounts", "Fuel surcharge waiver", "EMI conversion"],
    eligibility: "₹1.5L+ annual income",
    creditLimit: "₹75K - ₹5L",
    processingTime: "5-8 days"
  },
  {
    id: 6,
    name: "Club Vistara IDFC FIRST Bank",
    bank: "IDFC FIRST Bank",
    linkKey: "club-vistara",
    image: "/credit-card-images/Club Vistara IDFC FIRST Bank.webp",
    rating: 4.8,
    reviews: 750,
    joinFee: "₹4,999",
    annualFee: "₹4,999",
    rewards: "6 CV Points per ₹200 on travel",
    welcomeBonus: "5,000 CV Points + Silver status",
    category: "Travel",
    features: ["Vistara Silver status", "Priority check-in", "Extra baggage", "Lounge access"],
    eligibility: "₹6L+ annual income",
    creditLimit: "₹2L - ₹15L",
    processingTime: "7-12 days"
  },
  {
    id: 7,
    name: "IDFC FIRST Bank Select",
    bank: "IDFC FIRST Bank",
    linkKey: "idfc-select",
    image: "/credit-card-images/IDFC FIRST Bank Select.webp",
    rating: 4.8,
    reviews: 1320,
    joinFee: "Free",
    annualFee: "Free",
    rewards: "6X on dining & groceries",
    welcomeBonus: "₹1,000 reward points",
    category: "Lifestyle",
    features: ["6X dining & groceries", "No annual fee", "Airport lounge access", "Fuel surcharge waiver"],
    eligibility: "₹1.5L+ annual income",
    creditLimit: "₹50K - ₹8L",
    processingTime: "5-7 days"
  },
  {
    id: 8,
    name: "SBI SimplyCLICK",
    bank: "SBI Card",
    linkKey: "sbi-simplyclick",
    image: "/credit-card-images/SBI-simplyclick.webp",
    rating: 4.7,
    reviews: 1890,
    joinFee: "₹499",
    annualFee: "₹499",
    rewards: "10X on online spends",
    welcomeBonus: "₹500 Amazon voucher",
    category: "Cashback",
    features: ["10X online rewards", "Movie ticket offers", "Dining discounts", "Fuel benefits"],
    eligibility: "₹1L+ annual income",
    creditLimit: "₹50K - ₹5L",
    processingTime: "3-5 days"
  },
  {
    id: 9,
    name: "IDFC FIRST Bank Wow",
    bank: "IDFC FIRST Bank",
    linkKey: "idfc-wow",
    image: "/credit-card-images/IDFC FIRST Bank Wow.webp",
    rating: 4.7,
    reviews: 650,
    joinFee: "Free",
    annualFee: "Free",
    rewards: "2X on all spends",
    welcomeBonus: "₹500 cashback",
    category: "Lifestyle",
    features: ["2X on all spends", "Student friendly", "No annual fee", "Easy approval"],
    eligibility: "₹1L+ annual income",
    creditLimit: "₹25K - ₹3L",
    processingTime: "3-5 days"
  },
  {
    id: 10,
    name: "Amazon Pay ICICI Bank",
    bank: "ICICI Bank",
    linkKey: "amazon-pay-icici",
    image: "/credit-card-images/Amazon Pay ICICI Bank.webp",
    rating: 4.7,
    reviews: 2100,
    joinFee: "Free",
    annualFee: "Free",
    rewards: "5% on Amazon, 2% others",
    welcomeBonus: "₹2,000 Amazon gift card",
    category: "Shopping",
    features: ["5% Amazon cashback", "Prime membership", "No annual fee", "Instant approval"],
    eligibility: "₹1.5L+ annual income",
    creditLimit: "₹50K - ₹8L",
    processingTime: "Instant approval"
  },
  {
    id: 11,
    name: "HDFC Bank Infinia Metal Edition",
    bank: "HDFC Bank",
    linkKey: "hdfc-infinia",
    image: "/credit-card-images/HDFC Bank Infinia Metal Edition.webp",
    rating: 4.7,
    reviews: 1250,
    joinFee: "₹12,500",
    annualFee: "₹12,500",
    rewards: "5X on all spends above ₹15K",
    welcomeBonus: "₹12,500 reward points",
    category: "Premium",
    features: ["5X unlimited rewards", "Airport lounge access", "Golf privileges", "Travel insurance"],
    eligibility: "₹25L+ annual income",
    creditLimit: "₹8L - ₹30L",
    processingTime: "10-15 days"
  },
  {
    id: 12,
    name: "Axis Bank Reserve",
    bank: "Axis Bank",
    linkKey: "axis-reserve",
    image: "/credit-card-images/Axis Bank Reserve.webp",
    rating: 4.7,
    reviews: 650,
    joinFee: "₹50,000",
    annualFee: "₹50,000",
    rewards: "Unlimited domestic lounge access",
    welcomeBonus: "₹50,000 welcome vouchers",
    category: "Premium",
    features: ["Unlimited lounge access", "Golf privileges", "Concierge services", "Travel insurance"],
    eligibility: "₹35L+ annual income",
    creditLimit: "₹10L - ₹50L",
    processingTime: "15-20 days"
  },
  {
    id: 13,
    name: "SBI SimplySAVE",
    bank: "SBI Card",
    linkKey: "sbi-simplysave",
    image: "/credit-card-images/Sbi-simplysave.webp",
    rating: 4.6,
    reviews: 1420,
    joinFee: "₹499",
    annualFee: "₹499",
    rewards: "5X on dining, groceries, movies",
    welcomeBonus: "₹500 gift voucher",
    category: "Shopping",
    features: ["5X on dining & groceries", "Movie ticket offers", "Fuel surcharge waiver", "EMI options"],
    eligibility: "₹1L+ annual income",
    creditLimit: "₹50K - ₹5L",
    processingTime: "3-5 days"
  },
  {
    id: 14,
    name: "Axis Bank Ace",
    bank: "Axis Bank",
    linkKey: "axis-ace",
    image: "/credit-card-images/Axis Bank Ace.webp",
    rating: 4.6,
    reviews: 950,
    joinFee: "₹499",
    annualFee: "₹499",
    rewards: "5% on bill payments via Google Pay",
    welcomeBonus: "₹500 cashback",
    category: "Cashback",
    features: ["5% Google Pay cashback", "Bill payment rewards", "Contactless payments", "Fuel benefits"],
    eligibility: "₹1.5L+ annual income",
    creditLimit: "₹75K - ₹5L",
    processingTime: "3-6 days"
  },
  {
    id: 15,
    name: "American Express Platinum",
    bank: "American Express",
    linkKey: "amex-platinum",
    image: "/credit-card-images/American Express Platinum.webp",
    rating: 4.6,
    reviews: 380,
    joinFee: "₹60,000",
    annualFee: "₹60,000",
    rewards: "Unlimited airport lounge access",
    welcomeBonus: "₹30,000 Taj voucher",
    category: "Premium",
    features: ["Unlimited lounge access", "Taj hotel benefits", "Travel insurance", "Concierge service"],
    eligibility: "₹25L+ annual income",
    creditLimit: "₹5L - ₹25L",
    processingTime: "10-15 days"
  }
];

const categories = ["All", "Premium", "Cashback", "Shopping", "Travel", "Lifestyle"];

export default function CreditCardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [compareList, setCompareList] = useState<typeof creditCards>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState({});
  const [affiliateLinks, setAffiliateLinks] = useState({});
  const [showRecommendationQuiz, setShowRecommendationQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});

  useEffect(() => {
    fetch('/affiliate-links.json')
      .then(res => res.json())
      .then(data => setAffiliateLinks(data))
      .catch(err => console.error('Failed to load affiliate links:', err));
  }, []);

  const addToCompare = (card: typeof creditCards[0]) => {
    const isAlreadyAdded = compareList.find(c => c.id === card.id);
    if (isAlreadyAdded) {
      setCompareList(compareList.filter(c => c.id !== card.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, card]);
    }
  };

  const removeFromCompare = (cardId) => {
    setCompareList(compareList.filter(c => c.id !== cardId));
  };

  const toggleFeatures = (cardId) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const quizQuestions = [
    {
      question: "What's your primary spending category?",
      options: [
        { text: "Online Shopping", value: "shopping" },
        { text: "Dining & Entertainment", value: "dining" },
        { text: "Travel & Hotels", value: "travel" },
        { text: "General Expenses", value: "general" }
      ]
    },
    {
      question: "What's your monthly credit card spending?",
      options: [
        { text: "Under ₹25,000", value: "low" },
        { text: "₹25,000 - ₹75,000", value: "medium" },
        { text: "₹75,000 - ₹1,50,000", value: "high" },
        { text: "Above ₹1,50,000", value: "premium" }
      ]
    },
    {
      question: "What's your annual income?",
      options: [
        { text: "₹3L - ₹6L", value: "entry" },
        { text: "₹6L - ₹15L", value: "mid" },
        { text: "₹15L - ₹25L", value: "high" },
        { text: "Above ₹25L", value: "premium" }
      ]
    }
  ];

  const getRecommendations = () => {
    const { spending, amount, income } = quizAnswers;
    let recommendations = [];

    if (spending === 'shopping' && amount === 'low') {
      recommendations = [creditCards[9], creditCards[7], creditCards[1]];
    } else if (spending === 'dining' && income === 'premium') {
      recommendations = [creditCards[3], creditCards[10], creditCards[0]];
    } else if (spending === 'travel' && amount === 'premium') {
      recommendations = [creditCards[11], creditCards[5], creditCards[14]];
    } else if (amount === 'premium' || income === 'premium') {
      recommendations = [creditCards[0], creditCards[10], creditCards[11]];
    } else {
      recommendations = [creditCards[0], creditCards[1], creditCards[6]];
    }

    return recommendations;
  };

  const handleQuizAnswer = (questionKey, value) => {
    const newAnswers = { ...quizAnswers, [questionKey]: value };
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Move to results after last question
      setTimeout(() => {
        setQuizStep(quizQuestions.length);
      }, 300);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setShowRecommendationQuiz(false);
  };

  const filteredCards = creditCards.filter(card => {
    const matchesCategory = selectedCategory === "All" || card.category === selectedCategory;
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.bank.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedCards = showAllCards ? filteredCards : filteredCards.slice(0, 6);

  return (
    <div className="-mt-8 pb-16">
      {/* Hero Section */}
      <section className="container mb-6 md:mb-8 px-4">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 md:mb-4 leading-tight">
            Find Your Perfect <span className="text-brand-teal">Credit Card</span>
          </h1>
          <p className="text-brand-navy/70 text-base md:text-lg max-w-2xl mx-auto px-4">
            Compare and apply for the best credit cards in India. Get instant approval and maximize your rewards.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-4 md:mb-6 px-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
            <input
              type="text"
              placeholder="Search credit cards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm md:text-base"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4 md:mb-6 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-brand-teal text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:p-4 z-40">
          <div className="container">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-brand-navy text-sm">Compare ({compareList.length}/3)</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowCompare(true)}
                    className="bg-brand-teal text-white px-3 py-1.5 rounded-lg hover:bg-brand-teal/90 text-sm"
                  >
                    Compare
                  </button>
                  <button 
                    onClick={() => setCompareList([])}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                  >
                    Clear
                  </button>
                </div>
              </div>
              <div className="flex gap-1 overflow-x-auto">
                {compareList.map(card => (
                  <div key={card.id} className="flex items-center gap-1 bg-brand-teal/10 px-2 py-1 rounded-full flex-shrink-0">
                    <span className="text-xs truncate max-w-20">{card.name}</span>
                    <button onClick={() => removeFromCompare(card.id)} className="text-brand-teal hover:text-brand-navy">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-brand-navy">Compare ({compareList.length}/3)</span>
                <div className="flex gap-2">
                  {compareList.map(card => (
                    <div key={card.id} className="flex items-center gap-2 bg-brand-teal/10 px-3 py-1 rounded-full">
                      <span className="text-sm">{card.name}</span>
                      <button onClick={() => removeFromCompare(card.id)} className="text-brand-teal hover:text-brand-navy">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowCompare(true)}
                  className="bg-brand-teal text-white px-4 py-2 rounded-lg hover:bg-brand-teal/90"
                >
                  Compare Now
                </button>
                <button 
                  onClick={() => setCompareList([])}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compare Modal */}
      {showCompare && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[95vh] md:max-h-[90vh] overflow-auto">
            <div className="p-4 md:p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-lg md:text-2xl font-bold text-brand-navy">Compare Credit Cards</h2>
              <button onClick={() => setShowCompare(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              {/* Mobile: Horizontal scroll */}
              <div className="md:hidden">
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {compareList.map(card => (
                    <div key={card.id} className="border border-gray-200 rounded-lg p-3 min-w-[280px] flex-shrink-0">
                      <h3 className="font-bold text-base text-brand-navy mb-1">{card.name}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{card.bank}</p>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span>Rating:</span>
                          <span className="font-semibold">{card.rating} ⭐</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Joining Fee:</span>
                          <span className="font-semibold">{card.joinFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Fee:</span>
                          <span className="font-semibold">{card.annualFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Credit Limit:</span>
                          <span className="font-semibold text-xs">{card.creditLimit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Processing:</span>
                          <span className="font-semibold text-xs">{card.processingTime}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-gray-600">Best For:</span>
                          <p className="font-semibold text-brand-teal text-xs">{card.rewards}</p>
                        </div>
                      </div>
                      <button className="w-full mt-3 bg-brand-teal text-white py-2 rounded-lg hover:bg-brand-teal/90 text-sm">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {compareList.map(card => (
                  <div key={card.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-lg text-brand-navy mb-2">{card.name}</h3>
                    <p className="text-gray-600 mb-4">{card.bank}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Rating:</span>
                        <span className="font-semibold">{card.rating} ⭐</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Joining Fee:</span>
                        <span className="font-semibold">{card.joinFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual Fee:</span>
                        <span className="font-semibold">{card.annualFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Credit Limit:</span>
                        <span className="font-semibold">{card.creditLimit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing:</span>
                        <span className="font-semibold">{card.processingTime}</span>
                      </div>
                      <div className="pt-2">
                        <span className="text-gray-600">Best For:</span>
                        <p className="font-semibold text-brand-teal">{card.rewards}</p>
                      </div>
                    </div>
                    <a 
                      href={affiliateLinks[card.linkKey] || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-4 bg-brand-teal text-white py-2 rounded-lg hover:bg-brand-teal/90 text-center block"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cards Grid */}
      <section className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedCards.map((card) => (
            <div key={card.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              {/* Card Image */}
              <div className="p-4 md:p-6 pb-2 relative">
                {/* Ranking Badge */}
                <div className="absolute top-2 left-2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg bg-gradient-to-r from-brand-navy to-brand-teal">
                  #{card.id}
                </div>
                <div className="relative w-full h-32 md:h-40 mb-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={`${card.name} credit card`}
                    fill
                    className="object-contain p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-teal rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-white text-sm md:text-base font-bold">{card.name}</span>
                  </div>
                </div>
              </div>
              
              {/* Card Header */}
              <div className="px-4 md:px-6 pb-3 md:pb-4">
                <div className="mb-3 md:mb-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg md:text-xl font-bold text-brand-navy flex-1">{card.name}</h3>
                    {card.id <= 3 && (
                      <div className="ml-2 px-2 py-1 rounded-full text-xs font-bold bg-brand-teal/10 text-brand-teal">
                        {card.id === 1 ? '🏆 BEST' : card.id === 2 ? '🥈 TOP' : '🥉 GREAT'}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">{card.bank}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-xs md:text-sm">{card.rating}</span>
                  </div>
                  <span className="text-gray-500 text-xs md:text-sm">({card.reviews} reviews)</span>
                </div>

                {/* Key Features */}
                <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">Joining Fee:</span>
                    <span className="font-semibold text-brand-navy">{card.joinFee}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">Annual Fee:</span>
                    <span className="font-semibold text-brand-navy">{card.annualFee}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">Best For:</span>
                    <span className="font-semibold text-brand-teal text-right ml-2">{card.rewards}</span>
                  </div>
                </div>

                {/* Welcome Bonus */}
                <div className="bg-brand-teal/10 rounded-lg p-2.5 md:p-3 mb-3 md:mb-4">
                  <p className="text-xs md:text-sm text-brand-teal font-semibold">
                    🎁 Welcome Bonus: {card.welcomeBonus}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-3 md:mb-4">
                  <p className="text-xs md:text-sm text-gray-600 mb-1.5 md:mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {(expandedFeatures[card.id] ? card.features : card.features.slice(0, 2)).map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 md:py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {card.features.length > 2 && (
                      <button 
                        onClick={() => toggleFeatures(card.id)}
                        className="text-xs text-brand-teal hover:text-brand-navy cursor-pointer"
                      >
                        {expandedFeatures[card.id] ? 'Show less' : `+${card.features.length - 2} more`}
                      </button>
                    )}
                  </div>
                </div>

                {/* Eligibility */}
                <p className="text-xs text-gray-500 mb-3 md:mb-4">
                  Min. Income: {card.eligibility}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <div className="flex gap-2">
                  <a 
                    href={affiliateLinks[card.linkKey] || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-teal text-white py-2 px-3 md:px-4 rounded-lg font-semibold hover:bg-brand-teal/90 transition-colors flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                  >
                    Apply Now
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  </a>
                  <button 
                    onClick={() => addToCompare(card)}
                    disabled={compareList.length >= 3 && !compareList.find(c => c.id === card.id)}
                    className={`px-3 md:px-4 py-2 rounded-lg transition-all duration-200 text-sm md:text-base font-semibold ${
                      compareList.find(c => c.id === card.id) 
                        ? 'bg-brand-teal text-white shadow-md transform scale-105 hover:bg-red-500' 
                        : compareList.length >= 3 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-brand-navy text-white hover:bg-brand-navy/90 hover:shadow-lg hover:transform hover:scale-105'
                    }`}
                  >
                    {compareList.find(c => c.id === card.id) ? '✓ Added' : 'Compare'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayedCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No credit cards found matching your criteria.</p>
          </div>
        )}
        
        {!showAllCards && filteredCards.length > 6 && (
          <div className="text-center mt-6 md:mt-8">
            <button 
              onClick={() => setShowAllCards(true)}
              className="bg-brand-navy text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-brand-navy/90 transition-colors flex items-center gap-2 mx-auto text-sm md:text-base"
            >
              <Plus className="h-4 w-4 md:h-5 md:w-5" />
              Show More Cards ({filteredCards.length - 6} more)
            </button>
          </div>
        )}
      </section>

      {/* Recommendation Quiz Modal */}
      {showRecommendationQuiz && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            {quizStep < quizQuestions.length ? (
              <div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Question {quizStep + 1} of {quizQuestions.length}</span>
                    <button onClick={resetQuiz} className="text-gray-400 hover:text-gray-600">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-brand-teal h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-6">
                  {quizQuestions[quizStep].question}
                </h3>
                <div className="space-y-3">
                  {quizQuestions[quizStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(
                        quizStep === 0 ? 'spending' : quizStep === 1 ? 'amount' : 'income',
                        option.value
                      )}
                      className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-brand-teal hover:bg-brand-teal/5 transition-colors"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-brand-navy">Your Recommendations</h3>
                  <button onClick={resetQuiz} className="text-gray-400 hover:text-gray-600">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-600 mb-6">Based on your preferences, here are the best cards for you:</p>
                <div className="space-y-4">
                  {getRecommendations().map((card, index) => (
                    <div key={card.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-brand-navy">{card.name}</h4>
                        <p className="text-sm text-gray-600">{card.rewards}</p>
                      </div>
                      <a
                        href={affiliateLinks[card.linkKey] || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-teal text-white px-3 py-1 rounded text-sm hover:bg-brand-teal/90"
                      >
                        Apply
                      </a>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={resetQuiz}
                  className="w-full mt-6 bg-brand-navy text-white py-2 rounded-lg hover:bg-brand-navy/90"
                >
                  Take Quiz Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="container mt-12 md:mt-16 px-4">
        <div className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-2xl p-6 md:p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need Help Choosing?</h2>
          <p className="text-base md:text-lg mb-5 md:mb-6 opacity-90">
            Get personalized credit card recommendations based on your spending patterns
          </p>
          <button 
            onClick={() => setShowRecommendationQuiz(true)}
            className="bg-white text-brand-navy px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
          >
            Get Recommendations
          </button>
        </div>
      </section>
    </div>
  );
}