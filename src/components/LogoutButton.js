import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from "../context/auth.context";
class Logout extends React.Component {
    render() {
        return(
            <Link to="" className={this.props.className} onClick={this.props.logout}>Logout</Link>
        )
    }
}
export default withAuth(Logout);