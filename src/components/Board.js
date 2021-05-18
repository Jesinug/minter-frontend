import React from "react";
import SearchBar from './SearchBar';
import PageHeader from './PageHeader';
import AnnoucementService from '../service/announcement.services';
import Announcement from "./Announcement";
import ContactButton from "./ContactButton";

class Board extends React.Component {
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

    alert() {
        return (
            
            console.log(this.props.user.email)
        )
    }

    render() {
        return (
            <div className="board-wraper">
                <PageHeader />
                <SearchBar />
                <ul>
                    { this.state.announcements.map(announcement => (
                        <li className="announ-item" key={ announcement.skill }>
                            <Announcement userId={ announcement.userId } skill={ announcement.skill } description={ announcement.description } />
                            <ContactButton />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Board;