import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="wrapper clearfix">

                    <div class="row">
                        {/*<div class="social">
                            <i class="vk"><a href="http://vk.com/fingooroo" target="_blank"></a></i>
                            <i class="fb"><a href="https://www.facebook.com/fingooroo" target="_blank"></a></i>
                        </div>*/}

                        <div className="col-xs-4 copyright">
                            <div>© 2016 Касса взаимопомощи</div>
                            <a href="mailto:info-cred-cach@mail.ca.cbrf.ru" className="mail-link">info-cred-cach@mail.ca.cbrf.ru</a>
                        </div>

                        <div className="col-xs-6 footer-central-block">
                            <i className="logo-white"></i>
                        </div>

                        <div className="col-xs-4">
                            <div className="contacts-block">
                                <i className="phone-img-white"></i>8 (800) 600-0101
                                <div className="contacts-time">С Понедельника по Пятницу с 9-00 до 19-00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}