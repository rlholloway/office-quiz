// IMPORTS
import axios from "axios";
import { useState, useEffect, useRef } from "react";

// Function to generate multiple choice options
const NameChoice = (props) => {
    // Stateful variables
    // Once again tricky because first and last names are store separately
    const [ randNameOne, setRandNameOne ] = useState("");

    const [randNameTwo, setRandNameTwo] = useState("");
 
    const [randNameThree, setRandNameThree] = useState("");

    // Function to shuffle array
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

    // Calling the API again SPECIFICALLY for the list of characters
    useEffect(() => {
        const quoteSource = [{
            quote: "I'm not superstitious, but... I'm a little-stitious.",
            name: "Michael Scott"
        }, {
                quote: "I. DECLARE. BANKRUPTCY!",
                name: "Michael Scott"
            }, {
                quote: "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.",
                name: "Michael Scott"
            }, {
                quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
                name: "Michael Scott"
            }, {
                quote: "I want people to be afraid of how much they love me.",
                name: "Michael Scott"
            }, {
                quote: "There are a huge number of yeast infections in this county. Probably because we're downriver from that old bread factory.",
                name: "Dwight Schrute"
            }, {
                quote: "I don't believe in coddling people. In the wild, there is no health care. In the wild, health care is, 'Ow, I hurt my leg! I can't run! A lion eats me and I'm dead!' Well, I'm not dead. I'm the lion. You're dead!",
                name: "Dwight Schrute"
            }, {
                quote: "I love catching people in the act. That's why I always whip open doors.",
                name: "Dwight Schrute"
            }, {
                quote: "In the end, the greatest snowball isn't a snowball at all. It's fear. Merry Christmas",
                name: "Dwight Schrute"
            }, {
                quote: "How would I describe myself? Three words: hardworking, alpha male, jackhammer, merciless, insatiable.",
                name: "Dwight Schrute"
            }, {
                quote: "One day, Michael came in complaining about a speed bump on the highway. I wonder who he ran over then.",
                name: "Jim Halpert"
            }, {
                quote: "Last week, Dwight found half a joint in the parking lot. And as it turns out, Dwight finding drugs is more dangerous than most people using drugs.",
                name: "Jim Halpert"
            }, {
                quote: "I mean, I always knew that the branch would shut down someday. I just figured it would be because Michael sold the building for some magic beans.",
                name: "Jim Halpert"
            }, {
                quote: "I can't say whether Dunder Mifflin paper is less flammable, sir, but I can assure that it is certainly not more flammable.",
                name: "Jim Halpert"
            }, {
                quote: "I gotta tell you, this baby is amazing. She gets me out of everything, and I… and I love her. I also love her very much.",
                name: "Jim Halpert"
            }, {
                quote: "I suggested we flip a coin, but Angela said she doesn't like to gamble. Of course, by saying that she was gambling that I wouldn't smack her.",
                name: "Pam Beesly"
            }, {
                quote: "Once every hour, someone is involved in an internet scam. That man is Michael Scott.",
                name: "Pam Beesly"
            }, {
                quote: "I feel God in this Chili's tonight.",
                name: "Pam Beesly"
            }, {
                quote: "It's performance review day, company-wide. Last year, my performance review started with Michael asking me what my hopes and dreams were, and it ended with him telling me he could bench-press 190 pounds. So, I don't really know what to expect.",
                name: "Pam Beesly"
            }, {
                quote: "I was hoping for a righteous mob, and I ended up with Dwight and Nellie. But, they both have a mob mentality. And, I'm pretty sure Dwight has a pitchfork in his car.",
                name: "Pam Beesly"
            }, {
                quote: "If you pray enough you can change yourself into a cat person.",
                name: "Angela Martin"
            }, {
                quote: "I find the mystery genre disgusting. I hate being titillated.",
                name: "Angela Martin"
            }, {
                quote: "You may ask me out to dinner. Nothing fancy or foreign, no bars, no patios, no vegetables, and no seafood.",
                name: "Angela Martin"
            }, {
                quote: "I know that patience and loyalty are good, and virtuous traits. But sometimes I just think you need to grow a pair.",
                name: "Angela Martin"
            }, {
                quote: "Every little boy fantasizes about his fairytale wedding.",
                name: "Andy Bernard"
            }, {
                quote: "I'll be the number-two guy here in Scranton in six weeks. How? Name repetition, personality mirroring, and never breaking off a handshake. I'm always thinking one step ahead. Like a... carpenter... that makes stairs.",
                name: "Andy Bernard"
            }, {
                quote: "Sorry I annoyed you with my friendship.",
                name: "Andy Bernard"
            }, {
                quote: "You can't let a girl feel good about herself. It will backfire on you. Every compliment has to be backhanded. 'Oh I like your dress, but I'd like it more if you had prettier hair.'",
                name: "Andy Bernard"
            }, {
                quote: "Could you for once just let us enjoy a party instead of making it about all your issues?",
                name: "Kelly Kapoor"
            }, {
                quote: "I have a lot of questions. Number one, how dare you?",
                name: "Kelly Kapoor"
            }, {
                quote: "I think sometimes people are really mean to the hot, popular girl.",
                name: "Kelly Kapoor"
            }, {
                quote: "I don't talk trash, I talk smack. They're totally different. Trash talk is all hypothetical, like, 'Your mom is so fat she can eat the Internet.' But smack talk is happening like, right now, like, 'You're ugly and I know it for a fact 'cause I got the evidence right there.'",
                name: "Kelly Kapoor"
            }, {
                quote: "Chad Flendermen. Just an easy going black guy, he knows the streets, yet he also went to Oxford. So... Just as comfortable on a motorcycle as he is on Air Force One. Oh and he's also the world's leading Egyptologist.",
                name: "Toby Flenderson"
            }, {
                quote: "Actually, I didn't think it was appropriate to invite children since it's... You know, there's gambling and alcohol, and it's in our dangerous warehouse and it's a school night. And, you know, Hooters is catering. You know, is that enough? Should I keep going?",
                name: "Toby Flenderson"
            }, {
                quote: "Every Halloween I tell him the same thing; you can't bring weapons into the office, and every year he says the same thing; as soon as I get my weapons back I'm gonna kill you.",
                name: "Toby Flenderson"
            }, {
                quote: "It's like I used to tell my wife. I do not apologize unless I think I'm wrong, and if you don't like it, you can leave. And I say the same thing to my current wife, and I'll say it to my next one, too.”",
                name: "Stanely Hudson"
            }, {
                quote: "Life is short. Drive fast and leave a sexy corpse. That's one of my mottos.",
                name: "Stanley Hudson"
            }, {
                quote: "I have been trying to get on jury duty every year since I was 18 years old. To get to go sit it in an air conditioned room, downtown, judging people, while my lunch is paid for … that is the life.",
                name: "Stanley Hudson"
            }, {
                quote: "I'm glad Michael's getting help. He has a lot of issues and he's stupid.",
                name: "Phyllis Lapin"
            }, {
                quote: "You have a lot to learn about this town, sweetie.",
                name: "Phyllis Lapin"
            }, {
                quote: "We have a gym at home. It's called the bedroom.",
                name: "Phyllis Lapin"
            }, {
                quote: "I didn't realize how many of Angela's opinions I agreed with until she tried to have my kneecaps shattered for sleeping with her husband.",
                name: "Oscar Martinez"
            }, {
                quote: "Angela's engaged to a gay man. As a gay man, I'm horrified. As a friend of Angela's, horrified. As a lover of elegant weddings, I'm a little excited.",
                name: "Oscar Martinez"
            }, {
                quote: "The hospital will provide dictionaries. Bring a thesaurus.",
                name: "Oscar Martinez"
            }, {
                quote: "Oh, I didn't realize we were doing trick questions. What's the safest way to go skiing? Don't ski.",
                name: "Darryl Philbin"
            }, {
                quote: "I was there. That dude is not engaged. I'm not a big believer in therapy, but I'll go into my own pockets to cover his co-pay.",
                name: "Darryl Philbin"
            }, {
                quote: "In the gang world, we use something called Fluffy Fingers. That's when somebody really gets in your face, you know, you just... start tickling them and then he starts tickling you.You know, pretty soon you're laughing and hugging. Before you know it, you've forgotten the whole thing. Ya'll can just go to church together... get an ice cream cone.",
                name: "Darryl Philbin"
        }];

        const nameArray = quoteSource;
        shuffleArr(nameArray);

        setRandNameOne(nameArray[0].name);

        setRandNameTwo(nameArray[1].name);

        setRandNameThree(nameArray[2].name);
    },[]);

    // Grabs the DIV that holds the buttons and shuffles the content for them
    const ref = useRef(null);

    // Re-shuffles after each user click otherwise it only shuffles on first page load
    useEffect(() => {
        const parent = ref.current;

        for (let i = parent.children.length; i >= 0; i--) {
            parent.appendChild(parent.children[Math.random() * i | 0]);
        }
    }, [props.handleClick, props.handleWrong]);


    return (
        // DIV which holds four buttons for multiple choice answer
        <div ref={ref} className="parent wrapper">
            <button className="wrong" onClick={props.handleWrong}>{randNameOne}</button>
            <button className="wrong" onClick={props.handleWrong}>{randNameTwo}</button>
            <button className="wrong" onClick={props.handleWrong}>{randNameThree}</button>
            <button className="answer" onClick={props.handleClick}>{props.name}</button>
        </div>
    )
}
export default NameChoice;