/**
 * Created by V.Minyailov-book on 22.10.2016.
 */

import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Link } from 'react-router';
import MyOfferListTable from './MyOfferListTable';


export default class MyOfferListContent extends Component {
    render() {
        return(
            <div>
                <div className="gray-layout row-padding">
                    <div className="wrapper clearfix">
                        <Paper style={{padding: '20px'}}>
                            <div className="row">

                                <div className="col-xs-10">
                                    <MyOfferListTable />
                                </div>
                                <div className="col-xs-3 col-xs-offset-1">
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
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
                <div className="white-layout clearfix dealings">
                    <div className="wrapper clearfix"></div>
                </div>
            </div>
        );
    }
}