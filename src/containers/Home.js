import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/contextapi">CONTEXT API</Link>
                    </li>
                    <li>
                        <Link to="/spliting">CODE SPLITING</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
