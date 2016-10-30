import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {AuthUtils} from 'AuthUtils';

import { HomePage, LenderPage, AboutPage, FAQPage,
         RegistrationPage, OfferListPage,
         OfferPage, OfferCreatePage, MyOfferListPage,
         TestPage, UserProfilePage, LogoutPage, LoginPage
} from '../modules/';

import PageLayout from '../layouts/PageLayout';

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={PageLayout}>
                    <Route component={TestPage}         path="/test"        onEnter={checkAuth}/>
                    <Route component={LoginPage}        path="/login"/>
                    <Route component={LogoutPage}       path="/logout"/>
                    <Route component={HomePage}         path="/"/>
                    <Route component={LenderPage}         path="/lender"/>
                    <Route component={AboutPage}        path="/about"/>
                    <Route component={FAQPage}          path="/faq(/:class)(/:method)"/>
                    <Route component={RegistrationPage} path="/register"/>
                    <Route component={OfferListPage}    path="/offers/:type"    onEnter={checkAuth}/>
                    <Route component={MyOfferListPage}  path="/offers/:type/my" onEnter={checkAuth}/>
                    <Route component={OfferPage}        path="/offer/:offerId"  onEnter={checkAuth}/>
                    <Route component={OfferCreatePage}  path="/offer/new/:type(/:amount)(/:period)(/:rate)" onEnter={checkAuth}/>
                    <Route component={UserProfilePage}  path="/profile"         onEnter={checkAuth}/>
                </Route>
            </Router>
        );
    }
}


function checkAuth(nextState, replaceState) {
    // let path = nextState.location.pathname;
    if(!AuthUtils.isTokenExist()) {
        replaceState('/login');
    }
}