/**
 * Created by V.Minyailov-book on 23.10.2016.
 */
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SubHeader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import { AuthUtils } from '../../../../utils/AuthUtils';

export default class DealForm extends Component {
    constructor(props) {
        super(props);
        this.state = {deal : []};
        this.onDealCreateButtonClickHandler = this.onDealCreateButtonClickHandler.bind(this);
        this.onOfferToArchButtonClickHandler = this.onOfferToArchButtonClickHandler.bind(this);
    }


    componentWillMount() {
        //getMyOffersData () {
        let self = this;

        let deal = {
            "ID": "1",
            "UserLender": "1",
            "UserBorrower": "2",
            "State_ref": "1",
            "OfferId_ref": "1",
            "DateDeal": "01.11.2016",
            "Amount": "10000",
            "Period": "14",
            "Rate": "0.1",
            "AllRest": "10285",
            "PercRest": "250",
            "ComissRest": "35",
            "DateEnd": "15.11.2016"
        };
        self.setState({deal: deal});

        /*
        let promise = fetch (
            'http://192.168.1.213:8077/request-loan/request-info/'+this.props.offerId,
            {
                method: 'GET',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }
        ).then (
            function(response) {
                if (response.status !== 200) {
                    console.log('Status Code: ' + response.status);
                    return;
                }
                response.json().then(function (data) {
                    self.setState({offer: data});
                    //console.log(data);
                });
            }
        ).catch(function(err) {
            console.log('Fetch Error: ', err);
        });
        */
    }

    onDealCreateButtonClickHandler = () => {
        alert("Создать заявку пока нет возможности");
    };

    onOfferToArchButtonClickHandler = () => {
        alert("Перенос в архив недоступен");
    };

    render() {
        return (
            <div className="row">
                <div className="col-xs-14">
                    {/*<h4 style={styles.h4}>
                        Основные данные
                    </h4>*/}
                    <Card>
                        <CardHeader
                            title="Основные данные"
                        />
                        <CardText>
                            <div className="row">
                                <div className="col-xs-5">
                                    <label htmlFor="amount-field">
                                        Сумма сделки (руб)
                                    </label>
                                    <TextField
                                        id="amount-field"
                                        style={styles.textField}
                                        value={this.state.deal.Amount}
                                    />
                                </div>
                                <div className="col-xs-5">
                                    <label htmlFor="period-field">
                                        Период сделки (дн)
                                    </label>
                                    <TextField
                                        id="period-field"
                                        defaultValue={this.state.deal.Period}
                                        style={styles.textField}
                                    />
                                </div>
                                <div className="col-xs-4">
                                    <label htmlFor="period-field">
                                        Ставка (% в день)
                                    </label>
                                    <TextField
                                        id="rate-field"
                                        defaultValue={this.state.deal.Rate}
                                        style={styles.textField}
                                    />
                                </div>
                            </div>
                        </CardText>
                    </Card>
                    <Card>
                        {/*<h4 style={styles.h4}>
                            Даты
                        </h4>*/}
                        <CardHeader
                            title="Даты"
                        />
                        <CardText>
                            <div className="row">
                                <div className="col-xs-5">
                                    <label htmlFor="dt-beg-field">
                                        Дата совершения сделки
                                    </label>
                                    <TextField
                                        id="dt-beg-field"
                                        style={styles.textField}
                                        value={this.state.deal.DateDeal}
                                    />
                                </div>
                                <div className="col-xs-5">
                                    <label htmlFor="dt-end-field">
                                        Дата окончания сделки
                                    </label>
                                    <TextField
                                        id="dt-end-field"
                                        defaultValue={this.state.deal.DateEnd}
                                        style={styles.textField}
                                    />
                                </div>
                                {/*<div className="col-xs-6">
                                    <div className="alert alert-warning">
                                        Внимание! <br /> Срок по сделке подходит на следующей неделе
                                    </div>
                                </div>*/}
                            </div>
                        </CardText>
                    </Card>
                    <Card>
                    {/*<h4 style={styles.h4}>
                        Суммы и начисления
                    </h4>*/}
                        <CardHeader
                            title="Суммы и начисления"
                        />
                        <CardText>
                            <div className="row">
                                <div className="col-xs-4">
                                    <label htmlFor="perc-field">
                                        Сумма %% по займу
                                    </label>
                                    <TextField
                                        id="perc-field"
                                        style={styles.textField}
                                        value={this.state.deal.PercRest}
                                    />
                                </div>
                                <div className="col-xs-4">
                                    <label htmlFor="comiss-field">
                                        Комиссия сервису
                                    </label>
                                    <TextField
                                        id="comiss-field"
                                        style={styles.textField}
                                        value={this.state.deal.ComissRest}
                                    />
                                </div>
                                <div className="col-xs-3 col-xs-offset-3" style={{textAlign: 'right'}}>
                                    <label htmlFor="rest-field">
                                        Сумма к возврату
                                    </label>
                                    <TextField
                                        id="rest-field"
                                        style={styles.textFieldBack}
                                        inputStyle={{textAlign: 'right'}}
                                        value={this.state.deal.AllRest}
                                    />
                                </div>
                            </div>
                        </CardText>
                    </Card>
                    <div className="white-layout clearfix dealings">
                        <div className="wrapper clearfix"></div>
                    </div>
                    <div className="row">

                        <div className="col-xs-5 col-xs-offset-2">
                            <RaisedButton label="Погасить сейчас"
                                          secondary={true}
                                          onClick={this.onDealCreateButtonClickHandler}
                            />
                        </div>
                        <div className="col-xs-4">
                            { AuthUtils.isTokenExist() && (
                            <FlatButton label="Написать сообщение"
                                          secondary={true}
                                          onClick={this.onOfferToArchButtonClickHandler}
                            />
                            )}
                        </div>
                        <div className="col-xs-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}


const styles = {
    textField : {
        width: 150,
        fontSize: 24
    },
    textFieldBack : {
        fontSize: 30,
        width: '100%',
        textAlign: 'right'
    },
    subheader : {
        backgroundColor: '#efefef',
        marginBottom: 10
    },
    h4 : {
        padding: '0 0 6px',
        borderBottom: 'solid 1px #4CAF50'
    }
};

/*
 rgb(255, 152, 0)

 */