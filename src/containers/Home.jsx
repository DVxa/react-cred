import React, { Component } from 'react';
import { Header } from '../components/Header';
import Content from '../components/Content';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content title="Главная"/>
            </div>
        );
    }
}
