import { Route, IndexRoute } from 'react-router';
import React from 'react';
import Dashboard from '../Pages/Dashboard/Dashboard';

const Routes =  (
    <Route path="/">
        {/*<IndexRoute component={Dashboard} />*/}
        <Route name="dashboard" path="/details" component={Dashboard}/>
    </Route>
)

export default Routes;