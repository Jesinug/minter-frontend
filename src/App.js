
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import AnnouncementForm from './components/AnnouncementForm';
import Board from './components/Board';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/signup" component={ Signup } />
      <Route path="/login" component={ Login } />
      <Route path="/announcement-form" component={ AnnouncementForm } />
      <Route path="/board" component={ Board } />
      </Switch>
    </div>
  );
}

export default App;
