/**
 * Created by V.Minyailov-book on 22.10.2016.
 */
import React, { Component } from 'react';
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
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>
                                Мои заявки на {this.props.params.type == 'borrow' ? 'заем' : 'размещение'}
                            </h1>
                        </div>
                    </div>
                </div>
                <MyOfferListContent offerType={this.props.params.type} />
            </div>
        );
    }
}