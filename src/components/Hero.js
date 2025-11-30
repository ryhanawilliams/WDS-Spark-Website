import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [currentWord, setCurrentWord] = useState(0);

  const navItems = ['HOME', 'ABOUT', 'SPONSORS', 'FAQ'];
  const rotatingWords = ['craft', 'learn', 'create'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500); // Change word every 2.5 seconds for smoother feel

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Scroll detection to update active tab
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const sponsorsSection = document.getElementById('sponsors');
      const faqSection = document.getElementById('faq');
      
      if (faqSection) {
        const faqRect = faqSection.getBoundingClientRect();
        if (faqRect.top <= window.innerHeight && faqRect.bottom >= 0) {
          setActiveTab('FAQ');
          return;
        }
      }
      
      if (sponsorsSection) {
        const sponsorsRect = sponsorsSection.getBoundingClientRect();
        if (sponsorsRect.top <= window.innerHeight && sponsorsRect.bottom >= 0) {
          setActiveTab('SPONSORS');
          return;
        }
      }
      
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        if (aboutRect.top <= window.innerHeight && aboutRect.bottom >= 0) {
          setActiveTab('ABOUT');
          return;
        }
      }
      
      setActiveTab('HOME');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-hero-start to-hero-end overflow-x-hidden">
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
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item);
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
        </div>
      </header>
      
        {/* Stars spread across upper half */}
        <div className="absolute inset-0 z-5">
          {/* Top row - moved down */}
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-12 left-8 w-3 h-3 opacity-70 animate-bounce"
            style={{ animationDuration: '3s', animationDelay: '0s' }}
          />
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-14 right-16 w-2 h-2 opacity-60 animate-bounce"
            style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
          />
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-16 left-1/2 w-4 h-4 opacity-80 animate-bounce"
            style={{ animationDuration: '4s', animationDelay: '1s' }}
          />
          
          {/* Middle row - moved down */}
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-24 left-12 w-2 h-2 opacity-75 animate-bounce"
            style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}
          />
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-28 right-24 w-3 h-3 opacity-65 animate-bounce"
            style={{ animationDuration: '2.8s', animationDelay: '2s' }}
          />
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-26 left-3/4 w-2 h-2 opacity-70 animate-bounce"
            style={{ animationDuration: '3.2s', animationDelay: '0.8s' }}
          />
          
          {/* Lower row - moved down */}
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-32 left-20 w-3 h-3 opacity-60 animate-bounce"
            style={{ animationDuration: '4.2s', animationDelay: '1.2s' }}
          />
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-36 right-8 w-2 h-2 opacity-85 animate-bounce"
            style={{ animationDuration: '2.2s', animationDelay: '1.8s' }}
          />
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-34 left-1/3 w-4 h-4 opacity-70 animate-bounce"
            style={{ animationDuration: '3.8s', animationDelay: '0.3s' }}
          />
          
          {/* Additional scattered stars - moved down */}
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-20 left-1/6 w-2 h-2 opacity-60 animate-bounce"
            style={{ animationDuration: '2.7s', animationDelay: '1.7s' }}
          />
          <img 
            src="/assets/Star.png" 
            alt="Star" 
            className="absolute top-22 right-1/3 w-3 h-3 opacity-75 animate-bounce"
            style={{ animationDuration: '3.3s', animationDelay: '0.9s' }}
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
        <h1 className="text-white font-metropolis font-bold text-8xl mt-2">
          Spark
        </h1>
        <p className="text-white font-metropolis font-bold text-3xl mt-4">
          January 30-February 1, 2025 · In-person event
        </p>
        
        {/* Join Waitlist Button */}
        <div className="relative hover:opacity-80 transition-opacity z-50 mt-2 ml-80">
          <img 
            src="/assets/Join Waitlist Button.png" 
            alt="Join Waitlist"
            className="h-28 w-auto"
            style={{ transform: 'scale(0.6)' }}
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
        
        {/* About section - scrollable */}
        <section id="about" className="absolute bottom-0 left-0 right-0 z-40" style={{ transform: 'translateY(1400px)' }}>
          <img 
            src="/assets/grass2.png" 
            alt="Grass Background" 
            className="w-full h-auto object-contain"
          />
          
          {/* About content */}
          <div className="absolute top-32 left-0 right-0 z-60 pl-16 pr-8">
            <h2 className="text-white font-metropolis font-bold text-4xl text-center mb-8">
              About
            </h2>
            
            {/* Photos and text side by side */}
            <div className="flex gap-16 mb-6 mt-8">
              {/* Photos grid - 2x2 layout */}
              <div className="flex flex-col gap-4">
                {/* Top row - 2 photos */}
                <div className="flex gap-4 justify-start">
                  <img 
                    src="/assets/photo1.png" 
                    alt="Spark Event 1" 
                    className="max-w-80 max-h-80 w-auto h-auto object-contain rounded-lg shadow-lg"
                  />
                  <img 
                    src="/assets/photo2.png" 
                    alt="Spark Event 2" 
                    className="max-w-80 max-h-80 w-auto h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Bottom row - 2 photos */}
                <div className="flex gap-4 justify-start">
                  <img 
                    src="/assets/photo3.png" 
                    alt="Spark Event 3" 
                    className="max-w-80 max-h-80 w-auto h-auto object-contain rounded-lg shadow-lg"
                  />
                  <img 
                    src="/assets/photo4.png" 
                    alt="Spark Event 4" 
                    className="max-w-80 max-h-80 w-auto h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Text content - extended to left */}
              <div className="text-white font-metropolis w-[28rem]">
                <h3 className="font-bold text-4xl mb-5">
                  What is Spark?
                </h3>
                <div className="text-base leading-relaxed mt-1">
                  <p className="mb-3">
                    Spark is a 24-hour hackathon–case competition hybrid where innovation meets impact. Participants will tackle a real-world case focused on social good, working in teams to design and build a product that drives meaningful change. Over one weekend, students will think critically, prototype creatively, and pitch their solutions case competition–style to industry judges. Whether you code, design, or strategize, Spark is your chance to ignite ideas that make a difference.
                  </p>
                  <p>
                    At Spark, collaboration is key — students from diverse disciplines come together to bridge strategy, design, and technology. With mentorship from industry professionals and workshops throughout the event, participants gain hands-on experience in product thinking, teamwork, and presentation. By the end of the weekend, teams will walk away not just with a solution, but with the skills, confidence, and mindset to create real-world impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Lilipads on pond - moved outside testimonials section */}
        <div className="absolute bottom-0 left-0 right-0 z-80" style={{ transform: 'translateY(850px)' }}>
          <img 
            src="/assets/Lilipad1.png" 
            alt="Lilipad" 
            className="absolute bottom-8 left-32 w-48 h-48"
          />
          <img 
            src="/assets/Lilipad1.png" 
            alt="Lilipad" 
            className="absolute bottom-12 right-40 w-40 h-40"
          />
          <img 
            src="/assets/Lilipad1.png" 
            alt="Lilipad" 
            className="absolute bottom-6 left-1/2 w-56 h-56"
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
      
       {/* Sponsor Background - bottom layer */}
       <div id="sponsors" className="absolute bottom-0 left-0 right-0 z-10" style={{ transform: 'translateY(2500px)' }}>
        <img 
          src="/assets/SponsorBackground.png" 
          alt="Sponsor Background"
          className="w-full h-auto object-contain max-w-full"
        />
        
        {/* Sponsor Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-8 max-w-4xl">
          <h2 className="text-white font-metropolis font-bold text-6xl mb-8">Want to Sponsor?</h2>
          <div className="text-white font-metropolis text-lg leading-tight">
            <p className="mb-4">
              Our sponsors make it possible for us to give our prospective developers, designers, and builders the opportunity to build for social good. Hackers make meaningful connections with our sponsors beyond just the hackathon weekend. Stay tuned as we confirm more sponsors for Spark!
            </p>
            <p className="mt-6">
              Want to help make this event a reality? Email us at <a href="mailto:ryhana.williams0@gmail.com" className="underline hover:opacity-80">ryhana.williams0@gmail.com</a> or <a href="mailto:wychen946@gmail.com" className="underline hover:opacity-80">wychen946@gmail.com</a>
            </p>
          </div>
          
          {/* Sponsor Button */}
          <div className="mt-8 flex justify-center">
            <a 
              href="mailto:ryhana.williams0@gmail.com?subject=Sponsorship Inquiry" 
              className="inline-block transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              <img 
                src="/assets/Sponsor Button.png" 
                alt="Become a Sponsor"
                className="h-auto w-auto"
              />
            </a>
          </div>
        </div>
      </div>
      
       {/* FAQ Background - below sponsor background */}
       <div id="faq" className="absolute bottom-0 left-0 right-0 z-0" style={{ transform: 'translateY(3820px)' }}>
        <img 
          src="/assets/FAQBackground.png" 
          alt="FAQ Background"
          className="w-full h-auto object-contain max-w-full"
        />
        
         {/* FAQ Content */}
         <div className="absolute top-64 left-1/2 transform -translate-x-1/2 z-10 text-center px-8 max-w-4xl w-full">
           <h2 className="text-white font-metropolis font-bold text-6xl mb-12">FAQ</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {[
                "What is a hackathon?",
                "What is a case competition?",
                "I don't know how to code. Can I still come?",
                "Does Spark cost anything?",
                "Do I need to come with a team?",
                "Will there be travel reimbursements offered?",
                "I'm a recently graduated student. Can I still apply?",
                "I don't attend a Canadian university. Can I still apply?"
              ].map((question, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-300 border-opacity-30 hover:opacity-80 transition-opacity cursor-pointer">
                  <span className="text-white font-metropolis text-lg">{question}</span>
                  <span className="text-gray-300 text-2xl font-light">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Blue gradient background */}
    </section>
  );
};

export default Hero;