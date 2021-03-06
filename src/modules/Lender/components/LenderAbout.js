import React, {Component} from 'react';
import  { Link } from 'react-router';


export default class LenderAbout extends Component {
    render() {
        return (
            <div>
                <div className="gray-layout about-project">
                    <div className="wrapper clearfix">
                        <h2>Цель проекте</h2>
                        <p>
                            Онлайн-займы для всех регионов России. В Кассе взаимопомощи можно взять деньги в долг без справок и
                            поручителей. Заемщики с хорошей кредитной историей могут оформлять экспресс кредиты на более
                            выгодных условиях. Займы выдаются на карту.
                        </p>
                        <p>
                            Кредиторы могут выдавать деньги в долг на более выгодных условиях, чем банковские депозиты или ПИФы.
                        </p>
                        <p>
                            Для взятия или выдачи займа в Кассе взаимопомощи достаточно <Link to="/register">зарегистрироваться.</Link>
                        </p>
                    </div>
                </div>
                <div className="white-layout clearfix dealings">
                    <div className="wrapper clearfix"></div>
                </div>
            </div>
        )
    }
}
