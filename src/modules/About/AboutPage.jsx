import React, { Component } from 'react';
import { Header } from "../../commons/Header";
import Content from "../../commons/Content";
import Footer from "../../commons/Footer";

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="content">
                    <Content title="О проекте"/>
                </main>
                <Footer />
            </div>
        );
    }
}
