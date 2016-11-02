import React, {Component} from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Checkbox from 'material-ui/Checkbox';
import {browserHistory} from 'react-router';
import * as LoginActions from '../LoginActions';
import {Link} from 'react-router';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.onLoginButtonClickHandler = this.onLoginButtonClickHandler.bind(this);
        this.onRegisterButtonClickHandler = this.onRegisterButtonClickHandler.bind(this);
    }

    onRegisterButtonClickHandler = () => {
        browserHistory.push("/register");
    };

    onLoginButtonClickHandler = () => {
        let {email, password} = this.props.form;

        var body =
            'email=' + encodeURIComponent(email.value) +
            '&password=' + encodeURIComponent(password.value);

        console.log(body);
/*
        let promise = fetch (
            'http://192.168.1.213:8077/user-profile/add-user',
            {
                method: 'post',
                body: body,
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }
        ).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    console.log(data);
                    if (data.status == "OK") {
                        alert ("Пользователь зарегистрирован в системе!");
                        browserHistory.push('/registered');
                    }
                });
            }
        ).catch(function(err) {
            console.log('Fetch Error: ', err);
        });
*/
    };

    render() {
        let {email, password} = this.props.form;

        return (
            <form method="post" id="data" className="validatable">
                <div className="row">
                    <div className="col-xs-7">
                        <EmailInput
                            value={email.value}
                            valid={email.valid}
                            dirty={email.dirty}
                            errors={email.errors}
                            onChange={this.props.actions.setEmail}
                        />
                    </div>
                    <div className="col-xs-7">
                        <PasswordInput
                            value={password.value}
                            valid={password.valid}
                            dirty={password.dirty}
                            errors={password.errors}
                            onChange={this.props.actions.setPassword}
                        />
                    </div>
                </div>
                <div className="row separator-top"></div>
                <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="col-xs-10">
                        <Checkbox
                            label="Запомнить меня"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <div className="row-padding">
                            <Link to="/remind-password" className="gray-link">Забыли логин или пароль?</Link>
                        </div>
                    </div>
                    <div className="col-xs-4 button-container">
                        <RaisedButton
                            label="Вход в систему"
                            onClick={this.onLoginButtonClickHandler}
                            secondary={true}
                            disabled={!email.valid || !password.valid}
                        />
                    </div>
                    <div className="col-xs-4 button-container">
                        <FlatButton
                            label="Регистрация"
                            secondary={true}
                            onClick={this.onRegisterButtonClickHandler}
                        />
                    </div>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        form: state.forms.login,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);