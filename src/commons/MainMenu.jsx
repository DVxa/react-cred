/**
 * Created by V.Minyailov-book on 29.09.2016.
 */
import React, { Component } from 'react';
import { Link } from  'react-router';

export default class MainMenu extends Component {
    render() {
        return (
            <div className="top-menu-block full-width">
                <ul className="top-menu elem4 clearfix">
                    <li className="">
                        <Link to="/">Тестовая</Link>
                    </li>
                    <li className="">
                        <Link to="/home">Главная</Link>
                    </li>
                    <li className="">
                        <Link to="/about">О сервисе</Link>
                    </li>
                    <li className="">
                        <Link to="/faq">Вопрос-Ответ</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
