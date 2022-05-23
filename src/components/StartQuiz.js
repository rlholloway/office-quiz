import { useEffect } from "react";
import axios from "axios";

const StartQuiz = () => {
    const handleClick = (e) => {
        console.log("It works!");
        // useEffect(() => {
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
                console.log(res.data.data.content);
                // setQuote(res.data.data);
            });
        // });
    }

    return (
        <button onClick={(e) => { handleClick(e) }}>Start Quiz!</button>
    )
}

export default StartQuiz;