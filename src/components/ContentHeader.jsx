import React, {Component} from 'react';

export default class ContentHeader extends Component() {
    render() {
        return (
            <div className="content-page-top">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-xs-14">
                            <div className="breadcrumbs">

                            </div>
                            <h1>Страница</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}