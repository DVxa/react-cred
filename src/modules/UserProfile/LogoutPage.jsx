/**
 * Created by V.Minyailov-book on 24.10.2016.
 */
import React, { Component } from 'react';
import LogoutContent from './components/Logout/LogoutContent';

export default class LogoutPagePage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>Выход</h1>
                        </div>
                    </div>
                </div>
                <LogoutContent />
            </div>
        );
    }
}
