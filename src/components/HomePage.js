import React from "react";
import App from '../App';
import { Link, Route } from "react-router-dom";
import logo from '../resources/img/LOGO_MINTER.png';
import Login from "./Login";
import Signup from "./Signup";



class HomePage extends React.Component {
    render() {
        return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Minter</h1>
            <div>
            <Link className="py-3 px-3 is-inline-block" to="/signup">Signup</Link>
            <Link className="py-3 px-3 is-inline-block" to="/login"> Login</Link>
            {/* <Link className="py-3 px-3 is-inline-block" to="/announcement-form">Announcement Form</Link>
            <Link className="py-3 px-3 is-inline-block" to="/board">Board</Link> */}
            </div>
        </div>
        
        );
    }
}

export default HomePage;
