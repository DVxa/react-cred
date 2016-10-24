/**
 * Created by V.Minyailov-book on 24.10.2016.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import {Link } from 'react-router';
import UserProfileForm from './UserProfileForm';

export default class UserProfileContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row-padding">
                    <div className="wrapper clearfix">
                        <Paper style={{padding: '20px'}}>
                            <h1>Профиль пользователя</h1>
                            <div className="row">
                                <div className="col-xs-9">
                                    <UserProfileForm />
                                </div>
                                <div className="col-xs-4 col-xs-offset-1">
                                    <div className="row">
                                        <div className="col-xs-14">
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-14">
                                            <h4>Как правильно заполнить профиль?</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                            <Link to="/faq/user/profile/edit"> More ... </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
                <div className="white-layout clearfix dealings">
                    <div className="wrapper clearfix"></div>
                </div>
            </div>
        )
    }
}
