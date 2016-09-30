import React, {Component} from 'react';
import ContentHeader from './ContentHeader';


export default class Content extends Component {
    render () {
        return (
            <div>
                <div className="content__first-block green-layout"></div>
                <ContentHeader title={this.props.title}/>
            </div>
        )
    }
}
