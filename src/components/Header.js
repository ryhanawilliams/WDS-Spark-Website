import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-transparent px-8 py-4 flex justify-between items-center overflow-hidden">
      {/* WDS Logo */}
      <div className="flex items-center">
        <img 
          src="/assets/WDS Logo.png" 
          alt="WDS Logo" 
          className="h-8 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;