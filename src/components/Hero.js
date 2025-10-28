import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [currentWord, setCurrentWord] = useState(0);

  const navItems = ['HOME', 'ABOUT', 'TESTIMONIALS', 'SPONSORS'];
  const rotatingWords = ['craft', 'learn', 'create'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500); // Change word every 2.5 seconds for smoother feel

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-hero-start to-hero-end">
      {/* Header positioned on top of the gradient */}
      <header className="absolute top-2 left-0 right-0 z-10 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img 
            src="/assets/WDS Logo.png" 
            alt="WDS Logo" 
            className="h-8 w-auto"
          />
          
          {/* Navigation Menu */}
          <nav className="flex space-x-12">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`text-white font-metropolis text-lg transition-all duration-200 hover:opacity-80 ${
                  activeTab === item ? 'font-bold' : 'font-thin'
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>
      
      {/* Stars in upper half */}
      <div className="absolute inset-0 z-5">
        <img 
          src="/assets/Star.png" 
          alt="Star" 
          className="absolute top-8 left-20 w-4 h-4 opacity-70 animate-bounce"
          style={{ animationDuration: '3s', animationDelay: '0s' }}
        />
        <img 
          src="/assets/Star.png" 
          alt="Star" 
          className="absolute top-12 right-32 w-3 h-3 opacity-60 animate-bounce"
          style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
        />
        <img 
          src="/assets/Star.png" 
          alt="Star" 
          className="absolute top-16 left-40 w-2 h-2 opacity-80 animate-bounce"
          style={{ animationDuration: '4s', animationDelay: '1s' }}
        />
        <img 
          src="/assets/Star.png" 
          alt="Star" 
          className="absolute top-10 right-60 w-3 h-3 opacity-75 animate-bounce"
          style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}
        />
        <img 
          src="/assets/Star.png" 
          alt="Star" 
          className="absolute top-20 left-60 w-2 h-2 opacity-65 animate-bounce"
          style={{ animationDuration: '2.8s', animationDelay: '2s' }}
        />
        <img 
          src="/assets/Star.png" 
          alt="Star" 
          className="absolute top-14 right-80 w-4 h-4 opacity-70 animate-bounce"
          style={{ animationDuration: '3.2s', animationDelay: '0.8s' }}
        />
        <img 
          src="/assets/Star.png" 
          alt="Star" 
          className="absolute top-18 left-80 w-3 h-3 opacity-60 animate-bounce"
          style={{ animationDuration: '4.2s', animationDelay: '1.2s' }}
        />
        <img 
          src="/assets/Star.png" 
          alt="Star" 
          className="absolute top-22 right-40 w-2 h-2 opacity-85 animate-bounce"
          style={{ animationDuration: '2.2s', animationDelay: '1.8s' }}
        />
      </div>
      
      {/* Rotating word text */}
      <div className="absolute left-32 top-32 z-40">
        <p className="text-white font-metropolis font-bold text-4xl">
          <span 
            key={currentWord}
            className="inline-block transition-all duration-700 ease-in-out transform animate-pulse"
            style={{
              animation: 'fadeInOut 2.5s ease-in-out infinite'
            }}
          >
            {rotatingWords[currentWord]}
          </span> <span className="opacity-50">at</span>
        </p>
        <h1 className="text-white font-metropolis font-bold text-7xl mt-2">
          Spark
        </h1>
        <p className="text-white font-metropolis font-bold text-2xl mt-4">
          January 31-February 1, 2025 · In-person event
        </p>
        
        {/* Join Waitlist Button */}
        <div className="relative hover:opacity-90 transition-opacity z-50 mt-2 ml-80">
          <img 
            src="/assets/Join Waitlist Button.png" 
            alt="Join Waitlist" 
            className="h-16 w-auto"
            style={{ transform: 'scale(0.85)' }}
          />
        </div>
        
        {/* Sky Lining under button */}
        <div className="relative z-40 mt-4 -ml-32">
          <img 
            src="/assets/Sky Lining.png" 
            alt="Sky Lining" 
            className="h-16 w-screen"
          />
        </div>
      </div>
      
      {/* Cloud1 behind grass and sun */}
      <div className="absolute bottom-0 right-0 z-10" style={{ paddingRight: '0px', transform: 'translateY(-120px)' }}>
        <img 
          src="/assets/Cloud1.png" 
          alt="Cloud" 
          className="h-auto w-auto"
        />
      </div>
      
      {/* Sun Background */}
      <div className="absolute top-0 right-0 z-20" style={{ paddingRight: '50px' }}>
        <img 
          src="/assets/Sun Background.png" 
          alt="Sun Background" 
          className="h-auto w-auto"
        />
      </div>
      
      {/* Sun */}
      <div className="absolute bottom-0 right-0 z-30" style={{ paddingRight: '30px', transform: 'translateY(-100px)' }}>
        <img 
          src="/assets/Sun.png" 
          alt="Sun" 
          className="h-auto w-auto"
          style={{ transform: 'scale(0.7)' }}
        />
      </div>
      
      {/* Grass at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-50" style={{ transform: 'translateY(150px)' }}>
        <img 
          src="/assets/Grass.png" 
          alt="Grass" 
          className="w-full h-auto object-contain"
        />
        
        {/* Flowers on grass */}
        <img 
          src="/assets/Flower1.png" 
          alt="Flower" 
          className="absolute bottom-4 left-16 w-6 h-6 z-60"
        />
        <img 
          src="/assets/Flower2.png" 
          alt="Flower" 
          className="absolute bottom-6 right-28 w-5 h-5 z-60"
        />
        <img 
          src="/assets/Flower3.png" 
          alt="Flower" 
          className="absolute bottom-8 left-48 w-7 h-7 z-60"
        />
        <img 
          src="/assets/Flower4.png" 
          alt="Flower" 
          className="absolute bottom-5 right-52 w-4 h-4 z-60"
        />
        <img 
          src="/assets/Flower1.png" 
          alt="Flower" 
          className="absolute bottom-7 left-72 w-6 h-6 z-60"
        />
      </div>
      
      {/* Blue gradient background */}
    </section>
  );
};

export default Hero;