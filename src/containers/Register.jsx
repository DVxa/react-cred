import React, { Component } from 'react';
import { Header } from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import RegistrationContent from "../components/Registration/RegistrationContent";

export default class Register extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="content">
                    <Content title="Регистрация клиента"/>
                    <RegistrationContent />
                </main>
                <Footer />
            </div>
        );
    }
}
