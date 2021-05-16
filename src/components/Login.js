import React from 'react';
import PageHeader from './PageHeader';
import minterImage from '../API/logo.png';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }
    addToData(event){
        event.preventDefault()
        axios.post(`http://localhost:5000/api/auth/login`, this.state)
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
                <PageHeader image={ minterImage } title="Login" />
                <form onSubmit={(e) => {this.addToData(e)}}>

                    <label><b>Email:</b></label>
                    <input type="email" name="email" onChange={(e) => {this.handleChange(e)}} />

                    <label><b>Password:</b></label>
                    <input type="password" name="password" onChange={(e) => {this.handleChange(e)}} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;