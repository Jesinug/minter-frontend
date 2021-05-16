import React from 'react';
import PageHeader from './PageHeader';
import minterImage from '../API/logo.png';
import axios from 'axios';

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            profilePicture: ""
        }
    }
    addToData(event){
        event.preventDefault()
        axios.post(`http://localhost:5000/api/auth/signup`, this.state)
        .then(
        (result) => {
            this.props.history.push('/')
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
                <PageHeader image={ minterImage } title="Signup" />
                <form onSubmit={(e) => {this.addToData(e)}}>
                    <label><b>Name:</b></label>
                    <input type="text" name="name" onChange={(e) => {this.handleChange(e)}} />

                    <label><b>Email:</b></label>
                    <input type="email" name="email" onChange={(e) => {this.handleChange(e)}} />

                    <label><b>Password:</b></label>
                    <input type="password" name="password" onChange={(e) => {this.handleChange(e)}} />

                    <label><b>Profile Picture:</b></label>
                    <input type="text" name="profilePicture" onChange={(e) => {this.handleChange(e)}} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup;