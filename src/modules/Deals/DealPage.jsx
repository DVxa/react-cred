/**
 * Created by V.Minyailov-book on 15.10.2016.
 */

import React, { Component } from 'react';
import DealContent from './components/Deal/DealContent';

export default class DealPage extends Component {
    render(){
        return(
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>Сделка # {this.props.params.dealId}</h1>
                        </div>
                    </div>
                </div>
                <DealContent dealId={this.props.params.dealId} />
            </div>
        )
    }
};