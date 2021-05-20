import React from 'react';
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
                {/* <PageHeader image={ logo } title="Login" /> */}
                <form onSubmit={(e) => {this.addToData(e)}}>

                    <label className="label"><b>Email:</b></label>
                    <input className="input" type="email" name="email" onChange={(e) => {this.handleChange(e)}} />

                    <label className="label"><b>Password:</b></label>
                    <input className="input" type="password" name="password" onChange={(e) => {this.handleChange(e)}} />

                    <button className="submit"><strong>Submit</strong></button>
                </form>
            </div>
        )
    }
}

export default withAuth(Login);