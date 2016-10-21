/**
 * Created by V.Minyailov-book on 17.10.2016.
 */
import React, { Component } from 'react';

import { green500, orange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Header } from "../../commons/Header";
import Content from "../../commons/Content";
import Footer from "../../commons/Footer";
import OfferCreateContent from "./components/OfferCreateContent";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        accent1Color: orange500
    }
});

export default class OfferCreatePage extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header />
                    <main className="content">
                        <Content title="Создание заявки"/>
                        <OfferCreateContent />
                    </main>
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}