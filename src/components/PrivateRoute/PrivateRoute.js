import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const userIsAdmin = user?.isAdmin || false;
    const userIsLoggedIn = user?.email || false;
    
    let routeCondition;
    if(rest.path === '/bookmarks') routeCondition = userIsLoggedIn;
    if(rest.path === '/admin') routeCondition = userIsAdmin;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (routeCondition) ? (
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