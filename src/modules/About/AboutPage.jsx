import React, { Component } from 'react';
import { green500, orange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Header } from "../../commons/Header";
import Content from "../../commons/Content";
import Footer from "../../commons/Footer";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        accent1Color: orange500
    }
});

export default class About extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header />
                    <main className="content">
                        <Content title="О проекте"/>
                    </main>
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}
