import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
// Icons
import UserLogOut from 'material-ui/svg-icons/action/exit-to-app';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';
// Utils
import {ApiClient} from '../utils/ApiClient';
import {AuthUtils} from "../utils/AuthUtils";
// Const
import {PATH_TO_SERVER} from '../utils/Constants';

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

export default class Header extends Component {
    constructor () {
        super ();
        this.state = {
            modalIsOpen: false,
            open: true,
            value: 3,
            login: '',
            password: '',
            logged: AuthUtils.isTokenExist(),
            error: '-'

        };
        this.openModal      = this.openModal.bind(this);
        this.closeModal     = this.closeModal.bind(this);
    }
    openModal () {
        this.setState({modalIsOpen: true});
    }
    closeModal () {
        this.setState({modalIsOpen: false});
    }

    onProfileButtonClick = () => {
        this.setState({logged: false});
        browserHistory.push('/profile');
    };

    onEnterButtonClick = () => {

        let body =
            'username='+ encodeURIComponent(this.state.login) +
            '&password='+ encodeURIComponent(this.state.password);
        let url = PATH_TO_SERVER + "authentication";

        ApiClient.postNoAuth(url, body)
            .then(
                (data) => {
                    //console.log(data);
                    if (data.status) {
                        var result = data.result;
                        this.setState({error: ''});
                        localStorage.setItem('auth-token', result.hash);
                        localStorage.setItem('uid', result.UID);
                        this.setState({modalIsOpen: false});
                        browserHistory.push('/myoffers/borrow');
                    } else {
                        //console.error(result.error);
                        this.setState({error: data.result})
                    }
                }
            );

    };

    onLoginChange = (event) => {
        this.setState({login: event.target.value});
    };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    };

    handleChange = (event, index, value) => this.setState({value});

    onBtnLogOutClickHandler = () => {
        browserHistory.push("/logout");

    };

    render() {

        let logged = AuthUtils.isTokenExist();

        const actions = [
            <Link to="/remind-password" className="gray-link">Забыли логин или пароль?</Link>,
            <RaisedButton
                style={btnStyles}
                label="Войти"
                secondary={true}
                onClick={this.onEnterButtonClick}
            />,
            <FlatButton
                label="Отмена"
                primary={true}
                onClick={this.closeModal}
            />
        ];

        return (
            <header className="header">
                <div className="row">
                    <div className="col-xs-14">
                        <AppBar
                            title={<span>Касса взаимопомощи</span>}
                            showMenuIconButton={false}
                            iconElementRight={
                                logged ?
                                    <div>
                                        <IconButton onClick={this.onBtnLogOutClickHandler}>
                                            <Settings/>
                                        </IconButton>
                                        <IconButton onClick={this.onBtnLogOutClickHandler}>
                                            <UserLogOut/>
                                        </IconButton>
                                    </div>
                                :
                                    <FlatButton label="Вход и регистрация"
                                        onClick={this.openModal}
                                        primary={true}
                                    />
                            }
                        />
                    </div>
                </div>
                <Dialog
                    title="Вход в личный кабинет"
                    open={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    modal={true}
                    actions={actions}
                >
                    <p>Впервые пользуетесь услугами нашего сервиса? Пожалуйста,
                    <Link to="/register" onClick={this.closeModal}> ЗАРЕГИСТРИРУЙТЕСЬ</Link></p>
                    <p>Если вы уже пользовались нашими услугами, пожалуйста, авторизуйтесь:</p>

                    <TextField
                        style={textStyles}
                        type="text"
                        name="email"
                        errorText=""
                        hintText="E-mail"
                        floatingLabelText="E-mail"
                        onChange={this.onLoginChange}
                        value={this.state.login}
                    />

                    <TextField
                        style={textStyles}
                        type="password"
                        name="password"
                        errorText=""
                        hintText="Пароль"
                        floatingLabelText="Пароль"
                        onChange={this.onPasswordChange}
                        value={this.state.password}
                    />
                    <Divider />
                    <div className="alert alert-warning">
                        {this.state.error}
                    </div>
                    <Divider />

                </Dialog>
            </header>
        );
    }
};


const btnStyles = {
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    margin: '12px 12px 12px 24px'
};

const textStyles = {
    width: '43%',
    margin: '0 20px',
    fontSize: '18px'

};
