import React from "react";
import UserService from '../service/user.services';

class Announcement extends React.Component {
    state = {
        user: {}
    }

    componentDidMount() {
        new UserService().getOne(this.props.userId)
        .then((response) => {
            console.log(response)
            this.setState({
                user : response.data || {}
            })
        })
    }

    render() {
        return(
            <div className="box">
                <div className="media-content">
                        <div className="content">
                            <img src={ this.state.user.profilePicture } alt={ this.state.user.name } height="40px"></img>
                            <h2>{ this.state.user.name }</h2>
                            <p>
                            <strong>{ this.props.skill }</strong> <br />
                            <small>{ this.props.description } </small>
                            </p>
                        </div>
                    </div>
            </div>
        )
    } 
}

export default Announcement;