import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

var data =
    [
        {id: 1, date: "01/01/2016", summ: 20000 ,perc: 0.1, srok: 48},
        {id: 2, date: "01/03/2016", summ: 30000 ,perc: 0.2, srok: 36},
        {id: 3, date: "01/05/2016", summ: 40000 ,perc: 0.3, srok: 14},
    ];

const tableStyles = {
    fontSize: '16px'
};

export default class HomeOffersLoan extends Component {
    /*componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({offers: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    }*/
    render() {
        var Items = data;
        var Item  = Items.map(function(item, index){
            return (
                <TableRow key={index}>
                    <TableRowColumn style={tableStyles}>{item.id}</TableRowColumn>
                    <TableRowColumn style={tableStyles}>{item.date}</TableRowColumn>
                    <TableRowColumn style={tableStyles}>{item.summ}</TableRowColumn>
                    <TableRowColumn style={tableStyles}>{item.perc}</TableRowColumn>
                    <TableRowColumn style={tableStyles}>{item.srok}</TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton label="Подробности" secondary={true} />
                    </TableRowColumn>
                </TableRow>
            );
        });
        return (
            <div className="clearfix">
                <div className="col-xs-14">
                    <Table>
                        <TableHeader displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn style={tableStyles}>ID заявки</TableHeaderColumn>
                                <TableHeaderColumn style={tableStyles}>Дата</TableHeaderColumn>
                                <TableHeaderColumn style={tableStyles}>Сумма</TableHeaderColumn>
                                <TableHeaderColumn style={tableStyles}>Ставка</TableHeaderColumn>
                                <TableHeaderColumn style={tableStyles}>Период</TableHeaderColumn>
                                <TableHeaderColumn>&nbsp;</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {Item}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}
