import React, {Component} from 'react';
import { Link } from 'react-router';
import HomeCalcForm from './HomeCalcForm';

export default class HomeContent extends Component {
    render() {
        return (
            <div>
                <div className="role">
                    <div className="wrapper no-padding">
                        <ul className="role-tabs clearfix">
                            <li className="col-xs-7 current">
                                <span>
                                    Вы хотите взять в долг
                                </span></li>
                            <li className="col-xs-7">
                                <span>
                                    <Link to="/lender">Вы хотите дать в долг</Link>
                                </span></li>
                        </ul>

                        <div className="role-box">
                            <div className="role-box__box visible">
                                <div className="role-box__box__get-money-block clearfix">
                                    {/* <HomeCalcForm /> */}
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