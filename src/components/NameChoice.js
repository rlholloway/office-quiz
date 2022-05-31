import axios from "axios";
import { useState, useEffect } from "react";

const NameChoice = (props) => {
    const [ randFirstOne, setRandFirstOne ] = useState("");
    const [ randLastOne, setRandLastOne ] = useState(""); 

    const [randFirstTwo, setRandFirstTwo] = useState("");
    const [randLastTwo, setRandLastTwo] = useState(""); 

    const [randFirstThree, setRandFirstThree] = useState("");
    const [randLastThree, setRandLastThree] = useState(""); 

    const shuffleArr = (array) => {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    useEffect(() => {
    axios({
        method: "GET",
        url: 'http://proxy.hackeryou.com',
        responseType: 'json',
        params: {
            limit: 1,
            reqUrl: "https://officeapi.dev/api/characters/",
            proxyHeaders: {
                "headers_params": 'value'
            },
            xmlToJSON: false
        }
    }).then((res) => {
        const nameArray = res.data.data;
        shuffleArr(nameArray);
        
        setRandFirstOne(nameArray[0].firstname);
        setRandLastOne(nameArray[0].lastname);

        setRandFirstTwo(nameArray[1].firstname);
        setRandLastTwo(nameArray[1].lastname);

        setRandFirstThree(nameArray[2].firstname);
        setRandLastThree(nameArray[2].lastname);
    });
    }, []);


    return (
        <div>
            <button className="wrong" onClick={props.handleWrong}>{randFirstOne} {randLastOne}</button>
            <button className="wrong" onClick={props.handleWrong}>{randFirstTwo} {randLastTwo}</button>
            <button className="wrong" onClick={props.handleWrong}>{randFirstThree} {randLastThree}</button>
            <button className="answer" onClick={props.handleClick}>{props.speakerFirst} {props.speakerLast}</button>
        </div>
    )
}
export default NameChoice;