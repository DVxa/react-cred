import React, {Component} from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Checkbox from 'material-ui/Checkbox';
import * as RegistrationActions from '../RegistrationActions';


class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.onRegisterButtonClickHandler = this.onRegisterButtonClickHandler.bind(this);
    }

    onRegisterButtonClickHandler() {
        let {email, password, passwordRepeat} = this.props.form;

        var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        var xhr = new XHR();

        var body =
            'email=' + encodeURIComponent(email.value) +
            '&password=' + encodeURIComponent(password.value); // +
            //'&passwordRepeat=' + encodeURIComponent(passwordRepeat.value);

        xhr.open("POST", 'http://192.168.1.213:8077/user-profile/add-user', true);

        xhr.onload = function() {
            console.info(this.status + ' - ' + this.responseText);
        };
        xhr.onerror = function() {
            console.error('Ошибка - Статус : ' + this.status + ' - ' + this.respponseText);
        };

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body);
    }

    render() {
        let {email, password, passwordRepeat} = this.props.form;
        return (

            <form method="post" id="data" className="validatable">
                <input type="hidden" name="agreementSigned" value="true" />
                <input type="hidden" name="leadId" value="0" />
                <EmailInput
                    value={email.value}
                    valid={email.valid}
                    dirty={email.dirty}
                    errors={email.errors}
                    onChange={this.props.actions.setEmail}
                />
                <div className="row">
                    <PasswordInput
                        value={password.value}
                        valid={password.valid}
                        dirty={password.dirty}
                        errors={password.errors}
                        onChange={this.props.actions.setPassword}
                    />
                    <PasswordInput
                        value={passwordRepeat.value}
                        valid={passwordRepeat.valid}
                        dirty={passwordRepeat.dirty}
                        errors={passwordRepeat.errors}
                        onChange={this.props.actions.setPasswordRepeat}
                        hintText="Пароль еще раз"
                        floatingLabelText="Пароль еще раз"
                    />
                </div>
                <div className="row separator-top"></div>
                <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="col-xs-10">
                        <Checkbox
                            label="Я согласен(на) с условиями договора-оферты на оказание информационных услуг"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-offset-7 col-xs-8 button-container">
                        <RaisedButton
                            label="Зарегистрироваться"
                            onClick={this.onRegisterButtonClickHandler}
                            secondary={true}
                            disabled={!email.valid || !password.valid || !passwordRepeat.valid}
                        />
                    </div>
                    <div className="col-xs-4"></div>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        form: state.forms.registration,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(RegistrationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);