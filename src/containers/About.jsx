import React, { Component } from 'react';
import { Header } from "../components/Header";
import Content from "../components/Content";

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content title="О проекте"/>
            </div>
        );
    }
}
