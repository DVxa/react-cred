import React from 'react';
import Paper from 'material-ui/Paper';
import {Link } from 'react-router';

export default class FAQContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row-padding">
                    <div className="wrapper clearfix">
                        <Paper style={{padding: '20px'}}>
                            <h1>Вопрос-ответ</h1>
                            <div className="row">
                                <div className="col-xs-9">

                                </div>
                                <div className="col-xs-4 col-xs-offset-1">
                                    <div className="row">
                                        <div className="col-xs-14">
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-14">
                                            <h4>Обратная связь</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                            <Link to="/faq/register"> More ... </Link>
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
        )
    }
}
