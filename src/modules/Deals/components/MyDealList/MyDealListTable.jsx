/**
 * Created by V.Minyailov-book on 22.10.2016.
 */

import React, {Component} from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

export default class MyDealListTable extends Component {

    constructor(props) {
        super(props);
        this.state = {offers : []};
        //this.getMyOffersData = this.getMyOffersData.bind(this);
        this.onOfferMoreButtonClickHandler = this.onOfferMoreButtonClickHandler.bind(this);
    }

    onOfferMoreButtonClickHandler = (e) => {
        console.log(e.target.getAttribute('value'));
    };

    componentWillMount() {
    //getMyOffersData () {
        let self = this;

        let uid = localStorage.getItem('uid');
        let access_token = localStorage.getItem('auth-token');
        console.log(uid + ' - ' + access_token);

        let deals = [
            {   "ID"            : "1",
                "UserLender"    : "1",
                "UserBorrower"  : "2",
                "State_ref"     : "1",
                "OfferId_ref"   : "1",
                "DateDeal"      : "01.11.2016",
                "Amount"        : "10000",
                "Period"        : "14",
                "Rate"          : "0.1",
                "AllRest"       : "10285",
                "PercRest"      : "250",
                "ComissRest"    : "35",
                "DateEnd"       : "15.11.2016"
            },
            {   "ID"            : "2",
                "UserLender"    : "2",
                "UserBorrower"  : "3",
                "State_ref"     : "1",
                "OfferId_ref"   : "1",
                "DateDeal"      : "01.11.2016",
                "Amount"        : "15000",
                "Period"        : "12",
                "Rate"          : "0.1",
                "AllRest"       : "15430",
                "PercRest"      : "290",
                "ComissRest"    : "40",
                "DateEnd"       : "13.11.2016"
            }
        ];
        self.setState({deals: deals});

        /*
        let promise = fetch (
            'http://192.168.1.213:8077/request-loan/user-request/' + uid,
            {
                method: 'GET',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                credentials: 'include'
            }
        ).then (
            function(response) {
                if (response.status !== 200) {
                    console.log('Status Code: ' + response.status);
                    return;
                }
                response.json().then(function (data) {
                    self.setState({offers: data});
                });
            }
        ).catch(function(err) {
            console.log('Fetch Error: ', err);
        });
        */
    }

    render () {
//        this.getMyOffersData();
        return (
            <Table>
                <TableHeader adjustForCheckbox={false}
                             displaySelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn>Сумма</TableHeaderColumn>
                        <TableHeaderColumn>Период</TableHeaderColumn>
                        <TableHeaderColumn>Ставка (%/дн)</TableHeaderColumn>
                        <TableHeaderColumn>Возврат</TableHeaderColumn>
                        <TableHeaderColumn>Сумма</TableHeaderColumn>
                        <TableHeaderColumn>Подробности</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.state.deals.map((elem, index) => (
                    <TableRow key={index} data-item={elem.ID} onClick={this.onOfferMoreButtonClickHandler}>
                        <TableRowColumn style={{fontSize: 18}}>{elem.Amount}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.Period}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.Rate}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.DateEnd}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.AllRest}</TableRowColumn>

                        <TableRowColumn>
                            {/*<RaisedButton label="открыть"
                                          secondary={true}
                                          onClick={(e) => this.onOfferMoreButtonClickHandler}
                                          value={elem.ID}
                            />*/}
                            <Link to={"/deal/" + elem.ID}>More ...</Link>
                        </TableRowColumn>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}
