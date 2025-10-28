import React from 'react';

const Sponsors = () => {
  const handleSponsorClick = () => {
    window.open('mailto:ryhana.williams0@gmail.com?subject=Sponsorship Inquiry', '_blank');
  };

  return (
    <section className="relative bg-lime-green py-20 overflow-hidden" style={{
      clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)'
    }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-accent transform rotate-45"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-orange-accent transform rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-orange-accent transform rotate-45"></div>
        <div className="absolute top-40 left-60 w-5 h-5 bg-pink-400 transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400 transform -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10 text-center">
        <h2 className="text-dark-green text-4xl font-bold mb-8">Want to Sponsor?</h2>
        <p className="text-dark-green text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Contact us at ryhana.williams0@gmail.com
        </p>
        <button 
          onClick={handleSponsorClick}
          className="bg-orange-accent text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-colors"
        >
          Become a Sponsor
        </button>
      </div>
    </section>
  );
};

export default Sponsors;
