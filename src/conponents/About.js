import React, { Component } from 'react';
import { Header } from '../containers/Header';

export default class About extends Component {
    render() {
        return (
            <header className="header">
                <Header />
                <h1>О проекте</h1>
            </header>
        );
    }
}
