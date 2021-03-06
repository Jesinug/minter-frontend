import './App.css';
import { Switch } from 'react-router';
import HomePage from './components/HomePage';
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import AnnouncementForm from './components/AnnouncementForm';
import Board from './components/Board';
import { withAuth } from "./context/auth.context";
import PrivateRoute from './routes/PrivateRoute';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App(props) {
  return (
    <div className="App">
        {
          props.isLoggedIn ? 
          <Navbar />
          :
          <HomePage />
        }
      <Switch >
        <PrivateRoute path="/announcement-form" component={ AnnouncementForm } />
        <PrivateRoute path="/board" component={ Board } />
        <PrivateRoute path="/profile" component={ Profile } />
      </Switch>
    </div>
  );
}

export default withAuth(App);
