import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {AuthUtils} from 'AuthUtils';

import { HomePage, AboutPage, FAQPage,
         RegistrationPage, OfferListPage,
         OfferPage, OfferCreatePage, MyOfferListPage,
         TestPage, UserProfilePage
} from '../modules/';

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={TestPage}         path="/"/>
                <Route component={HomePage}         path="/home"/>
                <Route component={AboutPage}        path="/about"/>
                <Route component={RegistrationPage} path="/register"/>
                <Route component={OfferCreatePage}  path="/offernew/:amount/:period/:rate"/>
                <Route component={OfferCreatePage}  path="/offernew"/>
                <Route component={OfferListPage}    path="/offers/:amount#:period#:rate"/>
                <Route component={MyOfferListPage}  path="/offers/my" onEnter={checkAuth}/>
                <Route component={OfferPage}        path="/offer/:offerId"/>
                <Route component={UserProfilePage}  path="/profile"/>
                <Route component={FAQPage}          path="/faq">
                    <Route component={FAQPage}        path="/faq/:class">
                        <Route component={FAQPage}        path="/faq/:class/:method" />
                    </Route>
                </Route>
            </Router>
        );
    }
}


function checkAuth(nextState, replaceState) {
    // let path = nextState.location.pathname;
    if(!AuthUtils.isTokenExist()) {
        replaceState('/home');
    }
}