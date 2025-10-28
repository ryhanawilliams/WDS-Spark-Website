import React from 'react';

const FAQ = () => {
  const faqItems = [
    "What is Overhaul?",
    "What is a hackathon?",
    "I don't know how to code. Can I still attend?",
    "How much does it cost anything?",
    "Do I need to bring my own team?",
    "Will there be food and drinks provided?",
    "I'm a recently graduated student. Can I still apply?",
    "I don't attend a Canadian university. Can I still apply?"
  ];

  return (
    <section className="relative bg-gradient-to-b from-sky-blue to-lime-green py-20 overflow-hidden" style={{
      clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)'
    }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Clouds */}
        <div className="absolute top-16 left-16 w-24 h-16 bg-white rounded-full opacity-90"></div>
        <div className="absolute top-12 left-32 w-20 h-12 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-20 right-40 w-28 h-18 bg-white rounded-full opacity-85"></div>
        <div className="absolute top-32 right-16 w-22 h-14 bg-white rounded-full opacity-75"></div>
        
        {/* Hills at bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-lime-green"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-green-400 transform -skew-y-1"></div>
        <div className="absolute bottom-0 right-0 w-full h-16 bg-green-500 transform skew-y-1"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <h2 className="text-white text-4xl font-bold mb-12 text-center">FAQ</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((question, index) => (
              <div key={index} className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all cursor-pointer">
                <span className="text-white font-medium">{question}</span>
                <span className="text-white text-xl font-bold">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
