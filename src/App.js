import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import WaitlistSignUp from './components/WaitlistSignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/waitlist-signup" element={<WaitlistSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;