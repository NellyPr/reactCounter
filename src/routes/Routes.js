import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from './routeNames.js';
import HomePageContainer from '../pages/HomePage/containers/HomePageContainer.js';
import CounterOfCounters from '../pages/CounterOfCounters/containers/FunctionalCounterOfCounter.js';
import SimpleCounter from '../pages/FunctionalCounterPage/containers/FunctionalCounterContainer.js';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>
            <Route path={ROUTES.COUNTER_OF_COUNTERS} component={CounterOfCounters}/>
            <Route path={ROUTES.SIMPLE_COUNTER} component={SimpleCounter}/> 
        </Switch>
    );
};

export default Routes;

