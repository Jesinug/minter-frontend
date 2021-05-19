import React from "react";
import SearchBar from "./SearchBar";
import PageHeader from "./PageHeader";
import AnnoucementService from "../service/announcement.services";
import Announcement from "./Announcement";

class Board extends React.Component {
    state = {
        announcements: [],
        filteredAnnouncements: [],
    };

    componentDidMount() {
        new AnnoucementService().get().then((response) => {
        this.setState({
            announcements: response.data,
            filteredAnnouncements: response.data
        });
        });
    }

    handleSearch = (search) => {
        if (!search) {
        this.setState({
            filteredAnnouncements: this.state.announcements
        });
        } else {
        const filteredAnnouncements = this.state.announcements.filter(
            (announcement) => {
            return announcement.skill
                .toLowerCase()
                .includes(search.toLowerCase());
            }
        );
        this.setState({ filteredAnnouncements: filteredAnnouncements });
        }
    };

    render() {
        return (
        <div className="board-wraper">
            <PageHeader title="BOARD" image="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"/>
            <SearchBar onSearch={this.handleSearch} />
            <ul>
            {this.state.filteredAnnouncements.map((announcement) => (
                <li className="announ-item" key={announcement.skill}>
                <Announcement
                    userId={announcement.userId}
                    skill={announcement.skill}
                    description={announcement.description}
                />
                </li>
            ))}
            </ul>
        </div>
        );
    }
}

export default Board;
