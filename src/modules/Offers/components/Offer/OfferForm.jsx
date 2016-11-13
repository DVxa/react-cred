/**
 * Created by V.Minyailov-book on 23.10.2016.
 */
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

// Utils
import {ApiClient}      from '../../../../utils/ApiClient';
import { AuthUtils }    from '../../../../utils/AuthUtils';
// Const
import {PATH_TO_SERVER} from '../../../../utils/Constants';


export default class OfferForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offer : [], backAmount: ''};
    }

    componentDidMount() {

        let self = this;
        let url = PATH_TO_SERVER + "request-loan/request-info/"+this.props.offerId;

        ApiClient.get(url)
            .then(
                (data) => {
                    //console.log(data);
                    var backAmount =
                        data.LOAN_SUMM +
                        data.LOAN_SUMM *
                        data.RATE / 100 * data.PERIOD;
                    self.setState({offer: data, backAmount: backAmount});
                }
            );
    }

    onDealCreateButtonClickHandler = () => {
        //alert("Создать сделку пока нет возможности");
        let url  = PATH_TO_SERVER + "deal/create-deal";
        let body = 'request-id=' + this.state.offer.ID;

        ApiClient.post(url, body)
            .then(
                (data) => {
                    console.log(data);
                }
            );

    };

    onOfferToArchButtonClickHandler = () => {
        alert("Перенос в архив недоступен");
    };

    render() {
        if (this.state.offer.length == 0) {
            return(
                <div style={{width: '100%', height: 200, textAlign: 'center', padding: 120}}>
                    <CircularProgress />
                </div>
            )
        }

        return (
            <form id="data">
                <Subheader style={styles.subheader}>
                    Данные по заявке
                </Subheader>
                <div className="row">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-2">
                            <TextField
                                floatingLabelText="Сумма заявки (руб)"
                                style={styles.textField}
                                disabled={true}
                                defaultValue={this.state.offer.LOAN_SUMM}
                                fullWidth={true}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-5 col-xs-offset-2">
                            <TextField
                                floatingLabelText="Период заявки (дн)"
                                style={styles.textField}
                                disabled={true}
                                defaultValue={this.state.offer.PERIOD}
                                fullWidth={true}
                            />
                        </div>
                        <div className="col-xs-5">
                            <TextField
                                floatingLabelText="Ставка (%/дн)"
                                style={styles.textField}
                                disabled={true}
                                defaultValue={this.state.offer.RATE}
                                fullWidth={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <Checkbox
                            label="Возможно дробление заявки"
                            value={false}
                            disabled={true}
                        />
                    </div>
                </div>
                <Subheader style={styles.subheader}>
                    Расчеты
                </Subheader>
                <div className="row">
                    <div className="col-xs-5 col-xs-offset-2">
                        <TextField
                            floatingLabelText="Дата возврата"
                            style={styles.textField}
                            disabled={true}
                            defaultValue="12.11.2016"
                            fullWidth={true}
                        />
                    </div>
                    <div className="col-xs-5">
                        <TextField
                            floatingLabelText="Сумма возврата"
                            style={styles.textField}
                            disabled={true}
                            defaultValue={this.state.backAmount}
                            fullWidth={true}
                        />
                    </div>
                </div>
                <Divider />
                <div className="row" style={{marginTop: 10}}>
                    <div className="col-xs-5 col-xs-offset-4">
                        <RaisedButton label="Оформить сделку"
                                      secondary={true}
                                      onClick={this.onDealCreateButtonClickHandler}
                                      fullWidth={true}
                        />
                    </div>
                    <div className="col-xs-5">
                        { AuthUtils.isTokenExist() && (
                        <FlatButton label="Перенести в архив"
                                    secondary={true}
                                    onClick={this.onOfferToArchButtonClickHandler}
                        />
                        )}
                    </div>
                </div>
            </form>
        )
    }
}

const styles = {
    textField : {
        fontSize: 18
    },
    subheader: {
        backgroundColor: "#efefef"
    }
};