import React, { Component } from 'react';
import LoginContent from "./components/FeedbackContent";

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>Обратная связь</h1>
                        </div>
                    </div>
                </div>
                <LoginContent />
            </div>
        );
    }
}
