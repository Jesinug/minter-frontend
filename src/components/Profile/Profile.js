import React from "react";
import Announcement from "../Announcement";
import PageHeader from "../PageHeader";
import UserService from '../../service/user.services';
import { Link } from "react-router-dom";
import { withAuth } from '../../context/auth.context';
import Signup from "../Signup";

class Profile extends React.Component {
    state = {
        announcements: [ ],
        user: {},
        showProfileForm: false
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
                <PageHeader title="PROFILE" image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
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
                            onAnnouncementUpdate={ this.getAnnouncements }
                            />
                        </li>
                    ))}
                </ul>
                <button className="submit" onClick={ this.deleteUser } >Delete User</button>
                <button className="submit"onClick={ () => this.setState({ showProfileForm: !this.state.showProfileForm }) }>Edit User</button>
                { this.state.showProfileForm && <Signup user={ this.props.user }/> }
                
            </div>
        )
    }
}

export default withAuth(Profile);