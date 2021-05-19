import React from 'react';
import SingupStyled from './Signup.css';
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
                    <label className="label"><b>Name:</b></label>
                    <input className="input" type="text" name="name" onChange={(e) => {this.handleChange(e)}} />

                    <label className="label"><b>Email:</b></label>
                    <input className="input" type="email" name="email" onChange={(e) => {this.handleChange(e)}} />

                    <label className="label"><b>Password:</b></label>
                    <input className="input" type="password" name="password" onChange={(e) => {this.handleChange(e)}} />

                    <label className="label"><b>Profile Picture:</b></label>
                    <input className="input" type="text" name="profilePicture" onChange={(e) => {this.handleChange(e)}} />

                    <button><strong>Submit</strong></button>
                </form>
            </div>
        )
    }
}

export default withAuth(Signup);