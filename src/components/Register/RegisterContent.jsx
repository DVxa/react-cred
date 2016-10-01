import React, {Component} from 'react';
import { Link } from 'react-router';
import RegisterForm from './RegisterForm';


export default class RegisterContent extends Component {
    render() {
        return(
            <div>
                <div className="gray-layout row-padding">
                    <div className="wrapper clearfix">
                        <div className="row">
                            <div className="col-xs-9">
                                <RegisterForm />
                            </div>
                            <div className="col-xs-4 col-xs-offset-1">
                                <div className="row">
                                    <div className="col-xs-14">
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-14">
                                        <h4>Как правильно заполнить анкету заемщика?</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-layout clearfix dealings">
                    <div className="wrapper clearfix"></div>
                </div>
            </div>
       );
    }
}