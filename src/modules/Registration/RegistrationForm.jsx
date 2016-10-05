import React, {Component} from 'react';
import { Link } from 'react-router';
import EmailInput from './EmailInput';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const textStyles = {
    width: '100%',
    fontSize: '18px'
};


export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.btnRegisterHandler = this.btnRegisterHandler.bind(this);
        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onPasswordRepeatChangeHandler = this.onPasswordRepeatChangeHandler.bind(this);

        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
        };
    }

    btnRegisterHandler() {
        console.log('btnRegisterHandler - click', this.state);
    }

    onEmailChangeHandler(value) {
        this.setState({email: value});
    }

    onPasswordChangeHandler(event) {
        this.setState({password: event.target.value});
    }

    onPasswordRepeatChangeHandler(event) {
        this.setState({passwordRepeat: event.target.value});
    }

    render() {
        return (
            <form method="post" id="data" className="validatable">
                <input type="hidden" name="agreementSigned" value="true" />
                <input type="hidden" name="leadId" value="0" />
                <EmailInput value={this.state.email} onChange={this.onEmailChangeHandler}/>
                <div className="row">
                    <div className="col-xs-14 field  ">
                        <TextField
                            style={textStyles}
                            type="password"
                            name="password"
                            errorText="Поле не должно быть пустым"
                            hintText="Пароль"
                            floatingLabelText="Пароль"
                            value={this.state.password}
                            onChange={this.onPasswordChangeHandler}
                        />
                        <div className="error-message-box"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-14 field  ">
                        <TextField
                            style={textStyles}
                            type="password"
                            name="password"
                            errorText="Поле не должно быть пустым"
                            hintText="Пароль еще раз"
                            floatingLabelText="Пароль еще раз"
                            value={this.state.passwordRepeat}
                            onChange={this.onPasswordRepeatChangeHandler}
                        />
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
                        <RaisedButton
                            label="Зарегистрироваться"
                            onClick={this.btnRegisterHandler}
                            secondary={true}
                        />
                    </div>
                    <div className="col-xs-4"></div>
                </div>
            </form>
        )
    }
}