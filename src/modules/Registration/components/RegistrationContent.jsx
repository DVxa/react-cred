import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RegistrationForm from './RegistrationForm';
import {Link } from 'react-router';


export default class RegistrationContent extends Component {
    render() {
        return(
            <div className="wrapper clearfix">
                <Paper style={{padding: '20px'}}>
                    <div className="row">
                        <div className="col-xs-9">
                            <RegistrationForm />
                        </div>
                        <div className="col-xs-4 col-xs-offset-1">
                            <div className="row">
                                <div className="col-xs-14">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-14">
                                    <h4>Как правильно заполнить анкету?</h4>
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
       );
    }
}