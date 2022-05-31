// IMPORTS
import { useEffect, useState } from "react";
import axios from "axios";
import Buck from '../image02.jpg';

// Function that holds the Office API and displays on the page
const OfficeQuote = () => {
    // Stateful variables
    const [ quote, setQuote ] = useState([]);
    const [ speakerFirst, setSpeakerFirst ] = useState([]);
    const [ speakerLast, setSpeakerLast ] = useState([]);
    const [ answerClicked, setAnswerClicked ] = useState(false);
    const [ counter, setCounter ] = useState(0);
    
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

    const handleClick = () => {
        setAnswerClicked(!answerClicked)
        setCounter(counter + 1);
        console.log(counter);
    };


    return (
        <section className="displayQuote">
            <div className="schruteBuck">
                <div>
                    <img src={Buck} width="150" alt="A Schrute Buck" />
                </div>
                <div> x {counter}</div>
            </div>
            <div className="wrapper">
                <h3>{quote}</h3>
                <button className="answer" onClick={handleClick}>{speakerFirst} {speakerLast}</button>
            </div>
        </section>
    );
    }

export default OfficeQuote;