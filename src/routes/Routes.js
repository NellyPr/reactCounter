import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from './routeNames.js';
import CounterContainers from '../pages/CounterPage/containers/CounterContainers.js';
import HomePageContainer from '../pages/HomePage/containers/HomePageContainer.js';
import FunctionalCounterContainer from '../pages/FunctionalCounterPage/containers/FunctionalCounterContainer.js'

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>
            <Route path={ROUTES.COUNTER_PAGE} component={CounterContainers}/>
            <Route path={ROUTES.FUNCTIONAL_COUNTER} component={FunctionalCounterContainer}/> 
        </Switch>
    );
};

export default Routes;