/**
 * Created by V.Minyailov-book on 22.10.2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

import MyOfferListContent from "./components/MyOfferList/MyOfferListContent";

export default class MyOfferListPage extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            {this.props.params.type == 'borrow' ?
                                <div className="role" style={{paddingBottom: 0, paddingTop: 30}}>
                                    <ul className="role-tabs clearfix">
                                        <li className="col-xs-7 current">
                                        <span>
                                            Мои заявки на заем
                                        </span>
                                        </li>
                                        <li className="col-xs-7">
                                        <span>
                                            <Link to="/myoffers/lend">Мои предложения</Link>
                                        </span>
                                        </li>
                                    </ul>
                                </div>
                                :
                                <div className="role" style={{paddingBottom: 0, paddingTop: 30}}>
                                    <ul className="role-tabs clearfix">
                                        <li className="col-xs-7">
                                        <span>
                                            <Link to="/myoffers/borrow">Мои заявки на заем</Link>
                                        </span>
                                        </li>
                                        <li className="col-xs-7 current">
                                        <span>
                                            Мои предложения
                                        </span>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {/*<h1 style={{paddingTop:10, paddingBottom: 10}}>
                                Мои заявки на {'заем' : 'размещение'}
                            </h1>*/}
                        </div>
                    </div>
                </div>
                <MyOfferListContent offerType={this.props.params.type} />
            </div>
        );
    }
}