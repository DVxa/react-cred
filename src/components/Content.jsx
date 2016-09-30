import React, {Component} from 'react';
import ContentHeader from './ConrentHeader';

export default class Content extends Component {
    render () {
        return (
            <main className="content">
                <div className="content__first-block green-layout"></div>
                <ContentHeader title={this.props.title} />
            </main>
        )
    }
}