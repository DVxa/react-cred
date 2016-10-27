/**
 * Created by V.Minyailov-book on 24.10.2016.
 */
import React, { Component } from 'react';
import UserProfileContent from './components/UserProfile/UserProfileContent';

export default class UserProfilePage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>Профиль</h1>
                        </div>
                    </div>
                </div>
                <UserProfileContent />
            </div>
        );
    }
}
