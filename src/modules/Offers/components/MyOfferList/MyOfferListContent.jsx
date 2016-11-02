/**
 * Created by V.Minyailov-book on 22.10.2016.
 */

import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Link } from 'react-router';
import MyOfferListTable from './MyOfferListTable';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';


export default class MyOfferListContent extends Component {
    constructor(props) {
        super(props);
        this.onBtnNewOfferClickHandler = this.onBtnNewOfferClickHandler.bind(this);
    }

    onBtnNewOfferClickHandler() {
        browserHistory.push('/offer/new/' + this.props.offerType);
    }

    render() {
        return(
            <div className="wrapper clearfix">
                <Paper style={{padding: '20px'}}>
                    <div className="row">
                        <div className="col-xs-9">
                            <MyOfferListTable offerType={this.props.offerType}/>
                        </div>
                        <div className="col-xs-4 col-xs-offset-1">
                            <div className="row">
                                <div className="col-xs-14">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-14">
                                    <h4>Как рассмотреть заявку</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <Link to="/faq/offer-new-borrow"> More ... </Link>
                                </div>
                            </div>
                            <div className="wrapper clearfix"></div>
                            <div className="row">
                                <div className="col-xs-14">
                                    <RaisedButton onClick={this.onBtnNewOfferClickHandler}
                                                  label="Создать заявку"
                                                  style={{marginTop: 50}}
                                                  secondary={true}
                                                  labelStyle={{fontSize: 18}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}