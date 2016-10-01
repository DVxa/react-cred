import React, { Component } from 'react';
import { Header } from '../components/Header';
import Content from '../components/Content';
import Footer from "../components/Footer";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="content">
                    <Content title="Главная"/>
                </main>
                <Footer />
            </div>
        );
    }
}
