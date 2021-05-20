import React from 'react';
import { withAuth } from "../context/auth.context";
import AuthService from '../service/auth.services';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.user?.name,
            email: props.user?.email,
            password: props.user?.password,
            profilePicture: props.user?.profilePicture,
        }
    }
    
    addToData(event){
        event.preventDefault()
        let promise 
        if( this.props.user ) {
            promise = new AuthService().edit(this.state)
            .then(
                (result) => {
                    document.location.reload()
                }
            )
        } else {
            promise =  this.props.signup(this.state)
            .then(
            (result) => {
                this.props.history.push('/board')
            })
        }
        promise.catch(
            (error) => {
                this.setState({
                error
                });
            }
        )
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
                    <input value={ this.state.name } className="input" type="text" name="name" onChange={(e) => {this.handleChange(e)}} />

                    <label className="label"><b>Email:</b></label>
                    <input value={ this.state.email } className="input" type="email" name="email" onChange={(e) => {this.handleChange(e)}} />

                    <label className="label"><b>Password:</b></label>
                    <input className="input" type="password" name="password" onChange={(e) => {this.handleChange(e)}} />

                    <label className="label"><b>Profile Picture:</b></label>
                    <input value={ this.state.profilePicture } className="input" type="text" name="profilePicture" onChange={(e) => {this.handleChange(e)}} />

                    <button className="submit"><strong>Submit</strong></button>
                </form>
            </div>
        )
    }
}

export default withAuth(Signup);