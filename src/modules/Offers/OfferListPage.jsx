/**
 * Created by V.Minyailov-book on 15.10.2016.
 */
import React, { Component } from 'react';
import OfferListContent from './components/OfferList/OfferListContent';

export default class OfferListPage extends Component {
    render(){
        return(
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>
                                Заявки на {this.props.params.type == 'borrow' ? 'заем' : 'размещение'} по вашему запросу</h1>
                        </div>
                    </div>
                </div>
                <OfferListContent offerType={this.props.params.type}
                                  offerAmount={this.props.params.amount}
                                  offerPeriod={this.props.params.period}
                                  offerRate={this.props.params.rate}
                />
            </div>
        )
    }
};