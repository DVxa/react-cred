import React, {Component} from 'react';
import  { Link } from 'react-router';


export default class HomeAbout extends Component {
    render() {
        return (
            <div className="about-project">
                <h2>Цель проекта</h2>
                <p>
                    Касса взаимопомощи - это сообщество, в котором сотрудники смогут прийти на выручку коллегам в случае
                    финансово затруднительной ситуации.
                    Процент, под который можно взять займ очень выгодно отличается от сторонних краудлендинговых площадок.
                </p>
                <p>
                    Займы доступны для всех регионов России. Заемщики с хорошей кредитной историей могут оформлять экспресс кредиты на более
                    выгодных условиях. Займы выдаются на карту.
                </p>
                <p>
                    Для взятия или выдачи займа достаточно <Link to="/register">зарегистрироваться.</Link>
                </p>
            </div>
        )
    }
}
