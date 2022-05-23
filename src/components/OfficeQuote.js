// // IMPORTS
// import { useEffect, useState } from "react";
// import axios from "axios";

// // Function that holds the Office API and displays on the page
// const OfficeQuote = (props) => {

//     // MAKE STATEFUL VARIABLES
//     // const [quote, setQuote] = useState([]);
//     // Call the API
//     // Need a proxy server
//     useEffect(() => {
//         axios({
//         method: "GET",
//         url: 'http://proxy.hackeryou.com',
//         responseType: 'json',
//         params: {
//             reqUrl: "https://officeapi.dev/api/quotes/random",
//             proxyHeaders: {
//                 "headers_params": 'value'
//             },
//             xmlToJSON: false
//         }
//     }).then((res) => {
//         console.log(res.data.data);
//         // setQuote(res.data.data);
//     }), []});
    
//     return (
//         <div className="wrapper">
//             {/* {
//                 quote.map((singleQuote) => {
//                     return (
//                         <div key={singleQuote._id}>
//                             <p className="quoteText">{singleQuote}</p>
//                         </div>
//                     )
//                 })
//             } */}

//         </div>
//     )
// }

// export default OfficeQuote;