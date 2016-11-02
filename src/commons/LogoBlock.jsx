/**
 * Created by V.Minyailov-book on 24.10.2016.
 */
import React, {Component} from 'react';


export default class LogoBlock extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <div className="wrapper clearfix">
                <div className="col-xs-4 logo-block">
                    <img src="/static/dist/img/logo_sb1.png" alt="" width="250"/>
                    {/*<span>Человек человеку — банк</span>*/}
                </div>
                <div className="col-xs-9 col-xs-offset-1">
                    <p style={{marginTop: 10}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        )
    }
}
