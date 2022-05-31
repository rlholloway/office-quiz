// Landing Page before quiz starts
// Button to start quiz -- button to render quiz page and call the API
// Create state variables for API data
// User chooses from multiple choice answer
// Change score accordingly AND generate next question

// https://www.officeapi.dev/
// https://officeapi.dev/api/quotes/random

// IMPORTS
import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import StartQuiz from './components/StartQuiz';
import OfficeQuote from './pages/OfficeQuote';

function App() {

  return (
    <div className="App">
     <Header />
     <Routes>
        <Route path="/" element={<StartQuiz />} />
        <Route path="/office" element={<OfficeQuote />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
