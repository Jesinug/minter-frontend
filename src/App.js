
import './App.css';
import { Route, Switch } from 'react-router';
import HomePage from './components/HomePage';
import React from 'react';
import Signup from './components/Signup';
import { Link } from 'react-router-dom';
import Login from './components/Login';
import AnnouncementForm from './components/AnnouncementForm';
import Board from './components/Board';
import AnonRoute from './routes/AnonRoute';
import LogoutButton from './components/LogoutButton';
import { withAuth } from "./context/auth.context";
import logo from './logo1.png';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {
                props.isLoggedIn ? 
                <div>
                  <Link className="py-3 px-3 is-inline-block" to="/board">Board</Link>
                  <Link className="py-3 px-3 is-inline-block" to="/announcement-form">Announcement Form</Link>
                  <LogoutButton />
                </div>
                :
                <div>
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>Minter</h1>
                  <Link className="py-3 px-3 is-inline-block" to="/signup">Signup</Link>
                  <Link className="py-3 px-3 is-inline-block" to="/login"> Login</Link>
                </div>
            }
      </header>
      <Switch >
        <Route exact path="/" component={ HomePage } />
        <AnonRoute path="/signup" component={ Signup } />
        <AnonRoute path="/login" component={ Login } />
        <Route path="/announcement-form" component={ AnnouncementForm } />
        <Route path="/board" component={ Board } />
      </Switch>
    </div>
  );
}

export default withAuth(App);
