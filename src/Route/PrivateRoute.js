import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../Layout';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
                <Layout {...props}>
                    <Component {...props} />
                </Layout>
        )}
        />
    );
}

export default PrivateRoute;
