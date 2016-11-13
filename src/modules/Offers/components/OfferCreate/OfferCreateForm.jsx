/**
 * Created by V.Minyailov-book on 17.10.2016.
 */
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import AmountInput from './AmountlInput';
import PeriodInput from './PeriodlInput';
import RateInput from './RateInput';
import DelimiterCheck from './DelimiterCheck';

import * as OfferCreateActions from '../../../../actions/OfferCreateActions';

import {AuthUtils} from '../../../../utils/AuthUtils';
import {ApiClient} from '../../../../utils/ApiClient';

import {PATH_TO_SERVER} from '../../../../utils/Constants';


class OfferCreateForm extends Component {
    constructor(props) {
        super(props);
    }

    onOfferCreateButtonClickHandler = () => {
        let {amount, period, rate, delimiter} = this.props.form;
        let offerType   = this.props.type;
        let uid         = AuthUtils.getUid();
        let token       = AuthUtils.getToken();

        var body =
            'uid='     + encodeURIComponent(uid) +
            '&type='   + encodeURIComponent(offerType)  +
            '&amount=' + encodeURIComponent(amount.value) +
            '&period=' + encodeURIComponent(period.value) +
            '&rate='   + encodeURIComponent(rate.value) +
            '&delimiter=false';

        let url = PATH_TO_SERVER + "request-loan/add-request";

        console.log(body);

        ApiClient.post(url, body)
            .then(
                (data) => {
                    console.log(data);
                    alert ("Заявка создана!");
                    browserHistory.push('/offers/'+ offerType +'/my');
                }
            );
    }

    render() {
        let {amount, period, rate, offerType, delimiter} = this.props.form;

        if(this.props.amount !== undefined) {
            amount.value = this.props.amount;
            period.value = this.props.period;
            rate.value = this.props.rate;
        }

        return (

            <form method="post" id="data" className="validatable">
                <Subheader style={styles.subheader}>
                    Введите данные по заявке
                </Subheader>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <AmountInput
                            value={amount.value}
                            valid={amount.valid}
                            dirty={amount.dirty}
                            errors={amount.errors}
                            onChange={this.props.actions.setAmount}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-5 col-xs-offset-2">
                        <PeriodInput
                            value={period.value}
                            valid={period.valid}
                            dirty={period.dirty}
                            errors={period.errors}
                            onChange={this.props.actions.setPeriod}
                        />
                    </div>
                    <div className="col-xs-5">
                        <RateInput
                            value={rate.value}
                            valid={rate.valid}
                            dirty={rate.dirty}
                            errors={rate.errors}
                            onChange={this.props.actions.setRate}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <Checkbox
                            label="Возможно дробление заявки"
                            value={delimiter.value}
                            onCheck={this.props.actions.setDelimiter}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <RadioButtonGroup defaultSelected={this.props.type}
                                          onChange={this.props.actions.setOfferType}
                                          valid={offerType.valid}
                                          dirty={offerType.dirty}
                                          errors={offerType.errors}
                                          valueSelected={this.props.type}
                        >
                            <RadioButton
                                value="borrow"
                                label="Заявка на заем"
                            />
                            <RadioButton
                                value="lend"
                                label="Заявка на размещение"
                            />
                        </RadioButtonGroup>
                    </div>
                </div>
                <Divider />
                <div className="row" style={{marginTop: 10}}>
                    <div className="col-xs-4 col-xs-offset-10">
                        <RaisedButton
                            label="Создать заявку"
                            onClick={this.onOfferCreateButtonClickHandler}
                            secondary={true}
                            disabled={false}
                            fullWidth={true}
                        />
                    </div>
                </div>
            </form>
        )
    }
}

const styles = {
    subheader: {
        backgroundColor: "#efefef"
    }
};

function mapStateToProps(state) {
    return {
        form: state.forms.offerCreate,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(OfferCreateActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OfferCreateForm);