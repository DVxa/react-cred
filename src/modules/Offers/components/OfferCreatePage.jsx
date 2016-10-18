/**
 * Created by V.Minyailov-book on 17.10.2016.
 */
import React, {Component} from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Checkbox from 'material-ui/Checkbox';
import * as RegistrationActions from '../RegistrationActions';


class OfferCreateForm extends Component {
    constructor(props) {
        super(props);
        this.onOfferCreateButtonClickHandler = this.onOfferCreateButtonClickHandler.bind(this);
    }

    onOfferCreateButtonClickHandler() {
        let {email, password} = this.props.form;

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
        let {amount, period, rate} = this.props.form;
        return (

            <form method="post" id="data" className="validatable">
                <input type="hidden" name="agreementSigned" value="true" />
                <input type="hidden" name="leadId" value="0" />
                <AmountInput
                    value={amount.value}
                    valid={amount.valid}
                    dirty={amount.dirty}
                    errors={amount.errors}
                    onChange={this.props.actions.setAmount}
                />
                <div className="row">
                    <PeriodInput
                        value={period.value}
                        valid={period.valid}
                        dirty={period.dirty}
                        errors={period.errors}
                        onChange={this.props.actions.setPeriod}
                    />
                    <RateInput
                        value={rate.value}
                        valid={rate.valid}
                        dirty={rate.dirty}
                        errors={ratete.errors}
                        onChange={this.props.actions.setRate}
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
                            label="Создать заявку на заём"
                            onClick={this.onOfferCreateButtonClickHandler}
                            secondary={true}
                            disabled={!amount.valid || !period.valid || !rate.valid}
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