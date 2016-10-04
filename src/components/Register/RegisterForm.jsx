import React, {Component} from 'react';
import { Link } from 'react-router';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.btnRegisterHandler = this.btnRegisterHandler.bind(this);
        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);

        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
        };
    }

    btnRegisterHandler() {
        console.log('btnRegisterHandler - clickfff', this.state);
    }

    onEmailChangeHandler(event) {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <form method="post" id="data" className="validatable">
                <input type="hidden" name="agreementSigned" value="true" />
                <input type="hidden" name="leadId" value="0" />
                <div className="row">
                    <div className="col-xs-4 caption ">Email<span>*</span></div>
                    <div className="col-xs-10 field  ">
                        <input
                            type="text"
                            placeholder="пример: ivanov@gmail.com"
                            name="email"
                            onChange={this.onEmailChangeHandler}
                            value={this.state.email}
                        />
                        <div className="error-message-box"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 caption ">Пароль<span>*</span></div>
                    <div className="col-xs-10 field  ">
                        <input type="password" name="password" />
                        <div className="error-message-box"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 caption ">Пароль еще раз<span>*</span></div>
                    <div className="col-xs-10 field  ">
                        <input type="password" name="password2" />
                        <div className="error-message-box"></div>
                    </div>
                </div>
                <div className="row separator-top"></div>
                <div className="row">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-10 field type-checkbox">
                        <input type="checkbox" id="id1"/>
                        <label for="id1" className="radio-inline">
                            Я согласен(на) с условиями <Link to="/static/doc/agreement.doc">договора-оферты</Link> на оказание информационных услуг.
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-offset-7 col-xs-8 button-container">
                        <button className="btn btn-blue btn-big confirm-code-disabled"
                                type="button"
                                onClick={this.btnRegisterHandler}
                        >Зарегистрироваться</button>
                    </div>
                    <div className="col-xs-4"></div>
                </div>
            </form>
        )
    }
}