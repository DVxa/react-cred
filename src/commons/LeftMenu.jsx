/**
 * Created by V.Minyailov-book on 24.10.2016.
 */

import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router';
import Badge from 'material-ui/Badge';

// Icons
import OfferAdd from 'material-ui/svg-icons/av/playlist-add';
import ListIco from 'material-ui/svg-icons/action/list';
import UserProfile from 'material-ui/svg-icons/content/save';
import Login from 'material-ui/svg-icons/action/input';
import Register from 'material-ui/svg-icons/social/person-add';
import UserSettings from 'material-ui/svg-icons/action/settings';
import UserLogOut from 'material-ui/svg-icons/action/exit-to-app';
import DealIco from 'material-ui/svg-icons/editor/attach-money';
import MessIco from 'material-ui/svg-icons/communication/email';
import AlertIco from 'material-ui/svg-icons/social/notifications';

import {AuthUtils} from '../AuthUtils';

export default class LeftMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <List style={{borderRight: "solid 1px rgb(76, 175, 80)", backgroundColor: 'white'}}>
                    <Subheader>Заявки</Subheader>
                    <Link to="/offer/new/borrow">
                        <ListItem primaryText="Создать заявку на заем"
                                  leftIcon={<OfferAdd />}
                        />
                    </Link>
                    <Link to="/offer/new/lend">
                        <ListItem primaryText="Создать предложение"
                                  leftIcon={<OfferAdd />}
                        />
                    </Link>
                    { AuthUtils.isTokenExist() && (
                        <div>
                            <Link to="/myoffers/borrow">
                                <ListItem primaryText="Список моих заявок"
                                          rightIcon={<Badge badgeContent={2} secondary={true} />}
                                          leftIcon={<ListIco />}
                                />
                            </Link>
                            <Link to="/offers/borrow"><ListItem primaryText="Заявки на заем" leftIcon={<ListIco />} /></Link>
                            <Link to="/offers/lend"><ListItem primaryText="Предложения" leftIcon={<ListIco />} /></Link>
                        </div>
                    )}
                    <Divider />
                    { AuthUtils.isTokenExist() && (
                        <div>
                            <Subheader>Мои сделки</Subheader>
                                <Link to="/mydeals/borrow">
                                    <ListItem primaryText="По займам" r
                                              rightIcon={<Badge badgeContent={3} secondary={true} />}
                                              leftIcon={<DealIco />}
                                    />
                                </Link>
                                <Link to="/mydeals/lend">
                                    <ListItem primaryText="По размещению"
                                              leftIcon={<DealIco />}
                                              rightIcon={<Badge badgeContent={1} secondary={true} />}
                                    />
                                </Link>
                        </div>
                        )}
                    <Divider />
                    <Subheader>Учетные</Subheader>
                    { !AuthUtils.isTokenExist() && (
                        <div>
                            <Link to="/login"><ListItem primaryText="Вход в систему" leftIcon={<Login />} /></Link>
                            <Link to="/register"><ListItem primaryText="Регистрация" leftIcon={<Register />} /></Link>
                        </div>
                    )}
                    { AuthUtils.isTokenExist() && (
                        <div>
                            <Link to="/profile"><ListItem primaryText="Профиль" leftIcon={<UserProfile />} /></Link>
                            <Link to="/messages">
                                <ListItem primaryText="Сообщения"
                                          rightIcon={<Badge badgeContent={1} primary={true} />}
                                          leftIcon={<MessIco />}
                                />
                            </Link>
                            <Link to="/alerts">
                                <ListItem primaryText="Уведомления"
                                          rightIcon={<Badge badgeContent={3} primary={true} />}
                                          leftIcon={<AlertIco />}
                                />
                            </Link>
                            <Link to="/settings"><ListItem primaryText="Настройки" leftIcon={<UserSettings />} /></Link>
                            <Link to="/logout"><ListItem primaryText="Выход" leftIcon={<UserLogOut />} /></Link>
                        </div>
                        ) }
                </List>
            </div>
        )
    }
}