import React from 'react';

const Testimonials = () => {
  return (
    <section className="relative bg-teal-water py-20 overflow-hidden" style={{
      clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)'
    }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 bg-green-300 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-32 w-12 h-12 bg-green-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-green-300 rounded-full opacity-70"></div>
        <div className="absolute top-40 left-60 w-8 h-8 bg-white rounded-full opacity-80"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-60 right-60 w-10 h-10 bg-white rounded-full opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <h2 className="text-white text-4xl font-bold mb-12 text-right">Testimonials</h2>
        
        <div className="space-y-8">
          {/* First testimonial */}
          <div className="max-w-2xl">
            <h3 className="text-white font-bold text-xl mb-2">Hacker Name (pronouns)</h3>
            <p className="text-white text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          {/* Second testimonial */}
          <div className="max-w-2xl ml-auto text-right">
            <h3 className="text-white font-bold text-xl mb-2">Hacker Name (pronouns)</h3>
            <p className="text-white text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
