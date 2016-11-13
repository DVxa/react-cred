/**
 * Created by V.Minyailov-book on 23.10.2016.
 */
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SubHeader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';

import { AuthUtils } from '../../../../utils/AuthUtils';
import { ApiClient } from '../../../../utils/AuthUtils';
import { PATH_TO_SERVER } from '../../../../utils/Constants';

export default class DealForm extends Component {
    constructor(props) {
        super(props);
        this.state = {deal : []};
    }

    componentWillMount() {
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
        ApiClient.get(url)
            .then (
                (data) => console.log(data);
            );
        */
    }

    onDealPayNowButtonClickHandler = () => {
        alert("Создать  пока нет возможности");
    };

    render() {
        if (this.state.deal.length == 0) {
            return(
                <div style={{width: '100%', height: 200, textAlign: 'center', padding: 120}}>
                    <CircularProgress />
                </div>
            )
        }

        return (
            <form id="data">
                <SubHeader style={styles.subheader}>
                    Основные данные
                </SubHeader>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <TextField
                            floatingLabelText="Сумма сделки (руб)"
                            style={styles.textField}
                            disabled={true}
                            defaultValue={this.state.deal.Amount}
                            fullWidth={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-5 col-xs-offset-2">
                        <TextField
                            floatingLabelText="Период сделки (дн)"
                            disabled={true}
                            defaultValue={this.state.deal.Period}
                            style={styles.textField}
                            fullWidth={true}
                        />
                    </div>
                    <div className="col-xs-5">
                        <TextField
                            floatingLabelText="Ставка (% в день)"
                            disabled={true}
                            defaultValue={this.state.deal.Rate}
                            style={styles.textField}
                            fullWidth={true}
                        />
                    </div>
                </div>
                <SubHeader style={styles.subheader}>
                    Даты
                </SubHeader>
                <div className="row">
                    <div className="col-xs-5 col-xs-offset-2">
                        <TextField
                            floatingLabelText="Дата совершения сделки"
                            style={styles.textField}
                            disabled={true}
                            defaultValue={this.state.deal.DateDeal}
                            fullWidth={true}
                        />
                    </div>
                    <div className="col-xs-5">
                        <TextField
                            floatingLabelText="Дата окончания сделки"
                            disabled={true}
                            defaultValue={this.state.deal.DateEnd}
                            style={styles.textField}
                            fullWidth={true}
                        />
                    </div>
                </div>
                <SubHeader style={styles.subheader}>
                    Суммы и начисления
                </SubHeader>
                <div className="row">
                    <div className="col-xs-5 col-xs-offset-2">
                        <TextField
                            floatingLabelText="Сумма %% по займу (руб)"
                            style={styles.textField}
                            disabled={true}
                            defaultValue={this.state.deal.PercRest}
                            fullWidth={true}
                        />
                    </div>
                    <div className="col-xs-5">
                        <TextField
                            floatingLabelText="Комиссия сервису (руб)"
                            style={styles.textField}
                            disabled={true}
                            defaultValue={this.state.deal.ComissRest}
                            fullWidth={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2" style={{textAlign: 'right'}}>
                        <TextField
                            floatingLabelText="Сумма к возврату (руб)"
                            style={styles.textFieldBack}
                            inputStyle={{textAlign: 'right'}}
                            disabled={true}
                            defaultValue={this.state.deal.AllRest}
                            fullWidth={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-10">
                        <RaisedButton label="Погасить сейчас"
                                      secondary={true}
                                      onClick={this.onDealPayNowButtonClickHandler}
                                      fullWidth={true}
                        />
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
    textFieldBack : {
        fontSize: 24,
        textAlign: 'right'
    },
    subheader : {
        backgroundColor: '#efefef'
    },
    h4 : {
        padding: '0 0 6px',
        borderBottom: 'solid 1px #4CAF50'
    }
};

/*
 rgb(255, 152, 0)

 */