// IMPORTS
import { Link } from "react-router-dom";

// Button that brings user back to Home Page
const EndQuiz = () => {
    return (
        <Link to="/">
            <button>End Quiz</button>
        </Link>
    )
}

export default EndQuiz;