/**
 * Created by V.Minyailov-book on 15.10.2016.
 */
import React, { Component } from 'react';

export default class OfferListPage extends Component {
    render(){
        console.log(this.props.param);
        return(
            <h1>Заявки</h1>
        )
    }
};