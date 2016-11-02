/**
 * Created by V.Minyailov-book on 23.10.2016.
 */
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { AuthUtils } from '../../../../AuthUtils';

export default class OfferForm extends Component {
    constructor(props) {
        super(props);
        this.state = {offer : []};
        this.onDealCreateButtonClickHandler = this.onDealCreateButtonClickHandler.bind(this);
        this.onOfferToArchButtonClickHandler = this.onOfferToArchButtonClickHandler.bind(this);
    }


    componentWillMount() {
        //getMyOffersData () {
        let self = this;
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
                    <div className="row">
                        <div className="col-xs-3">
                            <h7>Рублей</h7>
                            <h2>{this.state.offer.LOAN_SUMM}</h2>
                        </div>
                        <div className="col-xs-3">
                             <h7>Дней</h7>
                             <h2>{this.state.offer.PERIOD}</h2>
                        </div>
                        <div className="col-xs-3">
                             <h7>%/день</h7>
                             <h2>{this.state.offer.RATE}</h2>
                        </div>
                        <div className="col-xs-5">
                            <h7>Возможность дробления</h7>
                            <h4>Дробление не разрешено</h4>
                        </div>
                    </div>
                    <div className="white-layout clearfix dealings">
                        <div className="wrapper clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-7">
                            <h7>Дата возврата</h7>
                            <h2>12.11.2016</h2>
                        </div>
                        <div className="col-xs-7">
                            <h7>Сумма возврата</h7>
                            <h2>{this.state.offer.LOAN_SUMM +
                                 this.state.offer.LOAN_SUMM *
                                 this.state.offer.RATE / 100 * this.state.offer.PERIOD
                            }</h2>
                        </div>
                    </div>
                    <div className="white-layout clearfix dealings">
                        <div className="wrapper clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4"></div>
                        <div className="col-xs-5">
                            <RaisedButton label="Оформить сделку"
                                          secondary={true}
                                          onClick={this.onDealCreateButtonClickHandler}
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
                        <div className="col-xs-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
