/**
 * Created by V.Minyailov-book on 22.10.2016.
 */

import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MyDealListTable from './MyDealListTable';

export default class MyDealListContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="wrapper clearfix">
                <Paper style={{padding: '20px'}}>
                    <div className="row">
                        <div className="col-xs-14">
                            <MyDealListTable url={this.props.url}/>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}