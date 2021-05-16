
import './App.css';
import { Route } from 'react-router';
import HomePage from './components/HomePage';
import React from 'react';
import Signup from './components/Signup';
import { Link } from 'react-router-dom';
import Login from './components/Login';
import AnnouncementForm from './components/AnnouncementForm';
import Board from './components/Board';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="py-3 px-3 is-inline-block" to="/signup">Signup</Link>
        <Link className="py-3 px-3 is-inline-block" to="/login"> Login</Link>
        <Link className="py-3 px-3 is-inline-block" to="/announcement-form">Announcement Form</Link>
        <Link className="py-3 px-3 is-inline-block" to="/board">Board</Link>
      </header>
      <Route exact path="/" component={ HomePage } />
      <Route path="/signup" component={ Signup } />
      <Route path="/login" component={ Login } />
      <Route path="/announcement-form" component={ AnnouncementForm } />
      <Route path="/board" component={ Board } />
    </div>
  );
}

export default App;
