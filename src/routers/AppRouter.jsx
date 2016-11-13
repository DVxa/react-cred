import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {AuthUtils} from '../utils/AuthUtils';

import { HomePage, LenderPage, AboutPage, FAQPage,
         FeedbackPage,
         RegistrationPage, OfferListPage,
         OfferPage, OfferCreatePage, MyOfferListPage,
         TestPage, UserProfilePage, LogoutPage, LoginPage,
         MyDealListPage, DealPage
} from '../modules/';

import PageLayout from '../layouts/PageLayout';

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={PageLayout}>
                    <Route component={TestPage}         path="/test"            onEnter={checkAuth}/>
                    <Route component={HomePage}         path="/"/>
                    <Route component={LenderPage}       path="/lender"/>
                    <Route component={AboutPage}        path="/about"/>
                    <Route component={FeedbackPage}     path="/feedback"/>
                    <Route component={FAQPage}          path="/faq(/:class)(/:method)"/>

                    <Route component={OfferListPage}    path="/offers/:type(/:amount)(/:period)(/:rate)"    onEnter={checkAuth}/>
                    <Route component={MyOfferListPage}  path="/myoffers/:type"  onEnter={checkAuth}/>
                    <Route component={OfferPage}        path="/offer/:offerId"  onEnter={checkAuth}/>
                    <Route component={OfferCreatePage}  path="/offer/new/:type(/:amount)(/:period)(/:rate)" onEnter={checkAuth}/>
                    <Route component={MyDealListPage}   path="/mydeals/:type"   onEnter={checkAuth}/>
                    <Route component={DealPage}         path="/deal/:dealId"    onEnter={checkAuth}/>

                    <Route component={LoginPage}        path="/login"/>
                    <Route component={LogoutPage}       path="/logout"/>
                    <Route component={RegistrationPage} path="/register"/>
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