import React, {Component} from 'react';
import { Link } from 'react-router';
import HomeOffesrLoan from './HomeOffesrLoan';
import HomeCalcForm from './HomeCalcForm';

export default class HomeContent extends Component {
    render() {
        return (
            <div className="content__first-block green-layout">
                <div className="wrapper clearfix adfox-centered">
                    <div className="adfox-inlined"></div>
                </div>
                <div className="role">
                    <div className="wrapper no-padding">
                        <ul className="role-tabs clearfix">
                            <li className="col-xs-7 current">
                                <span>
                                    Вы хотите взять в долг
                                </span>
                            </li>
                            <li className="col-xs-7">
                                <span>
                                    <Link to="/lender">Вы хотите дать в долг</Link>
                                </span>
                            </li>
                        </ul>

                        <div className="role-box">
                            <div className="role-box__box visible">
                                <div className="role-box__box__get-money-block clearfix">
                                    <div className="role-box__box__get-money-block__wrapper full-width">
                                        <div className="steps clearfix steps4 ">
                                            <div className="steps__status"></div>
                                            <div className="step current">
                                                <span>1</span>
                                                <p>Просмотрите предложения</p>
                                            </div>
                                            <div className="step ">
                                                <span>2</span>
                                                <p>Заполните заявку</p>
                                            </div>
                                            <div className="step ">
                                                <span>3</span>
                                                <p>Заполните анкету</p>
                                            </div>
                                            <div className="step ">
                                                <span>4</span>
                                                <p>Получите деньги</p>
                                            </div>
                                        </div>
                                    </div>
                                    <HomeCalcForm />
                                    <div className="role-box__box__get-money-block clearfix">
                                        <HomeOffesrLoan url="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-layout clearfix dealings">
                    <div className="wrapper clearfix"></div>
                </div>
            </div>
        )
    }
}