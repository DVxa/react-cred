import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { HomePage, AboutPage, FAQPage,
         RegistrationPage, OfferListPage,
         OfferPage, OfferCreatePage
} from '../modules/';

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={HomePage}         path="/"/>
                <Route component={AboutPage}        path="/about"/>
                <Route component={FAQPage}          path="/faq"/>
                <Route component={RegistrationPage} path="/register"/>
                <Route component={OfferListPage}    path="/offers/:amount#:period#:rate">
                    <Route component={OfferPage}        path="/offer"/>
                </Route>
                <Route component={OfferCreatePage}        path="/offer-new-borrow"/>
            </Router>
        );
    }
}
