import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="wrapper clearfix">

                    <div className="row">
                        {/*<div class="social">
                            <i class="vk"><a href="http://vk.com/fingooroo" target="_blank"></a></i>
                            <i class="fb"><a href="https://www.facebook.com/fingooroo" target="_blank"></a></i>
                        </div>*/}

                        <div className="col-xs-4 copyright">
                            &nbsp;
                        </div>

                        <div className="col-xs-6 footer-central-block">
                            <p>© 2016 Касса взаимопомощи</p>
                            <p><a href="mailto:info-cred-cach@mail.ca.cbrf.ru">info-cred-cach@mail.ca.cbrf.ru</a></p>
                            <p>
                                <strong><i className="phone-img-white"></i>8 (800) 600-0101</strong>
                            </p>
                        </div>

                        <div className="col-xs-4">
                            &nbsp;
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}