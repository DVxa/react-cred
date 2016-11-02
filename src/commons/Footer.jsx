import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="wrapper clearfix">
                <div className="row">
                    {/*<div class="social">
                        <i class="vk"><a href="http://vk.com/fingooroo" target="_blank"></a></i>
                        <i class="fb"><a href="https://www.facebook.com/fingooroo" target="_blank"></a></i>
                    </div>*/}

                    <div className="col-xs-3 copyright">
                        <p style={{color: 'white'}}>© 2016 Касса взаимопомощи</p>
                    </div>

                    <div className="col-xs-11" style={{align: 'right'}}>
                        <p>
                            <small style={{color: 'white'}}>
                                У вас возник вопрос или появилось предложение? Напишите нам на адрес <a style={{color: 'white'}} href="mailto:info-cred-cach@mail.ca.cbrf.ru">info-cred-cach@mail.ca.cbrf.ru</a> с темой "Касса взаимопомощи: Ошибка" или "Касса взаимопомощи: Пделолжение".
                            </small>
                        </p>
                    </div>
                    <div className="col-xs-4">
                        {/*<strong><i className="phone-img-white"></i>8 (800) 600-0101</strong>*/}
                    </div>
                </div>
            </div>
        )
    }
}