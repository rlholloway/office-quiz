// Create state variables for API data

// Landing Page before quiz starts
// Button to start quiz -- handleClick to get data back from the API
// User chooses multiple choice answer
// Change score accordingly AND generate next question

// https://www.officeapi.dev/
// https://officeapi.dev/api/quotes/random

// IMPORTS
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {

  // MAKE STATEFUL VARIABLES
  const [quote, setQuote] = useState([]);

  // Call the API
  // Need a proxy server
  axios({
    method: "GET",
    url: 'http://proxy.hackeryou.com',
    responseType: 'json',
    params: {
      reqUrl: "https://officeapi.dev/api/quotes/random",
      proxyHeaders: {
        "headers_params": 'value'
      },
      xmlToJSON: false
    }
  }).then((res) => {
    console.log(res.data.data);
  });

  // useEffect(() => {
  //   axios({
  //     url: "https://officeapi.dev/api/quotes/random",
  //     method: "GET",
  //     dataResponse: "json"
  //   }).then((response) => {
  //     setQuote(response.data.data);
  //   })
  // }, []);

  return (
    <div className="App">
     <Header />


     <Footer />
    </div>
  );
}

export default App;
