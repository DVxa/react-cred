import React, { Component } from 'react';
import { Header } from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import RegisterContent from "../components/Register/RegisterContent";

export default class Register extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="content">
                    <Content title="Регистрация клиента"/>
                    <RegisterContent />
                </main>
                <Footer />
            </div>
        );
    }
}
