import React from 'react';
import { withAuth } from "../context/auth.context";


class Logout extends React.Component {

    render() {
        return(
            <div>
                <button onClick={ this.props.logout } >Logout</button>
            </div>
        )
    }
}

export default withAuth(Logout);