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
            <PageHeader />
            <SearchBar onSearch={this.handleSearch} />
            <ul className="announcements-board">
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
