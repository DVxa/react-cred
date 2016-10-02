import React, {Component} from 'react';


var data =
    [
        {id: 1, date: "01/01/2016", summ: 20000 ,perc: 0.1, srok: 48},
        {id: 2, date: "01/03/2016", summ: 30000 ,perc: 0.2, srok: 36},
        {id: 3, date: "01/05/2016", summ: 40000 ,perc: 0.3, srok: 14},
    ];


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
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.summ}</td>
                    <td>{item.perc}</td>
                    <td>{item.srok}</td>
                    <td><button className="btn btn-primary">Подробности &raquo;</button></td>
                </tr>
            );
        });
        return (
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <td>№ заявки</td><td>Дата</td><td>Сумма</td><td>Ставка (% в день)</td><td>Срок</td><td>&nbsp;</td>
                    </tr>
                </thead>
                <tbody>
                    {Item}
                </tbody>
            </table>
        )
    }
}
