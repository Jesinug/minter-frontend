import React from "react";
import logo from '../logo1.png';

class HomePage extends React.Component {
    render() {
        return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Minter</h1>
            <p className="Quote">
                "We are all ignorants, but we all ignore different things"
                <br></br>
                <em>Albert Einstein</em>
            </p>
        </div>
        );
    }
}

export default HomePage;
