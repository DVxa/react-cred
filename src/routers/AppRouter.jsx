import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { Home, About, FAQ } from '../containers/';

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={Home} path="/"/>
                <Route component={About} path="/about"/>
                <Route component={FAQ} path="/faq"/>
                {/*<Route component={Profile}  path="/profile">
                    <Route component={OfferList} path="/offers">
                         <Route component={Offer} path="/offer/:offerId" />
                     </Route>
                 </Route>*/}
            </Router>
        );
    }
}
