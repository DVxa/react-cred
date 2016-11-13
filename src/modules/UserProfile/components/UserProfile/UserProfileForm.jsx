/**
 * Created by V.Minyailov-book on 24.10.2016.
 */

import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

import NameInput from './NameInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserProfileActions from '../../../../actions/UserProfileActions';

import {AuthUtils} from '../../../../utils/AuthUtils';
import {ApiClient} from '../../../../utils/ApiClient';
import {PATH_TO_SERVER} from '../../../../utils/Constants';


class UserProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectRegionValue: 1,
            selectPositionValue: 1,
        };
    }

    onSaveButtonClickHandler = () => {

        let {email, password, passwordRepeat, firstName, lastName, patronomyc, region, grade} = this.props.form;

        var uid = AuthUtils.getUid();
        var body =
            'uid='              + uid +
            '&email='           + encodeURIComponent(email.value)           +
            '&password='        + encodeURIComponent(password.value)        +
            '&passwordRepeat='  + encodeURIComponent(passwordRepeat.value)  +
            '&firstName='       + encodeURIComponent(firstName.value)       +
            '&lastName='        + encodeURIComponent(lastName.value)        +
            '&patronomyc='      + encodeURIComponent(patronomyc.value)      +
            '&region='          + region.value +
            '&grade='           + grade.value;

        alert("Заглушка. \nИзменения сохранены. \n \n" + body);

        // Отправка на сервер
        /*
        ApiClient.post (

        )         */
    };

    render() {
        let {email, password, passwordRepeat, firstName, lastName, patronomyc, region, grade} = this.props.form;
        email.value             = 'ivanov@bk.ru';
        password.value          = '123456';
        passwordRepeat.value    = '123456';
        firstName.value         = 'Ivan';
        lastName.value          = 'IVANOV';
        patronomyc.value        = 'Ivanovich';

        return (
            <form method="post" id="data" className="validatable">
                <Subheader style={styles.subheader}>Учетные данные </Subheader>
                <Divider />
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <EmailInput
                            value={email.value}
                            valid={email.valid}
                            dirty={email.dirty}
                            errors={email.errors}
                            onChange={this.props.actions.setEmail}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-5 col-xs-offset-2">
                        <PasswordInput
                            value={password.value}
                            valid={password.valid}
                            dirty={password.dirty}
                            errors={password.errors}
                            onChange={this.props.actions.setPassword}
                        />
                    </div>
                    <div className="col-xs-5">
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
                </div>

                <Subheader style={styles.subheader}>Личные данные </Subheader>
                <Divider />
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <NameInput
                            value={lastName.value}
                            valid={lastName.valid}
                            dirty={lastName.dirty}
                            errors={lastName.errors}
                            hintText={lastName.descr}
                            floatingLabelText={lastName.descr}
                            onChange={this.props.actions.setLastName}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-5 col-xs-offset-2">
                        <NameInput
                            value={firstName.value}
                            valid={firstName.valid}
                            dirty={firstName.dirty}
                            errors={firstName.errors}
                            hintText={firstName.descr}
                            floatingLabelText={firstName.descr}
                            onChange={this.props.actions.setFirstName}
                        />
                    </div>
                    <div className="col-xs-5">
                        <NameInput
                            value={patronomyc.value}
                            valid={patronomyc.valid}
                            dirty={patronomyc.dirty}
                            errors={patronomyc.errors}
                            hintText={patronomyc.descr}
                            floatingLabelText={patronomyc.descr}
                            onChange={this.props.actions.setPatronomyc}
                        />
                    </div>
                </div>
                <Subheader style={styles.subheader}>Сведения о работе </Subheader>
                <Divider />
                <div className="row">
                    <div className="col-xs-5 col-xs-offset-2">
                        <div>
                            <SelectField
                                floatingLabelText="Регион"
                                value={region.value}
                                fullWidth={true}
                                onChange={(event, index, value) => this.props.actions.setRegion(value)}
                            >
                                <MenuItem value={1} primaryText="Москва" />
                                <MenuItem value={2} primaryText="Санкт-Петербург" />
                                <MenuItem value={3} primaryText="Новосибирск" />
                                <MenuItem value={4} primaryText="Рязань" />
                                <MenuItem value={5} primaryText="Тюмень" />
                                <MenuItem value={6} primaryText="Омск" />
                                <MenuItem value={7} primaryText="Барнаул" />
                                <MenuItem value={8} primaryText="Вологда" />
                            </SelectField>
                        </div>
                    </div>
                    <div className="col-xs-5">
                        <SelectField
                            floatingLabelText="Должность"
                            value={grade.value}
                            fullWidth={true}
                            onChange={(event, index, value) => this.props.actions.setGrade(value)}
                        >
                            <MenuItem value={1} primaryText="7й грейд" />
                            <MenuItem value={2} primaryText="8й грейд" />
                            <MenuItem value={3} primaryText="9й грейд" />
                            <MenuItem value={4} primaryText="10й грейд" />
                            <MenuItem value={5} primaryText="11й грейд" />
                            <MenuItem value={6} primaryText="12й грейд" />
                            <MenuItem value={7} primaryText="13й грейд" />
                            <MenuItem value={8} primaryText="14й грейд" />
                        </SelectField>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-10 col-xs-4 button-container">
                        <RaisedButton
                            label="Сохранить"
                            onClick={this.onSaveButtonClickHandler}
                            secondary={true}
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
        form: state.forms.userProfile,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserProfileActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfileForm);