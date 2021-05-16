import React from "react";
import SearchBar from './SearchBar';
import PageHeader from './PageHeader';

class Board extends React.Component {
    state = {
        announcements: [ ]
    }

    render() {
        return (
            <div className="board-wraper">
            <PageHeader />
            <SearchBar />
            <ul>
                { this.state.announcements.map(announcement => (
                    <li className="announ-item" key={ announcement.skill }>
                        <Announcement />
                    </li>
                ))}
            </ul>

            </div>
        )
    }
}

export default Board;