import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {browserHistory} from 'react-router';

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

export default class Header extends Component {
    constructor () {
        super ();
        this.state = {
            modalIsOpen: false,
            open: true,
            value: 3,
            login: '',
            password: ''
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

    onEnterButtonClick = () => {
        let body = JSON.stringify({
            login: this.state.login,
            password: this.state.password,
        });
        fetch(
            'http://192.168.1.213:8077/user-profile/login',
            {
                method: 'post',
                body: body,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        ).then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                return response.json();
            },
            (error) => {
                console.log('Fetch Error: ', error);
                return Promise.reject(error);
            }
        ).then((body) => {
            if (body.status == true) {
                localStorage.setItem('auth-token', body.result.token);
                browserHistory.push('/offers/my');
            }
        });
    };

    onLoginChange = (event) => {
        this.setState({login: event.target.value});
    };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {

        const actions = [
            <Link to="/remind-password" className="gray-link">Забыли логин или пароль?</Link>,
            <RaisedButton
                style={btnStyles}
                label="Вход"
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
                        <Toolbar>
                            <ToolbarGroup firstChild={true}>
                                <ToolbarTitle text="Касса взаимопомощи"
                                              style={{paddingLeft:30}}
                                />
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <ToolbarTitle text="Поиск" />
                                <ToolbarSeparator />
                                <RaisedButton label="Вход и регистрация"
                                              primary={true}
                                              onClick={this.openModal}
                                />
                                <ToolbarSeparator />
                                <IconMenu
                                    iconButtonElement={
                                        <IconButton touch={true}>
                                            <NavMoreVert />
                                        </IconButton>
                                    }
                                >
                                    <MenuItem primaryText="Download" />
                                    <MenuItem primaryText="More Info" />
                                </IconMenu>
                            </ToolbarGroup>
                        </Toolbar>
                        {/*
                        <AppBar
                            title="Касса взаимопомощи"
                            showMenuIconButton={false}
                            zDepth={1}
                            onLeftIconButtonTouchTap={this.drawerHandleToggle}
                        >
                            <FlatButton style={btnStyles}
                                        label="Вход / Регистрация"
                                        onClick={this.openModal}
                                        secondary={false}
                            />
                        </AppBar>*/}
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
                    <Link to="/register"> ЗАРЕГИСТРИРУЙТЕСЬ</Link></p>
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

                </Dialog>
            </header>
        );
    }
};


/*
 {/*iconElementLeft={
 <Avatar src="/static/dist/img/avatar_sb.png"
 size={45}
 />
 }*/

