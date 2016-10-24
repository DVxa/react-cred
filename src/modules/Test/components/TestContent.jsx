/**
 * Created by V.Minyailov-book on 22.10.2016.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Add from 'material-ui/svg-icons/av/playlist-add';
import Home from 'material-ui/svg-icons/action/home';
import ListIco from 'material-ui/svg-icons/action/list';
import UserAdd from 'material-ui/svg-icons/social/person-add';

import {Link } from 'react-router';
import Subheader from 'material-ui/Subheader';


export default class TestContent extends Component {
    render() {
        return(
            <div>
                <div className="row-padding">
                    <div className="wrapper clearfix">
                        <Paper style={{padding: '20px'}}>
                            <h1>Тестовая для просмотра страниц</h1>
                            <div className="row">

                                <div className="col-xs-9">
                                    <List>
                                        <Subheader>Основные</Subheader>
                                        <Link to="/home"><ListItem primaryText="Главная" leftIcon={<Home />}></ListItem></Link>
                                        <Link to="/about"><ListItem primaryText="О проекте" leftIcon={<ActionInfo />} /></Link>
                                        <Divider />
                                        <Subheader>Заявки</Subheader>
                                        <Link to="/offernew"><ListItem primaryText="Создать заявку" leftIcon={<Add />} /></Link>
                                        <Link to="/offers/my"><ListItem primaryText="Список моих заявок" leftIcon={<ListIco />} /></Link>
                                        <Divider />
                                        <Subheader>Сделки</Subheader>
                                        <Divider />
                                        <Subheader>Учетные</Subheader>
                                        <Link to="/register"><ListItem primaryText="Регистрация" leftIcon={<UserAdd />} /></Link>
                                    </List>
                                </div>
                                <div className="col-xs-4 col-xs-offset-1">
                                    <div className="row">
                                        <div className="col-xs-14">
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-14">
                                            <h4>Тестирование всех страничек</h4>
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
        );
    }
}