import React, {Component} from 'react';
import { Link } from "react-router";

export default class LoginPopupForm extends Component {
    constructor () {
        super ();
        this.loginHandler = this.loginHandler.bind(this);
    }
    loginHandler () {
        console.log("Login");
    }
    render () {
        return (
            <div className="text-center validatable" id="loginForm">
                <div className="row">
                    <div className="col-xs-10 field  col-xs-offset-2">
                        <input type="text" placeholder="Логин" name="username" />
                        <div className="error-message-box"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 field  col-xs-offset-2">
                        <input type="password" placeholder="Пароль" name="password" />
                        <div className="error-message-box"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <button className="btn btn-blue" onClick={this.loginHandler}>Войти</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <Link to="/remind-password" className="gray-link">Забыли логин или пароль?</Link>
                    </div>
                </div>
            </div>
        )
    }
}

