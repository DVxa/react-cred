import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { HomePage, AboutPage, FAQPage, RegistrationPage } from '../modules/';

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={HomePage} path="/"/>
                <Route component={AboutPage} path="/about"/>
                <Route component={FAQPage} path="/faq"/>
                <Route component={RegistrationPage} path="/register"/>
                {/*<Route component={Profile}  path="/profile">
                    <Route component={OfferList} path="/offers">
                         <Route component={Offer} path="/offer/:offerId" />
                     </Route>
                 </Route>*/}
            </Router>
        );
    }
}
