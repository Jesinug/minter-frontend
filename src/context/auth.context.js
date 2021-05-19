import React from "react";
import AuthService from "../service/auth.services";

const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component {
    state = {
        isLoggedIn: false,
        isLoading: true,
        user: null,
    };

    authService = new AuthService();

    componentDidMount() {
        this.authService.isLoggedIn()
        .then((response) => {
            this.setState({ isLoggedIn: true, user: response.data });
        })
        .catch(() => {
            this.setState({ isLoggedIn: false, user: null });
        })
        .finally(() => {
            this.setState({ isLoading: false });
        })
    }

    signup = (data) => {
        return this.authService
        .signup(data)
        .then((response) => this.setState({ isLoggedIn: true, user: response.data }))
        .catch(() => this.setState({ isLoggedIn: false, user: null }));
    };

    login = (data) => {
        return this.authService.login(data)
        .then((response) => this.setState({ isLoggedIn: true, user: response.data }))
        .catch(() => this.setState({ isLoggedIn: false, user: null }));
    };

    logout = () => {
        return this.authService
        .logout()
        .then((user) => this.setState({ isLoggedIn: false, user: null }))
        .catch((error) => console.error(error));
    };

    render() {
        const { isLoggedIn, isLoading, user } = this.state;

        if (isLoading) return <p>Loading....</p>;

        return (
        <Provider
            value={{
            isLoading,
            isLoggedIn,
            user,
            signup: this.signup,
            login: this.login,
            logout: this.logout,
            }}
        >
            {" "}
            {this.props.children}
        </Provider>
        );
    }
    }

    //HOC - High Order Component
    const withAuth = (WrappedComponent) => {
    return function (props) {
        return(
        <Consumer>
        {(value) => {
            return (
            <WrappedComponent
                {...value}
                {...props}
            />
            );
        }}
        </Consumer>
        )};
    };

export { AuthProvider, withAuth };