import React from "react";
import { Redirect, Route } from "react-router";
import { withAuth } from "../context/auth.context";

function PrivateRoute(props) {
    const { isLoggedIn, isLoading } = props;
    const { exact, path } = props;
    const ComponentToShow = props.component;

    if (isLoading) return <p>Loading...</p>;
    return (
        <Route
        exact={exact}
        path={path}
        render={function (props) {
            if (!isLoggedIn) return <Redirect to="/login" />;
            else if (isLoggedIn) return <ComponentToShow {...props} />;
        }}
        />
    );
}

export default withAuth(PrivateRoute);