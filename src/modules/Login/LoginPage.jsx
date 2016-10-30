import React, { Component } from 'react';
import LoginContent from "./components/LoginContent";

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>Вход в систему</h1>
                        </div>
                    </div>
                </div>
                <LoginContent />
            </div>
        );
    }
}
