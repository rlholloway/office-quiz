// IMPORTS
import axios from "axios";
import { useState, useEffect, useRef } from "react";

// Function to generate multiple choice options
const NameChoice = (props) => {
    // Stateful variables
    const [randNameOne, setRandNameOne] = useState("");
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
            quote: "Yeah, I'm trying to lure these kids into my booth. But kids are very wary of being lured these days. Thank you, Dateline.",
            name: "Michael Scott"
        }, {
            quote: "There are a huge number of yeast infections in this county. Probably because we're downriver from that old bread factory.",
            name: "Dwight Schrute"
        }, {
            quote: "I saw Wedding Crashers accidentally. I bought a ticket for Grizzly Man and went into the wrong theater. After an hour, I figured I was in the wrong theater, but I kept waiting. Because that's the thing about bear attacks, they come when you least expect it.",
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
            quote: "So as it turns out, unless you're a young child or a prison inmate, you don't need anyone supervising you. People just come in and do their work on their schedule. Imagine that, people like us allowed to sell paper. Unsupervised. And yet, somehow it works. It must be because the stakes are so high.",
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
            quote: "When Michael's skirting a phone call, he gave me a list of places to say he is. 'Stopping a fight in the parking lot.' 'An Obama fashion show.' Whatever that is. Or 'Trapped in an oil painting.' I'm gonna save that one.",
            name: "Pam Beesly"
        }, {
            quote: "If you pray enough you can change yourself into a cat person.",
            name: "Angela Martin"
        }, {
            quote: "We are giving money that has been gambled. Why don't we just deal drugs or prostitute ourselves, and donate that money to charity?",
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
            quote: "Whoa, whoa, whoa. I think if he was sexist, I'd be able to tell. I took a crap load of women's studies courses at Cornell. And I wrote my own companion piece to the 'Vagina Monologues' called the 'Penis Apologies.' So I know a thing or two.",
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
            quote: "This summer, I did the minority executive training program at Yale. You guys, I'm, like, really smart now. You don't even know. You could ask me, '____, what's the biggest company in the world?' And I'd be like, 'blah blah blah, blah blah blah blah blah blah,' giving you the exact right answer.",
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
            quote: "This may be the first time that a male subordinate has attempted to get a modest, scheduled raise by threatening to withhold sex from a female superior. It will be a groundbreaking case when it inevitably goes to trial.",
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
            quote: "Yes, I have a dream, and it's not some MLK dream for equality. I want to own a decommissioned lighthouse. And I want to live at the top. And nobody knows I live there. And there's a button that I can press and launch that lighthouse into space.",
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
            quote: "I don't think I should walk anymore. You know all I had for breakfast was oatmeal, yogurt, coffee, orange juice and toast. Two poached eggs. And then half a sandwich on the bus. I can't.",
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
            quote: "Wanna know how to do it? Here's how you do it. Take her out to dinner. Go down on one knee. If you are in costume, you did something wrong. If at any point you find yourself tying a ring to a dog's collar, stop and look at yourself.",
            name: "Oscar Martinez"
        }, {
            quote: "When I heard Jim and Pam had kissed, my reaction was to have lots of long talks with Jim about our feelings. Roy just attacked him. I'm not sure which one Jim hated more.",
            name: "Karen Filippelli"
        }, {
            quote: "I am the regional manager of Dunder-Mifflin Utica branch. Turns out it's a pretty easy gig when your boss isn't an idiot and your boyfriend's not in love with somebody else.",
            name: "Karen Filippelli"
        }, {
            quote: "I'm at the grocery store buying a corkscrew to give myself a lobotomy.",
            name: "Karen Filippelli"
        }, {
            quote: "I cried for weeks over that guy, so yeah, seeing him climb out of a PT Cruiser in a ladies warehouse uniform felt pretty good.",
            name: "Karen Filippelli"
        }, {
            quote: "I have two relationships with Andy. I have a personal relationship, and I have a professional relationship. Personally, yeah, I think he's a rat, and I think he's responsible for the demise of my relationship with Erin. Professionally... he broke up the happiest couple in this office!",
            name: "Gabe Lewis"
        }, {
            quote: "I am the toilet of this office. I flush away annoying problems so others can keep their hands clean. And, just like a toilet, I am essential.",
            name: "Gabe Lewis"
        }, {
            quote: "Shut up about the sun! SHUT UP ABOUT THE SUN!",
            name: "Gabe Lewis"
        }, {
            quote: "There are plenty of people who love touching me. I'm a terrific hugger. I've been with a bunch of girls where that's basically all they want to do. I will see you all soon.",
            name: "Gabe Lewis"
        }, {
            quote: "I got away with everything under the last boss, and it wasn't good for me, at all. So, I want guidance. I want leadership. But don't just, like, boss me around, you know? Like, lead me. Lead me... when I'm in the mood... to be led.",
            name: "Ryan Howard"
        }, {
            quote: "Last year, Creed asked me how to set up a blog. Wanting to protect the world from being exposed to Creed's brain, I opened up a Word document on his computer and put an address at the top. I've read some of it. Even for the Internet, it's pretty shocking.",
            name: "Ryan Howard"
        }, {
            quote: "Jim's been looking at me, kind of, a lot all week. I would be creeped out by it, but it's nothing compared to the way Michael looks at me.",
            name: "Ryan Howard"
        }, {
            quote: "I'm in love with Kelly Kapoor. And I don't know how I'm gonna feel tomorrow or the next day or the day after that, but I do know that right here, right now, all I can think about is spending the rest of my life with her. Again, that could change.",
            name: "Ryan Howard"
        }, {
            quote: "I've been involved in a number of cults, both as a leader and a follower. You have more fun as a follower, but you make more money as a leader.",
            name: "Creed Bratton"
        }, {
            quote: "I already won the lottery. I was born in the US of A, baby. And as backup I have a Swiss passport.",
            name: "Creed Bratton"
        }, {
            quote: "You don't go by Monopoly, man. That game is nuts. Nobody just picks up 'Get out of jail free' cards. Those things cost thousands.",
            name: "Creed Bratton"
        }, {
            quote: "If I can't scuba, then what's this all been about? What am I working toward?",
            name: "Creed Bratton"
        }, {
            quote: "I'm excited about doing the ad, but I'm not really used to doing videos with so many people around.",
            name: "Meredith Palmer"
        }, {
            quote: "Hey, I have never cheated on, been cheated on, or been used to cheat with. I ask everyone in the room, 'Are you in a relationship?'",
            name: "Meredith Palmer"
        }, {
            quote: "You? Little Miss Priss? You wouldn't fart on a butterfly.",
            name: "Meredith Palmer"
        }, {
            quote: "Stop fighting! Just on St. Patrick's Day ok? Just one, perfect day a year. No hassles. No problems. No kids.",
            name: "Meredith Palmer"
        }, {
            quote: "Every time you buy a Big Mac you set one ingredient aside. Then at the end of the week you have a free Big Mac. And you love it even more because you made it with your own hands.",
            name: "Kevin Malone"
        }, {
            quote: "Pregnant Pam and I, we get hungry at the same times, so we've been eating together a lot. Not all meals. Just second breakfast, lunch, second lunch, and first dinner.",
            name: "Kevin Malone"
        }, {
            quote: "Me mechanic not speak English. But he know what me mean when me say 'car no go', and we best friends. So me think: why waste time, say lot word when few word do trick?.",
            name: "Kevin Malone"
        }, {
            quote: "Mini-cupcakes? As in the mini version of regular cupcakes, which is already a mini version of cake? Honestly, where does it end with you people?",
            name: "Kevin Malone"
        }, {
            quote: "I am taking a calculated risk. What's the upside? I overcome my nausea, fall deeply in love, babies, normalcy, no more self-loathing. Downside? I date Michael Scott publicly and collapse in on myself like a dying star.",
            name: "Jan Levinson"
        }, {
            quote: "You know, Pam, in Spain, they often don't even start eating until midnight.",
            name: "Jan Levinson"
        }, {
            quote: "If I was 22 and I had lots of time to have lots of children, then sure, let's let Michael have a shot at one. But honestly, I need to make this one count.",
            name: "Jan Levinson"
        }, {
            quote: "I never really thought much about being more than a receptionist. But, why? Because I happened to answer help wanted ad to be a receptionist? I mean, what if the ad had been for a CEO? Or for a brain surgeon?",
            name: "Erin Hannon"
        }, {
            quote: "Holly is ruining Michael's life. He thinks she is so special. And she's so not. Her personality is like a 3. Her sense of humor is a 2. Her ears are like a 7 and a 4. Add it all up and what do you get? 16. And he treats her like she's a perfect 40. It's nuts.",
            name: "Erin Hannon"
        }, {
            quote: "Disposable cameras are fun. Although it does seem wasteful and you don't ever get to see your pictures. If it's an important even that you want to remember, I recommend using a real camera. But I don't care if I forget today.",
            name: "Erin Hannon"
        }, {
            quote: "I'm really excited for Michael either way because if Holly chooses to be with him, he will be so, so happy. And if not, he'll be avoiding the biggest mistake of his life.",
            name: "Erin Hannon"
        }, {
            quote: "It's like she only wants to hook up when Ryan comes around. It's gotten to the point where I get excited every time I see that little dude walk through the door.",
            name: "Darryl Philbin"
        }, {
            quote: "You live a sweet, little, Nerfy life. Sittin' on your biscuit. Never havin' to risk it. ",
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
    }, []);

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