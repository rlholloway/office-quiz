// IMPORTS
import { useEffect, useState } from "react";
import axios from "axios";
import Buck from '../image02.jpg';
import NameChoice from "../components/NameChoice";
import EndQuiz from "../components/EndQuiz";

// Function that holds the Office API and displays on the page
const OfficeQuote = () => {
    // Stateful variables
    const [quote, setQuote] = useState([]);
    const [speakerFirst, setSpeakerFirst] = useState([]);
    const [speakerLast, setSpeakerLast] = useState([]);
    const [answerClicked, setAnswerClicked] = useState(false);
    const [wrongClicked, setWrongClicked] = useState(false);
    const [counter, setCounter] = useState(0);

    // useEffect to stop infinite loop of re-rendering
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
            // Store data in variables
            // Character data is tricky because first and last names are separated in API
            setQuote(res.data.data.content);
            setSpeakerFirst(res.data.data.character.firstname);
            setSpeakerLast(res.data.data.character.lastname);
        });
        // API will re-render after user clicks either right or wrong answer
    }, [answerClicked, wrongClicked]);


    // Click event to call API again AND add points
    const handleClick = () => {
        setAnswerClicked(!answerClicked)
        setCounter(counter + 1);
    };

    // Click event to call API again without points
    const handleWrong = () => {
        setWrongClicked(!wrongClicked);
    }

    return (
        <section>
            <div className="schruteBuck">
                {/* DIV which displays score */}
                <div>
                    <img className="counterImg" src={Buck} width="150" alt="A Schrute Buck" />
                </div>
                <div>
                    <p className="counterText">x {counter}</p>
                </div>
            </div>

            <div className="displayQuote">
                <div className="wrapper">
                    <h3>〝 {quote} 〞</h3>

                    {/* LINK which generates character choice */}
                    <NameChoice
                        handleClick={handleClick}
                        handleWrong={handleWrong}
                        speakerFirst={speakerFirst}
                        speakerLast={speakerLast} />
                </div>
            </div>

            <div>
                <EndQuiz />
            </div>
        </section>
    );
}

export default OfficeQuote;