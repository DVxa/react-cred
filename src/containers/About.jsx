import React, { Component } from 'react';
import { Header } from '../components/Header';
import Content from "../components/Content";


export default class About extends Component {
    render() {
        return (
            <header className="header">
                <Header />
                <Content title="О проекте" />
            </header>
        );
    }
}
