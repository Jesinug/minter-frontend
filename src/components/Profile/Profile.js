import React from "react";
import Announcement from "../Announcement";
import PageHeader from "../PageHeader";
import UserService from '../../service/user.services';
import AnnouncementForm from "../AnnouncementForm";
import { Link } from "react-router-dom";
import { withAuth } from '../../context/auth.context';

class Profile extends React.Component {
    state = {
        announcements: [ ],
        user: {}
    }

    componentDidMount() {
        this.getAnnouncements()
    }

    getAnnouncements = () => {
        new UserService().getAnnouncements()
        .then((response) => {
            this.setState({
                announcements: response.data
            })
        })
    }

    deleteUser= () => {
        new UserService().deleteOne()
        .finally((response) => {
            // this.props.history.push('/')
            this.props.logout()
        })
    }

    render() {
        return (
            <div className="profile-wraper">
                <PageHeader />
                <Link className="py-3 px-3 is-inline-block" to="/announcement-form">Create Announcement</Link>
                <ul>
                    { this.state.announcements.map(announcement => (
                        <li className="announ-item" key={ announcement.skill }>
                            <Announcement 
                            userId={ announcement.userId } 
                            id={announcement.id} 
                            skill={ announcement.skill } 
                            description={ announcement.description } 
                            onAnnouncementDelete={ this.getAnnouncements }
                            />
                        </li>
                    ))}
                </ul>
                <button onClick={ this.deleteUser } >Delete user</button>
                <AnnouncementForm />
            </div>
        )
    }
}

export default withAuth(Profile);