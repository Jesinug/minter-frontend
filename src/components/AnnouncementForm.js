import React from "react";
import PageHeader from "./PageHeader";
import logo from '../resources/img/LOGO_MINTER.png';
import AnnoucementService from '../service/announcement.services';

class AnnouncementForm extends React.Component {
    constructor() {
        super()
        this.state = {
            skill: "",
            description: ""
        }
    }

    addToData(event){
        event.preventDefault()
        new AnnoucementService().create(this.state)
        .then(
        (result) => {
            this.props.history.push('/profile')
        },

        (error) => {
            this.setState({
            error
            });
        }
        );
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div>
                <PageHeader image={ logo } title="Create Announcement" />
                <form onSubmit={(e) => {this.addToData(e)}}>
                    <label><b>Skill:</b></label>
                    <input type="text" name="skill" onChange={(e) => {this.handleChange(e)}} />

                    <label><b>Description:</b></label>
                    <input type="text" name="description" onChange={(e) => {this.handleChange(e)}} />

                    <button>Create</button>
                </form>
            </div>
        )
    }
};

export default AnnouncementForm;