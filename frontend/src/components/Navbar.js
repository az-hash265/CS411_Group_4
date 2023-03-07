import React from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends React.Component{
    render() {
        return(
            <div className = "navbar">
                <ul className = "Pages">
                    <li>
                        <Link to="/">Games</Link>
                    </li>
                    <li>
                        <Link to="/teams">Teams</Link>
                    </li>
                    <li>
                        <Link to="/players">Players</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        )
    }
}