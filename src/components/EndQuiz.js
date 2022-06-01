// IMPORTS
import { Link } from "react-router-dom";

// Button that brings user back to Home Page
const EndQuiz = () => {
    return (
        <div className="wrapper">
            <Link to="/">
                <button className="endButton">End Quiz</button>
            </Link>
        </div>
    )
}

export default EndQuiz;