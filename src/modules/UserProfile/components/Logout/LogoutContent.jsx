/**
 * Created by V.Minyailov-book on 27.10.2016.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {browserHistory} from 'react-router';

export default class LogoutContent  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true
        }
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    onExitButtonClick = () => {
        localStorage.clear();
        this.closeModal();
        browserHistory.push('/');
    };

    onCancelButtonClick = () => {
        this.closeModal();
        browserHistory.goBack;
    };

    render() {
        const actions = [
            <RaisedButton
                label="Выход"
                secondary={true}
                onClick={this.onExitButtonClick}
            />,
            <FlatButton
                label="Отмена"
                primary={true}
                onClick={this.onCancelButtonClick}
            />
        ];

        return (
            <div className="wrapper clearfix">
                <Paper style={{padding: '20px'}}>
                    <div className="row">
                        <div className="col-xs-9">
                            <Dialog
                                title="Действительно хотите выйти из системы"
                                open={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                modal={true}
                                actions={actions}
                            >
                            </Dialog>
                        </div>
                        <div className="col-xs-4 col-xs-offset-1">
                            <div className="row">
                                <div className="col-xs-14">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-14">
                                    <h4>Как правильно заполнить профиль?</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}
