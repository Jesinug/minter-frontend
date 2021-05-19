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
                <PageHeader image="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80" title="Create Announcement" />
                <form onSubmit={(e) => {this.addToData(e)}}>
                    <label className="label"><b>Skill:</b></label>
                    <input className="input" type="text" name="skill" onChange={(e) => {this.handleChange(e)}} />

                    <label className="label"><b>Description:</b></label>
                    <input className="input" type="text" name="description" onChange={(e) => {this.handleChange(e)}} />

                    <button>Create</button>
                </form>
            </div>
        )
    }
};

export default AnnouncementForm;