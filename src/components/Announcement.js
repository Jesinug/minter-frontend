import React from "react";
import PageHeader from "./PageHeader";
import logo from '../resources/img/LOGO_MINTER.png';


class Announcement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skill: "",
            description: ""
        }
    }

    render() {
        return(
            <div className="box">
                <PageHeader image={ logo } title="Create Announcement" />
                <div className="media-content">
                        <div className="content">
                            <h2>{this.props.user.name}</h2>
                            <p>
                            <strong>{this.props.announcement.skill}</strong> <br />
                            <small>{this.props.announcement.description} </small>
                            </p>
                        </div>
                    </div>
            </div>
        )
    }
};

export default Announcement;