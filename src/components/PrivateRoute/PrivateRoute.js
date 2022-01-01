import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const userIsAdmin = user?.isAdmin || false;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (userIsAdmin) ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;