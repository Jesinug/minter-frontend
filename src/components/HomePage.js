import React from "react";
import { Link } from "react-router-dom";
import logo from '../resources/img/logo.png';
import minter from '../resources/img/Minter64px.png';
import AnonRoute from "../routes/AnonRoute";
import Signup from "./Signup";
import Login from "./Login";


class HomePage extends React.Component {
    render() {
        return (
        <div className="home-page">                
            <div className="brand-wraper">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={minter} className="App-name" alt="name-app-minter" />
            </div>
                <div className="link-wraper">
                    <AnonRoute path="/signup" component={ Signup } />
                    <AnonRoute path="/login" component={ Login } />
                    <Link className="link" to="/signup">Signup</Link>
                    <Link className="link" to="/login"> Login</Link>
                </div>                    
        </div>
        );
    }
}

export default HomePage;
