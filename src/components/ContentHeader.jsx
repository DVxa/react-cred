import React, {Component} from 'react';

export default class ContentHeader extends Component() {

    /*componentDidMount() {
       if (this.props.title == 'Главная') {
           this.setState({
               breadcrumbs: Главная
           });
       } else {
           this.setState({
               breadcrumbs: {<Link to="/" className="gray-link">Главная</Link><span>→</span>{this.props.title}</div>}
           });
       }
    }*/
    render() {
        return (
            <div className="content-page-top">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-xs-14">
                            {/*<div className="breadcrumbs">
                                {this.state.breadcrumbs}
                            </div>*/}
                            <h1>{this.props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}