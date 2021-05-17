import React from 'react';
import PageHeader from './PageHeader';
import logo from '../resources/img/LOGO_MINTER.png';
import AuthService from '../service/auth.services';
import { withAuth } from "../context/auth.context";


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
        this.props.login(this.state)
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

    checkLoggedIn() {
        const auth = new AuthService()
        auth.isLoggedIn()
        .then(
            (result) => {

                console.log('is logged in?', result)
            }
        )
    }

    render() {
        return(
            <div>
                <PageHeader image={ logo } title="Login" />
                <form onSubmit={(e) => {this.addToData(e)}}>

                    <label><b>Email:</b></label>
                    <input type="email" name="email" onChange={(e) => {this.handleChange(e)}} />

                    <label><b>Password:</b></label>
                    <input type="password" name="password" onChange={(e) => {this.handleChange(e)}} />

                    <button>Submit</button>
                </form>
                <button onClick={ this.checkLoggedIn } >Login check</button>
            </div>
        )
    }
}

export default withAuth(Login);