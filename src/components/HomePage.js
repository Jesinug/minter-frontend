import React from "react";
import { Link } from "react-router-dom";
import logo from '../resources/img/LOGO_MINTER.png';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                    <h1>Minter</h1>
                    <Link className="py-3 px-3 is-inline-block" to="/signup">Signup</Link>
                    <Link className="py-3 px-3 is-inline-block" to="/login"> Login</Link>
            </div>
        );
    }
}

export default HomePage;
