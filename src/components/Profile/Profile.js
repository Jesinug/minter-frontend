import React from "react";
import AnnoucementService from '../../service/announcement.services';
import Announcement from "../Announcement";
import PageHeader from "../PageHeader";

class Profile extends React.Component {
    state = {
        announcements: [ ]
    }

    componentDidMount() {
        new AnnoucementService().get()
        .then((response) => {
            this.setState({
                announcements: response.data
            })
        })
    }

    render() {
        return (
            <div className="profile-wraper">
                <PageHeader />
                <ul>
                    { this.state.announcements.map(announcement => (
                        <li className="announ-item" key={ announcement.skill }>
                            <Announcement userId={ announcement.userId } skill={ announcement.skill } description={ announcement.description } />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Profile;