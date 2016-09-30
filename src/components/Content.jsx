import React, {Component} from 'react';
import ContentHeader from './ContentHeader';

export default class Content extends Component {
    render () {
        return (
            <main className="content">
                <div className="content__first-block green-layout"></div>
                <ContentHeader />
            </main>
        )
    }
}