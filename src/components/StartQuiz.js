// IMPORTS
import { Link } from "react-router-dom";

// Button that brings user to Quiz
const StartQuiz = () => {
    return (
        <div className="wrapper">
            <h2 className="h2-top">Can you remember which Office character said the following quotes? </h2>
            <h2 className="h2-bottom">Test your memory with this fun quiz!</h2>
            <Link to="/office">
                <button className="startButton">Start Quiz</button>
            </Link>
        </div>
    )
}

export default StartQuiz;