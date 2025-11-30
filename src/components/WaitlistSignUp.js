import React from 'react';
import { useNavigate } from 'react-router-dom';

const WaitlistSignUp = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/waitlist sign up.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Back Button - Top Right Corner */}
        <button
          onClick={handleBack}
          className="absolute top-8 right-8 z-50 bg-white bg-opacity-80 hover:bg-opacity-100 text-dark-green font-metropolis font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default WaitlistSignUp;

