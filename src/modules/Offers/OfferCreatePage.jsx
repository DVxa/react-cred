/**
 * Created by V.Minyailov-book on 17.10.2016.
 */
import React, { Component } from 'react';
import OfferCreateContent from "./components/OfferCreate/OfferCreateContent";

export default class OfferCreatePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>
                                Создать заявку на {this.props.params.type == 'borrow' ? 'заем' : 'размещение'}
                            </h1>
                        </div>
                    </div>
                </div>
                <OfferCreateContent type={this.props.params.type}
                                    amount={this.props.params.amount}
                                    period={this.props.params.period}
                                    rate={this.props.params.rate}
                                    />
            </div>
        );
    }
}