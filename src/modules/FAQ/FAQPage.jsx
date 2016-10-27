import React, { Component } from 'react';
import FAQContent from './components/FAQContent';

export default class FAQ extends Component {
    render() {
        return (
            <div>
                <div className="wrapper clearfix">
                    <div className="row">
                        <div className="col-xs-14">
                            <h1 style={{paddingTop:10, paddingBottom: 10}}>О проекте</h1>
                        </div>
                    </div>
                </div>
                <FAQContent />
            </div>
        );
    }
}
