/**
 * Created by V.Minyailov-book on 15.10.2016.
 */

import React, { Component } from 'react';
import OfferContent from './components/Offer/OfferContent';

export default class OfferPage extends Component {
    render(){
        return(
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>Заявка # {this.props.params.offerId}</h1>
                        </div>
                    </div>
                </div>
                <OfferContent offerId={this.props.params.offerId} />
            </div>
        )
    }
};