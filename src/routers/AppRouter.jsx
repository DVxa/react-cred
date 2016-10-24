import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { HomePage, AboutPage, FAQPage,
         RegistrationPage, OfferListPage,
         OfferPage, OfferCreatePage, MyOfferListPage,
         TestPage
} from '../modules/';

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={TestPage}         path="/"/>
                <Route component={HomePage}         path="/home"/>
                <Route component={AboutPage}        path="/about"/>
                <Route component={FAQPage}          path="/faq"/>
                <Route component={RegistrationPage} path="/register"/>
                <Route component={OfferCreatePage}  path="/offernew/:amount/:period/:rate"/>
                <Route component={OfferCreatePage}  path="/offernew"/>
                <Route component={OfferListPage}    path="/offers/:amount#:period#:rate"/>
                <Route component={MyOfferListPage}  path="/offers/my"/>
                <Route component={OfferPage}        path="/offer/:offerId"/>
            </Router>
        );
    }
}
