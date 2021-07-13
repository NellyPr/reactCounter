import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from './routeNames.js';
import CounterContainers from '../pages/CounterPage/containers/CounterContainers';
import HomePageContainer from '../pages/HomePage/containers/HomePageContainer.js';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>
            <Route path={ROUTES.COUNTER_PAGE} component={CounterContainers}/>
            
        </Switch>
    );
};

export default Routes;