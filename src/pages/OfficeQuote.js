// IMPORTS
import { useEffect, useState } from "react";
import axios from "axios";

// Function that holds the Office API and displays on the page
const OfficeQuote = () => {
    const [ quote, setQuote ] = useState([]);
    const [ speakerFirst, setSpeakerFirst ] = useState([]);
    const [ speakerLast, setSpeakerLast ] = useState([]);
    const [ answerClicked, setAnswerClicked ] = useState(false);
    
    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://proxy.hackeryou.com',
            responseType: 'json',
            params: {
                limit: 1,
                reqUrl: "https://officeapi.dev/api/quotes/random",
                proxyHeaders: {
                    "headers_params": 'value'
                },
                xmlToJSON: false
            }
        }).then((res) => {
            setQuote(res.data.data.content);
            setSpeakerFirst(res.data.data.character.firstname);
            setSpeakerLast(res.data.data.character.lastname);
        
        });
    }, [answerClicked]);

    // const handleRightClick = () => {
    //     console.log("You clicked it!");  

    // }

    return (
        <section className="displayQuote">
            <div className="wrapper">
                <h3>{quote}</h3>
                <button className="answer" onClick={ () => setAnswerClicked(!answerClicked) }>{speakerFirst} {speakerLast} { answerClicked ? "yes" : "no"}</button>
            </div>
        </section>
    );
    }

export default OfficeQuote;