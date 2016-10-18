import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';

import MainMenu from './MainMenu';


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

export class Header extends Component {
    constructor () {
        super ();
        this.state = {
            modalIsOpen: false
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
    render() {

        const actions = [
            <Link to="/remind-password" className="gray-link">Забыли логин или пароль?</Link>,
            <RaisedButton
                style={btnStyles}
                label="Вход"
                secondary={true}
            />,
            <FlatButton
                label="Отмена"
                primary={true}
                onClick={this.closeModal}
            />
        ];

        return (
            <header className="header">
                <AppBar
                    title="Касса взаимопомощи"
                    showMenuIconButton={false}
                    iconElementLeft={
                        <Avatar src="./static/dist/img/avatar_sb.png"
                                size={45}
                        />
                    }
                >
                    <FlatButton style={btnStyles}
                        label="Вход / Регистрация"
                        onClick={this.openModal}
                    />
                </AppBar>
                <div className="wrapper clearfix">
                    <div className="col-xs-4 logo-block">
                        {/*<img src="./static/dist/img/logo_sb1.png" alt="" width="250"/>*/}
                        <span>Человек человеку — банк</span>

                    </div>
                    {/*
                    <div className="col-xs-6">
                        <div className="login-block not-logged">
                             <span onClick={this.openModal}>Вход / Регистрация</span>
                        </div>
                    </div>*/}
                    <Dialog
                        title="Вход в личный кабинет"
                        open={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        modal={true}
                        actions={actions}
                    >
                        <p>Впервые пользуетесь услугами нашего сервиса? Пожалуйста,
                        <Link to="/register"> ЗАРЕГИСТРИРУЙТЕСЬ</Link></p>
                        <p>Если вы уже пользовались нашими услугами, пожалуйста, авторизуйтесь:</p>

                        <TextField
                            style={textStyles}
                            type="text"
                            name="email"
                            errorText=""
                            hintText="E-mail"
                            floatingLabelText="E-mail"
                        />

                        <TextField
                            style={textStyles}
                            type="password"
                            name="password"
                            errorText=""
                            hintText="Пароль"
                            floatingLabelText="Пароль"
                        />

                    </Dialog>
                    {/*
                    <div className="col-xs-4">
                        <div className="contacts-block">
                            <i className="contacts-block__phone-icon"></i>
                            8 (800) 600-0101
                            <div className="contacts-time">С Понедельника по Пятницу с 9-00 до 19-00</div>
                        </div>
                    </div>
                    */}
                    <MainMenu />
                </div>
            </header>
        );
    }
};