import React from 'react';
import logo from '.././logo1.png'
import { Link, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AnnouncementForm from './AnnouncementForm';
import Board from './Board';

class Navbar extends React.Component {
    
    render() {
        return(
            <div>
            <header>
            <Link className="is-size-3" to="/" >{ logo }</Link>
            <Link className="py-3 px-3 is-inline-block" to="/announcement-form">Announcement Form</Link>
            <Link className="py-3 px-3 is-inline-block" to="/board">Board</Link>
            </header>
            <img src={this.props.image} alt={this.props.title}/>
            <h1 className="title">{this.props.title}</h1>
            <p>{this.props.description}</p>
            <Route exact path="/" component={ HomePage } />
            <Route path="/announcement-form" component={ AnnouncementForm } />
            <Route path="/board" component={ Board } />
            </div>
        )
    }
}

export default Navbar;