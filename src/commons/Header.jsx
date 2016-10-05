import React, { Component } from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import MainMenu from './MainMenu';
import LoginPopupForm from './LoginPopupForm';

const customStyles = {
    content : {
        top             : '50%',
        left            : '50%',
        right           : 'auto',
        bottom          : 'auto',
        marginRight     : '-50%',
        transform       : 'translate(-50%, -50%)',
        width           : '400px',
        background      : '#ededed'
    }
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
        return (
            <header className="header">
                <div className="wrapper clearfix">
                    <div className="col-xs-4 logo-block">
                        <a href="index.html" className="logo-link">
                            <img src="./static/dist/img/logo_sb1.png" alt="" width="250"/>
                            <span>Человек человеку — банк</span>
                        </a>
                    </div>

                    <div className="col-xs-6">
                        <div className="login-block not-logged">
                             <span onClick={this.openModal}>Вход / Регистрация</span>
                        </div>
                    </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                    >

                        {/*<button onClick={this.closeModal}>close</button>*/}
                        <h4 className="text-center">Вход в личный кабинет</h4>
                        <div className="fgr-popup__login-form gray-layout clearfix">
                            <div className="row">
                                <div className="col-xs-12 col-xs-offset-1">
                                    <p>Впервые пользуетесь услугами нашего сервиса? Пожалуйста, <Link
                                        to="/register">ЗАРЕГИСТРИРУЙТЕСЬ</Link></p>
                                    <p>Если вы уже пользовались нашими услугами, пожалуйста, авторизуйтесь:</p>
                                </div>
                            </div>
                            <LoginPopupForm />
                        </div>
                        <div className="col-xs-12 col-xs-offset-1 clearfix">&nbsp;</div>
                        <a className="fgr-popup__close" href="#" onClick={this.closeModal}>
                            <i className="popup-close"></i>
                        </a>
                    </Modal>

                    <div className="col-xs-4">
                        <div className="contacts-block">
                            <i className="contacts-block__phone-icon"></i>
                            8 (800) 600-0101
                            <div className="contacts-time">С Понедельника по Пятницу с 9-00 до 19-00</div>
                        </div>
                    </div>
                    <MainMenu />
                </div>
            </header>
        );
    }
};