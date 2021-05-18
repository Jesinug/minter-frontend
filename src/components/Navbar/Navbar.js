import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton';

//TODO: Comentario va en profile component
//<button><Link className="py-3 px-3 is-inline-block" to="/announcement-form">New Announcement</Link></button>
class Navbar extends React.Component {
    
    render() {
        return(
            <div>
                <button ><Link className="py-3 px-3 is-inline-block" to="/board">Board</Link></button>
                <LogoutButton />
            </div>
        )
    }
}

export default Navbar;