import React from 'react';
import { withAuth } from "../context/auth.context";
import UserService from '../service/user.services';


class Contact extends React.Component {
    state = {
        users: [ ]
    }

    componentDidMount() {
        new UserService().getOne(this.props)
        .then((response) => {
            this.setState({
                users: response.data
            })
        })
    }

    render() {
        return(
            <div>
                <button onClick={ this.props.user.em } >Contact</button>
            </div>
        )
    }
}

export default withAuth(Contact);