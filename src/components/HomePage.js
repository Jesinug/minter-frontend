import React from "react";
import HomePageStyled from './HomePage.css';
import { Link } from "react-router-dom";
import logo from '../resources/img/logo-bn.png';
import minter from '../resources/img/Minter64px.png';


class HomePage extends React.Component {
    render() {
        return (
        <div className="home-page">
            <img src={logo} className="App-logo" alt="logo" />             
                
            <img src={minter} className="App-name" alt="name-app-minter" />
            

                <div className="link-wraper">
                <Link className="link" to="/signup">Signup</Link>
                <Link className="link" to="/login"> Login</Link>
                </div>                    
        </div>
        );
    }
}

export default HomePage;
