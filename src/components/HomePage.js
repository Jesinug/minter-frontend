import React from "react";
import { Link } from "react-router-dom";
import minter from '../resources/img/Minter64px.png';


class HomePage extends React.Component {
    render() {
        return (
        <div className="home-page">                
            <div className="brand-wraper">
                <img src={minter} className="App-name" alt="name-app-minter" />
                {/* <h1>Minter</h1> */}
            </div>
                <div className="link-wraper">
                <Link className="link" to="/signup">Signup</Link>
                <Link className="link" to="/login"> Login</Link>
                </div>                    
        </div>
        );
    }
}

export default HomePage;
