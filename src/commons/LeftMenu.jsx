/**
 * Created by V.Minyailov-book on 24.10.2016.
 */

import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router';

import AuthUtils from '../AuthUtils';
// Icons
import OfferAdd from 'material-ui/svg-icons/av/playlist-add';
import ListIco from 'material-ui/svg-icons/action/list';
import UserProfile from 'material-ui/svg-icons/social/person';
import UserSettings from 'material-ui/svg-icons/action/settings';
import UserLogOut from 'material-ui/svg-icons/action/exit-to-app';

export default class LeftMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <List style={{borderRight: "solid 1px rgb(76, 175, 80)"}}>
                    <Subheader>Заявки</Subheader>
                    <Link to="/offer/new/borrow"><ListItem primaryText="Создать заявку на заем" leftIcon={<OfferAdd />} /></Link>
                    <Link to="/offer/new/lend"><ListItem primaryText="Создать заявку на размещение" leftIcon={<OfferAdd />} /></Link>
                    <Link to="/offers/borrow/my"><ListItem primaryText="Список моих заявок" leftIcon={<ListIco />} /></Link>
                    <Link to="/offers/borrow"><ListItem primaryText="Запросы" leftIcon={<ListIco />} /></Link>
                    <Link to="/offers/lend"><ListItem primaryText="Предложения" leftIcon={<ListIco />} /></Link>
                    <Divider />
                    <Subheader>Сделки</Subheader>
                    <Divider />
                    <Subheader>Учетные</Subheader>
                    <Link to="/profile"><ListItem primaryText="Профиль" leftIcon={<UserProfile />} /></Link>
                    <Link to="/settings"><ListItem primaryText="Настройки" leftIcon={<UserSettings />} /></Link>
                    <Link to="/logout"><ListItem primaryText="Выход" leftIcon={<UserLogOut />} /></Link>
                </List>
            </div>
        )
    }
}