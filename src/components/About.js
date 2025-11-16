import React from 'react';

const About = () => {
  return (
    <section className="relative bg-lime-green py-32 min-h-screen flex items-center overflow-hidden" style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
    }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-accent transform rotate-45"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-orange-accent transform rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-orange-accent transform rotate-45"></div>
        <div className="absolute top-40 left-60 w-5 h-5 bg-pink-400 transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400 transform -rotate-12"></div>
        <div className="absolute top-60 right-60 w-3 h-3 bg-blue-400 transform rotate-45"></div>
        <div className="absolute bottom-40 left-60 w-4 h-4 bg-pink-400 transform -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-12 relative z-10 w-full">
        {/* Title at the top */}
        <h2 className="text-white text-6xl font-bold mb-16 text-center">What is Spark</h2>
        
        <div className="flex items-start justify-between gap-12">
          {/* Image Gallery - 2x2 grid */}
          <div className="w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {/* Top row */}
              <div className="col-span-1">
                <img 
                  src="/assets/photo1.png" 
                  alt="Hackathon participants" 
                  className="w-full h-80 object-cover rounded-lg border-2 border-white shadow-lg"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src="/assets/photo2.png" 
                  alt="Hackathon participants" 
                  className="w-full h-80 object-cover rounded-lg border-2 border-white shadow-lg"
                />
              </div>
              
              {/* Bottom row */}
              <div className="col-span-1">
                <img 
                  src="/assets/photo3.png" 
                  alt="Hackathon participants" 
                  className="w-full h-80 object-cover rounded-lg border-2 border-white shadow-lg"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src="/assets/photo4.png" 
                  alt="Hackathon participants" 
                  className="w-full h-80 object-cover rounded-lg border-2 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-1/2 flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-white text-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-white text-xl leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
