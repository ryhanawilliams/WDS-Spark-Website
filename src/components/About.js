import React from 'react';

const About = () => {
  return (
    <section className="relative bg-lime-green py-20 overflow-hidden" style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
    }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-accent transform rotate-45"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-orange-accent transform rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-orange-accent transform rotate-45"></div>
        <div className="absolute top-40 left-60 w-5 h-5 bg-pink-400 transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400 transform -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex items-center justify-between">
          {/* Image Gallery */}
          <div className="w-1/2 pr-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Top row */}
              <div className="col-span-1">
                <img 
                  src="/assets/photo1.png" 
                  alt="Hackathon participants" 
                  className="w-full h-32 object-cover rounded-lg border-2 border-white"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src="/assets/photo2.png" 
                  alt="Hackathon participants" 
                  className="w-full h-24 object-cover rounded-lg border-2 border-white"
                />
              </div>
              
              {/* Middle row */}
              <div className="col-span-1">
                <img 
                  src="/assets/photo3.png" 
                  alt="Hackathon participants" 
                  className="w-full h-32 object-cover rounded-lg border-2 border-white"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src="/assets/photo4.png" 
                  alt="Hackathon participants" 
                  className="w-full h-24 object-cover rounded-lg border-2 border-white"
                />
              </div>
              
              {/* Bottom centered */}
              <div className="col-span-2 flex justify-center">
                <img 
                  src="/assets/DSC_0094.JPG" 
                  alt="Group of participants" 
                  className="w-1/2 h-24 object-cover rounded-lg border-2 border-white"
                />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-1/2 pl-8">
            <h2 className="text-dark-green text-4xl font-bold mb-6 text-right">What is Overhaul</h2>
            <p className="text-dark-green text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
