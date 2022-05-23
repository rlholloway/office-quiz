// Create state variables for API data

// Landing Page before quiz starts
// Button to start quiz -- handleClick to get data back from the API
// User chooses multiple choice answer
// Change score accordingly AND generate next question

// https://www.officeapi.dev/
// https://officeapi.dev/api/quotes/random

// IMPORTS
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import StartQuiz from './components/StartQuiz';
import OfficeQuote from './components/OfficeQuote';

function App() {

  // MAKE STATEFUL VARIABLES
  const [quote, setQuote] = useState([]);

  return (
    <div className="App">
     <Header />
     <StartQuiz />
      {/* <div>
        <Link to="/quiz-start">
          <button className="quiz-start-button">Start</button>
        </Link>
      </div> */}

     <Footer />
    </div>
  );
}

export default App;
