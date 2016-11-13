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

    onBtnNewOfferClickHandler = () => {
        browserHistory.push('/offer/new/' + this.props.offerType);
    };

    render() {
        return(
            <div className="wrapper clearfix">
                <Paper style={{padding: '20px'}}>
                    <div className="row">
                        <div className="col-xs-14">
                            <MyOfferListTable
                                offerType={this.props.offerType}
                                url={this.props.url}
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}