import React from 'react';
import { withAuth } from "../context/auth.context";

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
        this.props.signup(this.state)
        .then(
        (result) => {
            this.props.history.push('/board')
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

export default withAuth(Signup);