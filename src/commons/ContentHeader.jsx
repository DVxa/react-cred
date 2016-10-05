import React, {Component} from 'react';
import { Link } from 'react-router';


export default class ContentHeader extends Component {
    render() {
        return (
            <div className="content-page-top">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-xs-14">
                            <div className="breadcrumbs">
                                <Link to="/" className="gray-link">Главная</Link><span>→</span>{this.props.title}
                            </div>
                            <h1>{this.props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
