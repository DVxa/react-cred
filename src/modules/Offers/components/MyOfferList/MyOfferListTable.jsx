/**
 * Created by V.Minyailov-book on 22.10.2016.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import * as MyOfferListActions from '../../../../actions/MyOfferListActions';

class MyOfferListTable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onOfferMoreButtonClickHandler = (e) => {
        console.log(e.target.getAttribute('value'));
    };

    getData = (url) => {
        this.props.actions.getOfferData(url)
    };

    componentDidMount = () => {
        this.getData(this.props.url);
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.url != this.props.url) {
            this.getData(this.props.url);
        }
    };

    onBtnOfferAcceptClickHandler = (e) => {
        console.log(e);
    };

    render () {
        let {offers} = this.props.list;

        if (offers.error) {
            console.error(offers.error);
            return;
        }

        if (offers.fetching) {
            return (
                <div style={{width: '100%', height: 200, textAlign: 'center', padding: 120}}>
                    <CircularProgress />
                </div>
            )
        }

        return (
            <Table>
                <TableHeader adjustForCheckbox={false}
                             displaySelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn>Сумма</TableHeaderColumn>
                        <TableHeaderColumn>Период</TableHeaderColumn>
                        <TableHeaderColumn>Ставка (%/дн)</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn>Подробности</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {offers.data.map((elem, index) => (
                    <TableRow key={index} data-item={elem.ID} onClick={this.onOfferMoreButtonClickHandler}>
                        <TableRowColumn style={{fontSize: 18}}>{elem.LOAN_SUMM}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.PERIOD}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>{elem.RATE}</TableRowColumn>
                        <TableRowColumn style={{fontSize: 18}}>
                        {(elem.ID == 1) ?
                            <RaisedButton
                                label="Выдать"
                                primary={true}
                                onClick={this.onBtnOfferAcceptClickHandler}
                            /> : <div />
                        }
                        </TableRowColumn>
                        <TableRowColumn>
                            <Link to={"/offer/" + elem.ID}>Подробнее</Link>
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
        list: state.lists.myOffers,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MyOfferListActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOfferListTable)
