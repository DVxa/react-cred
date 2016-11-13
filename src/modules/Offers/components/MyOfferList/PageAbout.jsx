import React, {Component} from 'react';
import  { Link } from 'react-router';


export default class PageAbout extends Component {
    render() {
        return (
            <div className="about-project">
                <h4>Как рассмотреть заявку</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link to="/faq/offer-new-borrow"> More ... </Link>
            </div>
        )
    }
}
