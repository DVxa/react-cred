import React, { Component } from 'react';
import { Header } from '../components/Header';
import Footer from "../components/Footer";
import HomeContent from '../components/Home/HomeContent';
import HomeAbout from '../components/Home/HomeAbout';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="content">
                    <HomeContent />
                    <HomeAbout />
                </main>
                <Footer />
            </div>
        );
    }
}
