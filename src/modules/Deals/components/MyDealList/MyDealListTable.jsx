/**
 * Created by V.Minyailov-book on 22.10.2016.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

import * as MyDealListActions from '../../../../actions/MyDealListActions';

class MyDealListTable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    getData = (url) => {
        this.props.actions.getDealData(url)
    };

    componentDidMount = () => {
        this.getData(this.props.url);
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.url != this.props.url) {
            this.getData(this.props.url);
        }
    };

    render () {
        let {deals} = this.props.list;


        if (deals.error) {
            console.error(deals.error);
            return;
        }

        if (deals.fetching) {
            return (
                <div style={{width: '100%', height: 200, textAlign: 'center', padding: 120}}>
                    <CircularProgress />
                </div>
            )
        }

        return (
            <Table>
                <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn>Сумма</TableHeaderColumn>
                        <TableHeaderColumn>Период</TableHeaderColumn>
                        <TableHeaderColumn>Ставка (%/дн)</TableHeaderColumn>
                        <TableHeaderColumn>Возврат</TableHeaderColumn>
                        <TableHeaderColumn>Сумма</TableHeaderColumn>
                        <TableHeaderColumn>Подробности</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {deals.data.map((elem, index) => (
                    <TableRow key={index} data-item={elem.ID} onClick={() => this.onOfferMoreButtonClickHandler(elem.ID)}>
                        <TableRowColumn style={{fontSize: 18}}>{elem.Amount}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.Period}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.Rate}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.DateEnd}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.AllRest}</TableRowColumn>
                        <TableRowColumn>
                            <Link to={"/deal/" + elem.ID}>Просмотр</Link>
                        </TableRowColumn>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.lists.myDeals,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MyDealListActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDealListTable)
