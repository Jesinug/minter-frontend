import React from "react";
import UserService from '../service/user.services';
import ContactButton from './ContactButton';
import { withAuth } from '../context/auth.context';
import AnnouncementService from '../service/announcement.services';
import { Link } from "react-router-dom";

class Announcement extends React.Component {
    state = {
        user: {}
    }

    componentDidMount() {
        new UserService().getOne(this.props.userId)
        .then((response) => {
            this.setState({
                user : response.data || {}
            })
        })
    }

    deleteAnnouncement = () => {
        new AnnouncementService().deleteOne(this.props.id)
        .then( () => { this.props.onAnnouncementDelete() } )
    }

    editAnnouncement = () => {
        new AnnouncementService().updateOne(this.props.id)
        .then ( () => { this.props.onAnnouncementUpdate() })
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
                            { this.state.user.id !== this.props.user.id && <ContactButton email={ this.state.user.email }/>}
                            {
                            this.props.user.id === this.state.user.id && 
                            <div>
                                {/* <Link className="py-3 px-3 is-inline-block" to={`/announcement-form/${this.props.id}`}><button>Edit</button></Link> */}
                                <button className="submit" onClick={ this.deleteAnnouncement }>Delete Announcement</button>
                            </div>
                            }
                        </div>
                    </div>
            </div>
        )
    } 
}

export default withAuth(Announcement);