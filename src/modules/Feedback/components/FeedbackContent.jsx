import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FeedbackForm from './FeedbackForm';
import {Link } from 'react-router';

export default class FeedbackContent extends Component {
    render() {
        return(
            <div className="wrapper clearfix">
                <Paper style={{padding: '20px'}}>
                    <div className="row">
                        <div className="col-xs-9">
                            <FeedbackForm />
                        </div>
                        <div className="col-xs-4 col-xs-offset-1">
                            <div className="row">
                                <div className="col-xs-14">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-14">
                                    <h4>У вас есть вопрос?</h4>
                                    <p>
                                        Напишите нам и мы рассмотрим ваше предложение, вопрос или жалобу.
                                        Возможно ответ на ваш вопрос уже есть ответ в разделе <Link to="/faq">Вопрос-ответ</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
       );
    }
}