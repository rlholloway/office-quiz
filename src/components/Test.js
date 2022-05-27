import { Link } from "react-router-dom";

const Test = () => {
    return (
        <div>
            <p>This is a test</p>
            <Link to="/secondTest">
                <button>Click Me</button>
            </Link>
        </div>
    )
}

export default Test;