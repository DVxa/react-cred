import React, { Component } from 'react';
import RegistrationContent from "./components/RegistrationContent";

export default class RegistrationPage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>Регистрация клиента</h1>
                        </div>
                    </div>
                </div>
                <RegistrationContent />
            </div>
        );
    }
}
