/**
 * Created by V.Minyailov-book on 22.10.2016.
 */

import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Link } from 'react-router';
import OfferListTable from './OfferListTable';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';


export default class OfferListContent extends Component {
    constructor(props) {
        super(props);
        this.onBtnNewOfferClickHandler = this.onBtnNewOfferClickHandler.bind(this);
    }

    onBtnNewOfferClickHandler = () => {
        browserHistory.push('/offer/new/'
            + (this.props.offerType == "borrow" ? "lend" : "borrow") + '/' +
            + this.props.offerAmount + '/' +
            + this.props.offerPeriod + '/' +
            + this.props.offerRate
        );
    };

    render() {
        return(
            <div className="wrapper clearfix">
                <Paper style={{padding: '20px'}}>
                    <div className="row">
                        <div className="col-xs-9">
                            <OfferListTable offerType={this.props.offerType}
                                            offerAmount={this.props.offerAmount}
                                            offerPeriod={this.props.offerPeriod}
                                            offerRate={this.props.offerRate}
                            />
                            <div className="row">
                                <div className="col-xs-14">
                                    <RaisedButton onClick={this.onBtnNewOfferClickHandler}
                                                  label="Ничего не подходит, создать мою заявку"
                                                  style={{marginTop: 50}}
                                                  secondary={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-xs-offset-1">
                            <div className="row">
                                <div className="col-xs-14">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-14">
                                    <h4>Рассмотрите готовые предложения</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <Link to="/faq/offer-new-borrow"> More ... </Link>
                                </div>
                            </div>
                            <div className="wrapper clearfix"></div>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}