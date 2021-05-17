import React from "react";
import PageHeader from "./PageHeader";
import minterImage from '../logo.png';
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
                {/* <PageHeader image={ minterImage } title="Announcement" /> */}
                <div className="media-content">
                        <div className="content">
                            <h2>{this.state.user.name}</h2>
                            <p>
                            <strong>{this.props.skill}</strong> <br />
                            <small>{this.props.description} </small>
                            </p>
                        </div>
                    </div>
            </div>
        )
    } 
}

export default Announcement;